import { iHomeForm, iSteps } from "../../components/Form/HomeForm/HomeForm.types";

type iTokenTypes = 'TIBAS_TOKEN'

export type iTokenPayload = {
    type: iTokenTypes;
    value: any;
}

export type iLoginFlowContext = {
    formValues: iHomeForm;
    setFormValues: (newLoginFormValues: iHomeForm) => void;
    addFormValues: (newLoginFormValues: Partial<iHomeForm>) => void;
    step: iSteps;
    setStep: (newStep: iSteps) => void;
    tokenPayload?: iTokenPayload;
    setTokenPayload: (newTokenPayload: iTokenPayload) => void;
}

export const dummyContext: iLoginFlowContext = {
    formValues: {
        login: '',
    },
    setFormValues: () => false,
    addFormValues: () => false,
    setStep: () => false,
    step: 'CREDENTIALS',
    setTokenPayload: () => false,
}