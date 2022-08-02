import { iSteps } from "../../components/Form/HomeForm/HomeForm.types";

type iTokenTypes = 'TIBAS_TOKEN'

export type iTokenPayload = {
    type: iTokenTypes;
    value: any;
}

export type iLoginFlowContext = {
    step: iSteps;
    setStep: (newStep: iSteps) => void;
    tokenPayload?: iTokenPayload;
    setTokenPayload: (newTokenPayload: iTokenPayload) => void;
}

export const dummyContext: iLoginFlowContext = {
    setStep: () => false,
    step: 'CREDENTIALS',
    setTokenPayload: () => false,
}