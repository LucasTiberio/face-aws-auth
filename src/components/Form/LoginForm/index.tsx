import { Button, TextInputField } from 'evergreen-ui';
import { FormikHelpers, useFormik } from 'formik';
import React, { useCallback } from 'react';

import { useLoginFlowContext } from '../../../contexts/login-flow-context';
import DontHaveAnAccount from '../../DontHaveAnAccount';
import FlexGroup from '../../FlexGroup';
import { LoginFormValidationSchema } from './LoginForm.schema';
import { Form } from './LoginForm.styles';

export type iFormValues = {
    login: string;
    password?: string;
}

export const initialValues: iFormValues = {
    login: '',
    password: '',
}

const LoginForm: React.FC = () => {
    const { setLoginFormValues, loginFormValues, setStep } = useLoginFlowContext();

    const handleSubmitFormik = useCallback(({
        login,
        password,
    }: iFormValues, formikHelpers: FormikHelpers<iFormValues>) => {
        setLoginFormValues({
            login,
            password,
        })

        setStep('FACE')
    }, [setLoginFormValues, setStep])

    const {
        getFieldProps,
        handleSubmit,
        errors,
        touched
    } = useFormik({
        initialValues: loginFormValues,
        onSubmit: handleSubmitFormik,
        validateOnBlur: true,
        validationSchema: LoginFormValidationSchema
    })

    return (
        <Form onSubmit={handleSubmit}>
            <TextInputField
                {...getFieldProps('login')}
                inputHeight={42}
                placeholder="NomeDeUsuario"
                required
                label="Digite seu login"
                isInvalid={touched.login && !!errors.login}
                validationMessage={touched.login && errors.login}
            />
            <TextInputField
                {...getFieldProps('password')}
                inputHeight={42}
                placeholder="Digite sua senha..."
                required
                label="Sua senha"
                type="password"
                isInvalid={touched.password && !!errors.password}
                validationMessage={touched.password && errors.password}
            />

            <FlexGroup>
                <Button type="submit" size="large">
                    Próximo
                </Button>

                <DontHaveAnAccount />
            </FlexGroup>
        </Form>
    )
}

export default LoginForm