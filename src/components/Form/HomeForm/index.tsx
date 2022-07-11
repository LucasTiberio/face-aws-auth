import { Formik, FormikHelpers } from 'formik';
import React, { useCallback } from 'react';

import { useLoginFlowContext } from '../../../contexts/login-flow-context';
import FaceForm from './components/FaceForm';
import LoginForm from './components/LoginForm';
import { HomeFormValidationSchema } from './HomeForm.schema';
import { iHomeForm, iSteps } from './HomeForm.types';

const HomeForm: React.FC = () => {
    const { step, setStep, formValues } = useLoginFlowContext();

    const StepViewForm: Record<iSteps, JSX.Element> = {
        CREDENTIALS: <LoginForm />,
        FACE: <FaceForm />
    }

    const handleSubmitFormik = useCallback(({
        login,
        password,
        file,
    }: iHomeForm, formikHelpers: FormikHelpers<iHomeForm>) => {
        if (step === 'CREDENTIALS') {
            setStep('FACE')
        }

        if (step === 'FACE') {
            // todo: login
        }

    }, [setStep, step])

    return (
        <Formik
            initialValues={formValues}
            onSubmit={handleSubmitFormik}
            validateOnBlur={true}
            validationSchema={HomeFormValidationSchema}
        >
            {StepViewForm[step as iSteps]}
        </Formik>
    );
}

export default HomeForm