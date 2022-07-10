import React, { useEffect, useState } from 'react';

import FaceForm from '../../components/Form/FaceForm';
import LoginForm from '../../components/Form/LoginForm';
import LogoComponent from '../../components/LogoComponent';
import SideWrapper from '../../components/SideWrapper';
import useQueryParams from '../../hooks/useQueryParams';
import { iHomePossibleQueryParams, iSteps } from './home.types';

const HomeIO: React.FC = () => {
    const queryParams = useQueryParams<iHomePossibleQueryParams>();
    const { step: queryParamsStep } = queryParams;
    const [step, setStep] = useState<iSteps>('CREDENTIALS');

    const StepView: Record<iSteps, JSX.Element> = {
        CREDENTIALS: <LoginForm setStep={setStep} />,
        FACE: <FaceForm />
    }

    /**
     * Verify if contains step in query params
     * Verify if step exist, if so set it on state
     */
    useEffect(() => {
        const _queryParamsStep = queryParamsStep as iSteps
        if (queryParamsStep && StepView[_queryParamsStep]) setStep(_queryParamsStep);
    }, [StepView, queryParamsStep])

    return (
        <SideWrapper LeftComponent={<LogoComponent />}>
            {StepView[step as iSteps]}
        </SideWrapper>
    );
}

export default HomeIO