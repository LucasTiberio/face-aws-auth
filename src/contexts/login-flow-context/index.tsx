import React, { createContext, useState } from 'react'

import { iFormValues as iLoginFormValues } from "../../components/Form/LoginForm";
import { iFile } from '../../types/common';
import { dummyContext, iLoginFlowContext } from './login-flow-context.types'

export const LoginFlowContext = createContext<iLoginFlowContext>(dummyContext)

export const useLoginFlowContext = (): iLoginFlowContext =>
    React.useContext(LoginFlowContext)

type PropTypes = {
    children: React.ReactNode | React.ReactNode[];
}
const LoginFlowContextProvider: React.FC<PropTypes> = ({ children }) => {
    const [loginFormValues, setLoginFormValues] = useState<iLoginFormValues>(dummyContext.loginFormValues)
    const [faceFormFile, setFaceFormFile] = useState<iFile>()

    return (
        <LoginFlowContext.Provider
            value={{
                loginFormValues,
                setLoginFormValues,
                faceFormFile,
                setFaceFormFile,
            }}
        >
            {children}
        </LoginFlowContext.Provider>
    )
}

export default LoginFlowContextProvider