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
        login,
        photo
    }: iLoginEntryValues) => {
        try {
            setLoading(true)
            const { data } = await axios.post('/Usuario/login', {
                email: login,
                senhaLogin: password,
            })

            const formData = new FormData()
            formData.append('imagemLogin', photo)

            const { data: dataDois } = await axios.post(`/Usuario/Login/Imagem?id=${data.id}`, formData, {
                headers: {
                    'Content-Type': `multipart/form-data;`
                }
            })

            setProfile({
                login: data.login,
                name: data.name,
                image: photo,
            })

            return {
                ...data,
                ...dataDois,
            };
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