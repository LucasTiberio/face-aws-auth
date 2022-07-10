import { FileUploader, Image } from "evergreen-ui";
import styled from "styled-components";

export const Container = styled.div`
    position: relative;
`

export const AbsoluteImage = styled(Image)`
    position: absolute;
    left: 0;
    right: 0;

    max-width: 100%;
    width: 100%;
    height: 100%;

    border-radius: 4px;
`

export type iFileUploaderContainer = {
    fileUploadHeight?: string;
}
export const StyledFileUploader = styled(FileUploader)`
    height: ${({ fileUploadHeight }) => fileUploadHeight};
`