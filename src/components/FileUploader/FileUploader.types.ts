import { iFileUploaderContainer } from "./FileUploader.style";

export type PropTypes = iFileUploaderContainer & {
    label?: string;
    description?: string;
    src?: string;
    onChange: (files: File[]) => void;
}