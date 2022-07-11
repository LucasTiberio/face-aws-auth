import { iFile } from "../../../types/common";

export type iSteps = 'CREDENTIALS' | 'FACE'

export type iHomeForm = {
    login: string;
    password?: string;
    file?: iFile;
}