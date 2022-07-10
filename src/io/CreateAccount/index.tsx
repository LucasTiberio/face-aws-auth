import React from 'react';

import CreateAccountForm from '../../components/Form/CreateAccountForm';
import LogoComponent from '../../components/LogoComponent';
import SideWrapper from '../../components/SideWrapper';

const CreateAccountIO: React.FC = () => {
    return (
        <SideWrapper LeftComponent={<LogoComponent />}>
            <CreateAccountForm />
        </SideWrapper>
    )
}

export default CreateAccountIO