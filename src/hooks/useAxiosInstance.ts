import axios from 'axios'
import { useMemo } from 'react'

import { API_ENDPOINT } from '../commons/envs'

const useAxiosInstance = () => {
    const queryParamsEndpoint = useMemo(() => {
        const endpointFromSessionStorage = sessionStorage.getItem('endpoint');
        return endpointFromSessionStorage
    }, [])

    const axiosInstance = useMemo(() => {
        const instance = axios.create({
            baseURL: queryParamsEndpoint || API_ENDPOINT,
        })

        return instance
    }, [queryParamsEndpoint])

    return axiosInstance
}

export default useAxiosInstance