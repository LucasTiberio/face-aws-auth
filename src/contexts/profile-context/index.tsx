import React, { createContext, useState } from 'react'

import { iAppProfile } from '../../types/common'
import { dummyContext, iProfileContext } from './profile-context.types'

export const ProfileContext = createContext<iProfileContext>(dummyContext)

export const useProfileContext = (): iProfileContext =>
    React.useContext(ProfileContext)

type PropTypes = {
    children: React.ReactNode | React.ReactNode[];
}
const ProfileContextProvider: React.FC<PropTypes> = ({ children }) => {
    const [profile, setProfile] = useState<iAppProfile>()

    return (
        <ProfileContext.Provider
            value={{
                profile,
                setProfile
            }}
        >
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileContextProvider