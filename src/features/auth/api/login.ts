import { axios } from "@/lib/axios";
import { UserResponse } from "..";

export type LoginCredentialsDTO = {
    email: string,
    password: string
}

export function loginWithEmailAndPassword(data: LoginCredentialsDTO): Promise<UserResponse> {
    return axios.post('http://localhost:8080/auth/login', data);
}