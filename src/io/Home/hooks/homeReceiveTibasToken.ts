import { useEffect } from "react";

import { useLoginFlowContext } from "../../../contexts/login-flow-context";
import useTibasTokenTracking from "../../../hooks/useTibasTokenTracking";

const HomeReceiveTibasToken = () => {
    const tibasToken = useTibasTokenTracking();
    const { step, setStep, setLoginFormValues, setTokenPayload } = useLoginFlowContext();

    useEffect(() => {
        if (step === 'CREDENTIALS' && tibasToken?.login) {
            setLoginFormValues({
                login: tibasToken.login,
            })

            setTokenPayload({
                type: 'TIBAS_TOKEN',
                value: tibasToken,
            })

            setStep('FACE')
        }
    }, [setLoginFormValues, setStep, setTokenPayload, step, tibasToken])
}

const homeReceiveTibasToken = HomeReceiveTibasToken

export default homeReceiveTibasToken