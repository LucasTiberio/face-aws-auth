import { iAppProfile } from "../../types/common"

export type iProfileContext = {
    profile?: iAppProfile;
    setProfile: (newProfile: iAppProfile) => void;
}

export const dummyContext: iProfileContext = {
    setProfile: () => false,
}