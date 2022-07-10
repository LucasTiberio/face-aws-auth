import { useMemo } from "react";

import TibasToken from "../commons/utils/TibasToken";
import useQueryParams from "./useQueryParams"

type TibasTokenTrackingParams = {
    tt?: string;
}

const useTibasTokenTracking = () => {
    const queryParams = useQueryParams<TibasTokenTrackingParams>();
    const { tt } = queryParams;

    /**
     * Identify wheter endpoint is in query params
     * Clear search params
     * Return it
     */
    const tibasToken = useMemo(() => {
        if (tt) {
            const decryptedTibasToken = new TibasToken(tt).decrypt();

            return decryptedTibasToken
        }
    }, [tt])

    return tibasToken;
}

export default useTibasTokenTracking