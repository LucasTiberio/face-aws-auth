import { Button, TextInputField } from 'evergreen-ui';
import { FormikHelpers, useFormik } from 'formik';
import React, { useCallback } from 'react';

import DontHaveAnAccount from '../../DontHaveAnAccount';
import FlexGroup from '../../FlexGroup';
import { LoginFormValidationSchema } from './LoginForm.schema';
import { Form } from './LoginForm.styles';
import type { PropTypes } from './LoginForm.types';

export const initialValues = {
    login: '',
    password: '',
}

export type iFormValues = typeof initialValues

const LoginForm: React.FC<PropTypes> = ({
    setStep,
}) => {
    const handleSubmitFormik = useCallback((values: iFormValues, formikHelpers: FormikHelpers<iFormValues>) => {
        // TODO: Verification
        setStep('FACE')
    }, [setStep])

    const {
        getFieldProps,
        handleSubmit,
        errors,
        touched
    } = useFormik({
        initialValues,
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