import React from 'react';
import { Link } from 'react-router-dom';

import { CREATE_ACCOUNT_PATH } from '../../route/routes';

const DontHaveAnAccount: React.FC = () => {
    return (
        <div>
            <p>Não possui uma conta?</p>
            <Link to={CREATE_ACCOUNT_PATH}>Criar uma conta</Link>
        </div>
    )
}

export default DontHaveAnAccount