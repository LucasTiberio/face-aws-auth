import { useEffect } from "react";

import useQueryParams from "./useQueryParams"

type ApiEndpointTrackingParams = {
    endpoint?: string;
}

const useApiEndpointTracking = () => {
    const queryParams = useQueryParams<ApiEndpointTrackingParams>();
    const { endpoint } = queryParams;

    /**
     * Identify wheter endpoint is in query params
     * Set in SessionStorage
     */
    useEffect(() => {
        if (endpoint) sessionStorage.setItem('endpoint', endpoint);
    }, [endpoint, queryParams])
}

export default useApiEndpointTracking