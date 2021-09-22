export interface IUser {
    id: number,
    name: string,
    email: string,
}

export interface IUserLoginData {
    username: string,
    password: string,
    remember: boolean,
}

export interface IUserRegisterData {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
    policy: boolean,
}

export interface IUserForgotPasswordData {
    email: string,
}

export interface IUserResetPasswordData {
    password: string,
    confirmPassword: string,
}