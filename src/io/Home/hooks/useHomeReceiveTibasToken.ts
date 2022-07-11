import { useEffect } from "react";

import { useLoginFlowContext } from "../../../contexts/login-flow-context";
import useTibasTokenTracking from "../../../hooks/useTibasTokenTracking";

const useHomeReceiveTibasToken = () => {
    const tibasToken = useTibasTokenTracking();
    const { step, setStep, addFormValues, setTokenPayload } = useLoginFlowContext();

    useEffect(() => {
        if (step === 'CREDENTIALS' && tibasToken?.login) {
            addFormValues({
                login: tibasToken.login,
            })

            setTokenPayload({
                type: 'TIBAS_TOKEN',
                value: tibasToken,
            })

            setStep('FACE')
        }
    }, [addFormValues, setStep, setTokenPayload, step, tibasToken])
}

export default useHomeReceiveTibasToken