import React, { createContext, useState } from 'react'

import { iSteps } from '../../components/Form/HomeForm/HomeForm.types'
import { dummyContext, iLoginFlowContext, iTokenPayload } from './login-flow-context.types'

export const LoginFlowContext = createContext<iLoginFlowContext>(dummyContext)

export const useLoginFlowContext = (): iLoginFlowContext =>
    React.useContext(LoginFlowContext)

type PropTypes = {
    children: React.ReactNode | React.ReactNode[];
}
const LoginFlowContextProvider: React.FC<PropTypes> = ({ children }) => {
    const [step, setStep] = useState<iSteps>(dummyContext.step)
    const [tokenPayload, setTokenPayload] = useState<iTokenPayload>()

    return (
        <LoginFlowContext.Provider
            value={{
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