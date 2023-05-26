export interface ErrorRes {
    statusCode: number;
    message: string;
}

export interface UserData {
    id: string;
    email: string;
    password: string;
}

export type UserRes = Pick<UserData, 'id' | 'email'>;

export interface Login {
    email: string;
    password: string;
}