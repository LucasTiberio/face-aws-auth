import React from 'react'

import ProfileContextProvider from './profile-context';

type PropTypes = {
    children: React.ReactNode | React.ReactNode[];
}

const ContextsProvider: React.FC<PropTypes> = ({ children }) => {
    return (
        <ProfileContextProvider>
            {children}
        </ProfileContextProvider>
    )
}

export default ContextsProvider