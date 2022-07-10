import { iFormValues as iLoginFormValues, initialValues as loginFormInitialValues } from "../../components/Form/LoginForm";
import { iFile } from "../../types/common";

export type iLoginFlowContext = {
    loginFormValues: iLoginFormValues;
    setLoginFormValues: (newLoginFormValues: iLoginFormValues) => void;
    faceFormFile?: iFile;
    setFaceFormFile: (newFile: iFile) => void;
}

export const dummyContext: iLoginFlowContext = {
    setLoginFormValues: () => false,
    loginFormValues: loginFormInitialValues,
    setFaceFormFile: () => false,
}