import { useEffect } from "react";

import useQueryParams from "./useQueryParams"

type ApiEndpointTrackingParams = {
    endpoint?: string;
}

const useApiEndpointTracking = () => {
    const queryParams = useQueryParams<ApiEndpointTrackingParams>();
    const { endpoint } = queryParams;
    const { history, location } = window

    /**
     * Identify wheter endpoint is in query params
     * Set in SessionStorage
     */
    useEffect(() => {
        if (endpoint) {
            sessionStorage.setItem('endpoint', endpoint);

            // Clear query params
            const currentUrl = location.origin + location.pathname
            history.pushState('', '', currentUrl)
        }
    }, [endpoint, history, location.origin, location.pathname, queryParams])
}

export default useApiEndpointTracking