import { Button } from 'evergreen-ui';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CREATE_ACCOUNT_PATH } from '../../route/routes';
import { Container, Wrapper } from './DontHaveAnAccount.styles';

const DontHaveAnAccount: React.FC = () => {
    const navigate = useNavigate()
    const goToCreateAccount = () => navigate(CREATE_ACCOUNT_PATH)

    return (
        <Container>
            <Wrapper>
                <Button size='large' onClick={goToCreateAccount}>Criar uma conta</Button>
            </Wrapper>
        </Container>
    )
}

export default DontHaveAnAccount