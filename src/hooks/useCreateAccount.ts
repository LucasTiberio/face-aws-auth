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
        cpf,
        email,
        dataNascimento
    }: iCreateAccountEntryValues) => {
        try {
            setLoading(true)
            const { data } = await axios.post('/Usuario', {
                nome: user,
                senha: password,
                email,
                dataNascimento,
                cpf
            })
            console.log(data)
            const formData = new FormData();
            formData.append('imagem', picture);
            const { data: dataDois } = await axios.post('/usuario/imagem?id=' + data.Id, formData, {
                headers: {
                    'Content-Type': `multipart/form-data;`
                }
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