import { useEffect } from "react";

import { useLoginFlowContext } from "../../../contexts/login-flow-context";
import useTibasTokenTracking from "../../../hooks/useTibasTokenTracking";

const useHomeReceiveTibasToken = () => {
    const tibasToken = useTibasTokenTracking();
    const { step, setStep, setTokenPayload } = useLoginFlowContext();

    useEffect(() => {
        if (step === 'CREDENTIALS' && tibasToken?.login) {
            // TODO: Set value to login

            setTokenPayload({
                type: 'TIBAS_TOKEN',
                value: tibasToken,
            })

            setStep('FACE')
        }
    }, [setStep, setTokenPayload, step, tibasToken])
}

export default useHomeReceiveTibasToken