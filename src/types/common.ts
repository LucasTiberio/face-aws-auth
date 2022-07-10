export type iFile = File & {
    src: string;
}

export interface iAppProfile {
    name: string;
    login: string;
    image?: string;
}