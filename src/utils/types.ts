export interface User{
    username: string,
    password: string,
    role: typeof Role [keyof typeof Role]
}

export enum Role{
    ADMIN = "ADMIN",
    USER = "USER"
}