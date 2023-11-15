export type AuthUser = {
    id: string;
    name: string;
    username: string;
    avatar: string;
};

export type UserResponse = {
    jwt: string;
    user: AuthUser;
};
