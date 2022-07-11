import { Button, TextInputField } from 'evergreen-ui';
import { useFormikContext } from 'formik';
import React from 'react';

import DontHaveAnAccount from '../../../../DontHaveAnAccount';
import FlexGroup from '../../../../FlexGroup';
import LoginAsTibas from '../../../../LoginAsTibas';
import { iHomeForm } from '../../HomeForm.types';
import { Form } from './LoginForm.styles';

const LoginForm: React.FC = () => {
    const {
        getFieldProps,
        handleSubmit,
        errors,
        touched
    } = useFormikContext<iHomeForm>()

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
                <Button type="submit" size="large" marginBottom="24px">
                    Próximo
                </Button>

                <DontHaveAnAccount />
            </FlexGroup>

            <LoginAsTibas />
        </Form>
    )
}

export default LoginForm