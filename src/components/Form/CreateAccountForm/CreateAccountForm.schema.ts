import * as yup from 'yup'

import { YUP_ERRORS } from '../../../commons/errors'

export const CreateAccountFormValidationSchema = yup.object({
    login: yup.string().required(YUP_ERRORS.REQUIRED),
    password: yup.string().required(YUP_ERRORS.REQUIRED),
})