import React from 'react';

import HomeForm from '../../components/Form/HomeForm';
import LogoComponent from '../../components/LogoComponent';
import SideWrapper from '../../components/SideWrapper';
import useHomeReceiveTibasToken from './hooks/useHomeReceiveTibasToken';

const HomeIO: React.FC = () => {
    useHomeReceiveTibasToken();

    return (
        <SideWrapper LeftComponent={<LogoComponent />}>
            <HomeForm />
        </SideWrapper>
    );
}

export default HomeIO