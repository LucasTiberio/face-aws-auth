import { Button } from 'evergreen-ui';
import React, { useCallback, useEffect, useState } from 'react';

import { useLoginFlowContext } from '../../../contexts/login-flow-context';
import { iFile } from '../../../types/common';
import FileUploader from '../../FileUploader';
import FlexGroup from '../../FlexGroup';
import { Wrapper } from './FaceForm.styles';

const FaceForm: React.FC = () => {
    const { setFaceFormFile, faceFormFile } = useLoginFlowContext();
    const [file, setFile] = useState<iFile | undefined>(faceFormFile);

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

    const handleSubmit = useCallback((evt: React.MouseEvent<HTMLButtonElement>) => {
        if (!file) return;

        // TODO: Send image to API and verify
    }, [file])

    // Update file on LoginFlow Context
    useEffect(() => {
        if (file && file.name !== faceFormFile?.name) setFaceFormFile(file)
    }, [faceFormFile, file, setFaceFormFile])

    return (
        <Wrapper>
            <FileUploader
                onChange={handleChangeFileInput}
                label="Confirmação facial"
                description='Upload de imagem'
                src={file?.src}
            />

            <FlexGroup>
                <Button onClick={handleSubmit} size="large">
                    Entrar
                </Button>

                {file && (
                    <Button onClick={handleResetFileUploader} size="large">
                        Remover foto
                    </Button>
                )}
            </FlexGroup>
        </Wrapper>
    )
}

export default FaceForm