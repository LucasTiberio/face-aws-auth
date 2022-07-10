import { useState } from "react"

import { iCreateAccountEntryValues } from "../types/create-account";
import useAxiosInstance from "./useAxiosInstance"

const useCreateAccount = () => {
    const axios = useAxiosInstance();
    const [loading, setLoading] = useState(false)

    const createAccount = async ({
        password,
        picture,
        user,
    }: iCreateAccountEntryValues) => {
        try {
            setLoading(true)
            const { data } = await axios.post('/criar-conta', {
                user,
                password,
                picture,
            })

            return data;
        } catch (error) {
            console.error('useCreateAccount', error)
            return {
                error: true,
                data: error,
            }
        } finally {
            setLoading(false)
        }
    }

    return {
        createAccount,
        loading,
    }
}

export default useCreateAccount