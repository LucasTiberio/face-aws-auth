import { Button } from 'evergreen-ui';
import { useFormikContext } from 'formik';
import React from 'react';

import { useLoginFlowContext } from '../../../../../contexts/login-flow-context';
import FileUploader from '../../../../FileUploader';
import FlexGroup from '../../../../FlexGroup';
import { Wrapper } from './FaceForm.styles';

const FaceForm: React.FC = () => {
    const { addFormValues, formValues, setStep } = useLoginFlowContext();
    const { file } = formValues

    const handleResetFileUploader = () => addFormValues({
        file: undefined,
    })

    const handleGoToLoginFormStep = () => setStep('CREDENTIALS')

    const handleChangeFileInput = (files: File[]) => {
        const [file] = files;
        if (!file) return

        const newFile = {
            ...file,
            src: URL.createObjectURL(file),
        }

        addFormValues({
            file: newFile,
        });
    }

    const {
        submitForm,
    } = useFormikContext()

    return (
        <Wrapper>
            <FileUploader
                onChange={handleChangeFileInput}
                label="Confirmação facial"
                description='Upload de imagem'
                src={file?.src}
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