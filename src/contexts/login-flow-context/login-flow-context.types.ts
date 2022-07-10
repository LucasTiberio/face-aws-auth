import { iFormValues as iLoginFormValues, initialValues as loginFormInitialValues } from "../../components/Form/LoginForm";
import { iSteps } from "../../io/Home/home.types";
import { iFile } from "../../types/common";

type iTokenTypes = 'TIBAS_TOKEN'

export type iTokenPayload = {
    type: iTokenTypes;
    value: any;
}

export type iLoginFlowContext = {
    loginFormValues: iLoginFormValues;
    setLoginFormValues: (newLoginFormValues: iLoginFormValues) => void;
    faceFormFile?: iFile;
    setFaceFormFile: (newFile: iFile) => void;
    step: iSteps;
    setStep: (newStep: iSteps) => void;
    tokenPayload?: iTokenPayload;
    setTokenPayload: (newTokenPayload: iTokenPayload) => void;
}

export const dummyContext: iLoginFlowContext = {
    setLoginFormValues: () => false,
    loginFormValues: loginFormInitialValues,
    setFaceFormFile: () => false,
    setStep: () => false,
    step: 'CREDENTIALS',
    setTokenPayload: () => false,
}