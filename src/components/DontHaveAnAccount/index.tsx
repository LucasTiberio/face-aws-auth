import { Button } from 'evergreen-ui';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CREATE_ACCOUNT_PATH } from '../../route/routes';
import LoginAsTibas from '../LoginAsTibas';
import { Container, Wrapper } from './DontHaveAnAccount.styles';
import { PropTypes } from './DontHaveAnAccount.types';

const DontHaveAnAccount: React.FC<PropTypes> = ({
    showLoginViaTibas
}) => {
    const navigate = useNavigate()
    const goToCreateAccount = () => navigate(CREATE_ACCOUNT_PATH)

    return (
        <Container>
            <Wrapper>
                <Button size='large' onClick={goToCreateAccount}>Criar uma conta</Button>
            </Wrapper>
            {showLoginViaTibas && (
                <React.Fragment>
                    <span>ou</span>
                    <Wrapper>
                        <LoginAsTibas />
                    </Wrapper>
                </React.Fragment>
            )}
        </Container>
    )
}

export default DontHaveAnAccount