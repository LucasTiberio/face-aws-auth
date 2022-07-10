import React, { createContext, useState } from 'react'

import { iFormValues as iLoginFormValues } from "../../components/Form/LoginForm";
import { iSteps } from '../../io/Home/home.types';
import { iFile } from '../../types/common';
import { dummyContext, iLoginFlowContext, iTokenPayload } from './login-flow-context.types'

export const LoginFlowContext = createContext<iLoginFlowContext>(dummyContext)

export const useLoginFlowContext = (): iLoginFlowContext =>
    React.useContext(LoginFlowContext)

type PropTypes = {
    children: React.ReactNode | React.ReactNode[];
}
const LoginFlowContextProvider: React.FC<PropTypes> = ({ children }) => {
    const [loginFormValues, setLoginFormValues] = useState<iLoginFormValues>(dummyContext.loginFormValues)
    const [faceFormFile, setFaceFormFile] = useState<iFile>()
    const [step, setStep] = useState<iSteps>(dummyContext.step)
    const [tokenPayload, setTokenPayload] = useState<iTokenPayload>()

    return (
        <LoginFlowContext.Provider
            value={{
                loginFormValues,
                setLoginFormValues,
                faceFormFile,
                setFaceFormFile,
                step,
                setStep,
                tokenPayload,
                setTokenPayload,
            }}
        >
            {children}
        </LoginFlowContext.Provider>
    )
}

export default LoginFlowContextProvider