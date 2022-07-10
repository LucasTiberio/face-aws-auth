import { Button } from 'evergreen-ui';
import React, { useCallback, useState } from 'react';

import { iFile } from '../../../types/common';
import FileUploader from '../../FileUploader';
import FlexGroup from '../../FlexGroup';
import { Wrapper } from './FaceForm.styles';

const FaceForm: React.FC = () => {
    const [file, setFile] = useState<iFile>();

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