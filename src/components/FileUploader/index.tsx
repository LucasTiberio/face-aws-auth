import React, { useMemo } from 'react';

import { AbsoluteImage, Container, StyledFileUploader } from './FileUploader.style';
import { PropTypes } from './FileUploader.types';

const FileUploader: React.FC<PropTypes> = ({
    label = "Upload de imagem",
    description: descriptionProps,
    src,
    onChange,
    fileUploadHeight = "300px"
}) => {
    const description = useMemo(() => {
        const alwaysShownText = 'Tamanho máximo de arquivo: 50MB.';
        const descriptionWithDot = descriptionProps ? `${descriptionProps}. ` : '';
        return `${descriptionWithDot}${alwaysShownText}`
    }, [descriptionProps])

    return (
        <Container>
            {src && <AbsoluteImage alt="Sample uploaded image" src={src} />}
            <StyledFileUploader
                height={fileUploadHeight}
                label={label}
                description={description}
                maxSizeInBytes={50 * 1024 ** 2}
                maxFiles={1}
                onChange={onChange}
            />
        </Container>
    )
}

export default FileUploader