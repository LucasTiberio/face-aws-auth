import { Formik, FormikHelpers } from 'formik';
import React, { useCallback } from 'react';

import { useLoginFlowContext } from '../../../contexts/login-flow-context';
import useLogin from '../../../hooks/useLogin';
import FaceForm from './components/FaceForm';
import LoginForm from './components/LoginForm';
import { HomeFormValidationSchema } from './HomeForm.schema';
import { iHomeForm, iSteps } from './HomeForm.types';

const HomeForm: React.FC = () => {
    const { step, setStep } = useLoginFlowContext();
    const { login: doLogin } = useLogin();

    const StepViewForm: Record<iSteps, JSX.Element> = {
        CREDENTIALS: <LoginForm />,
        FACE: <FaceForm />
    }

    const handleSubmitFormik = useCallback(async ({
        login: email,
        file,
        password,
    }: iHomeForm, formikHelpers: FormikHelpers<iHomeForm>) => {
        if (step === 'CREDENTIALS') {
            setStep('FACE')
        }

        if (step === 'FACE' && password && file) {
            const data = await doLogin({
                login: email,
                password,
                photo: file,
            })

            console.log({ data })
        }

    }, [doLogin, setStep, step])

    return (
        <Formik
            initialValues={{
                login: '',
            }}
            onSubmit={handleSubmitFormik}
            validateOnBlur={true}
            validationSchema={HomeFormValidationSchema}
        >
            {StepViewForm[step as iSteps]}
        </Formik>
    );
}

export default HomeForm