import { Button } from 'evergreen-ui';
import React from 'react';

const LoginAsTibas = () => {
    const authTibasClub = `https://auth.tibas.club?p=${window.location.href}`
    const Image = () => <img width={32} alt="Auth Tibas Logo" src='https://auth.tibas.club/favicon.png' />

    const handleGoToLoginAsTibas = () => window.location.href = authTibasClub

    return (
        <Button iconBefore={Image} size='large' onClick={handleGoToLoginAsTibas}>
            Continuar via Tibas
        </Button>
    )
}

export default LoginAsTibas