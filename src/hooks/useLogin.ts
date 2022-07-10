import { useState } from "react"

import { TIBAS_TOKEN_SECRET } from "../commons/envs";
import { useProfileContext } from "../contexts/profile-context"
import { iLoginEntryValues, iLoginViaTibasToken } from "../types/login";
import useAxiosInstance from "./useAxiosInstance";

const useLogin = () => {
    const { setProfile } = useProfileContext();
    const axios = useAxiosInstance();
    const [loading, setLoading] = useState(false)

    const login = async ({
        password,
        login
    }: iLoginEntryValues) => {
        try {
            setLoading(true)
            const { data } = await axios.post('/login', {
                login,
                password,
            })

            setProfile({
                login: data.login,
                name: data.name,
                image: data.image,
            })

            return data;
        } catch (error) {
            console.error('useLogin', error)
            return {
                error: true,
                data: error,
            }
        } finally {
            setLoading(false)
        }
    }

    const loginViaTibasToken = async ({
        tibasToken
    }: iLoginViaTibasToken) => {
        if (!TIBAS_TOKEN_SECRET) return;

        // todo decrypt
        const decryptedTibasToken = {
            login: tibasToken,
            name: tibasToken,
        };
        setProfile({
            login: decryptedTibasToken.login,
            name: decryptedTibasToken.name,
        })
    }

    return {
        login,
        loginViaTibasToken,
        loading,
    }
}

export default useLogin