import { Button } from 'evergreen-ui';
import { useFormikContext } from 'formik';
import React, { useMemo } from 'react';

import { useLoginFlowContext } from '../../../../../contexts/login-flow-context';
import FileUploader from '../../../../FileUploader';
import FlexGroup from '../../../../FlexGroup';
import { iHomeForm } from '../../HomeForm.types';
import { Wrapper } from './FaceForm.styles';

const FaceForm: React.FC = () => {
    const { setStep } = useLoginFlowContext();

    const {
        submitForm,
        setFieldValue,
        values: {
            file,
        },
    } = useFormikContext<iHomeForm>()

    const handleResetFileUploader = () => setFieldValue('file', undefined)

    const handleGoToLoginFormStep = () => setStep('CREDENTIALS')

    const fileUrl = useMemo(() => file ? URL.createObjectURL(file) : '', [file])

    const handleChangeFileInput = (files: File[]) => {
        const [file] = files;
        if (!file) return

        setFieldValue('file', file)
    }

    return (
        <Wrapper>
            <FileUploader
                onChange={handleChangeFileInput}
                label="Confirmação facial"
                description='Upload de imagem'
                src={fileUrl}
            />

            <FlexGroup>
                <Button onClick={submitForm} size="large">
                    Entrar
                </Button>

                {file && (
                    <Button onClick={handleResetFileUploader} size="large">
                        Remover foto
                    </Button>
                )}

                <Button onClick={handleGoToLoginFormStep} size="large">
                    Voltar
                </Button>
            </FlexGroup>
        </Wrapper>
    )
}

export default FaceForm