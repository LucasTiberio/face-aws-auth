import React from 'react';

import FaceForm from '../../components/Form/FaceForm';
import LoginForm from '../../components/Form/LoginForm';
import LogoComponent from '../../components/LogoComponent';
import SideWrapper from '../../components/SideWrapper';
import { useLoginFlowContext } from '../../contexts/login-flow-context';
import { iSteps } from './home.types';
import homeReceiveTibasToken from './hooks/homeReceiveTibasToken';

const HomeIO: React.FC = () => {
    const { step } = useLoginFlowContext();

    homeReceiveTibasToken();

    const StepView: Record<iSteps, JSX.Element> = {
        CREDENTIALS: <LoginForm />,
        FACE: <FaceForm />
    }

    return (
        <SideWrapper LeftComponent={<LogoComponent />}>
            {StepView[step as iSteps]}
        </SideWrapper>
    );
}

export default HomeIO