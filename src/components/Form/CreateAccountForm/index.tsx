import { Button, TextInputField } from 'evergreen-ui';
import { FormikHelpers, useFormik } from 'formik';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { HOME_PATH } from '../../../route/routes';
import { iFile } from '../../../types/common';
import FileUploader from '../../FileUploader';
import FlexGroup from '../../FlexGroup';
import { CreateAccountFormValidationSchema } from './CreateAccountForm.schema';
import { Form } from './CreateAccountForm.styles';
import type { PropTypes } from './CreateAccountForm.types';

const initialValues = {
    login: '',
    password: '',
}

type iFormValues = typeof initialValues

const CreateAccountForm: React.FC<PropTypes> = () => {
    const [file, setFile] = useState<iFile>()
    const navigate = useNavigate()

    const handleResetFileUploader = () => setFile(undefined)

    const handleChangeFileInput = (files: File[]) => {
        const [file] = files;
        if (!file) return

        const newFile = {
            ...file,
            src: URL.createObjectURL(file),
        }

        setFile(newFile);
    }

    const handleSubmitFormik = useCallback((values: iFormValues, formikHelpers: FormikHelpers<iFormValues>) => {
        // TODO: Verification
    }, [])

    const handleGoToHome = () => navigate(HOME_PATH)

    const {
        getFieldProps,
        handleSubmit,
        errors,
        touched,
    } = useFormik({
        initialValues,
        onSubmit: handleSubmitFormik,
        validateOnBlur: true,
        validationSchema: CreateAccountFormValidationSchema
    })

    return (
        <Form onSubmit={handleSubmit}>
            <TextInputField
                {...getFieldProps('login')}
                inputHeight={42}
                placeholder="NomeDeUsuarioTeste"
                required
                label="Crie um login"
                isInvalid={touched.login && !!errors.login}
                validationMessage={touched.login && errors.login}
            />

            <TextInputField
                {...getFieldProps('password')}
                inputHeight={42}
                placeholder="@Teste123"
                required
                label="Crie sua senha"
                type="password"
                isInvalid={touched.password && !!errors.password}
                validationMessage={touched.password && errors.password}
            />

            <FileUploader
                onChange={handleChangeFileInput}
                label="Adicionar confirmação facial"
                description='Fazer upload de imagem'
                src={file?.src}
            />

            <FlexGroup>
                <Button type="submit" size="large">
                    Criar conta
                </Button>

                {file && (
                    <Button onClick={handleResetFileUploader} size="large">
                        Remover foto
                    </Button>
                )}

                <Button onClick={handleGoToHome} size='large'>
                    Voltar
                </Button>
            </FlexGroup>
        </Form>
    )
}

export default CreateAccountForm