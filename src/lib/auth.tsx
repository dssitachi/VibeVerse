import {
    AuthUser,
    LoginCredentialsDTO,
    RegisterCredentialsDTO,
    getUser,
    loginWithEmailAndPassword,
} from "@/features/auth";
import { Loader2 } from "lucide-react";
import { configureAuth } from "./react-auth-query";

async function loadUser() {
    const user = await getUser();
    return user;
}

async function loginFn(data: any) {
    const response = await loginWithEmailAndPassword(data);
    return response.user;
}

const authConfig = {
    userFn: loadUser,
    loginFn,
    LoaderComponent() {
        return (
            <div className="w-screen h-screen flex justify-center items-center">
                <Loader2 size="xl" />
            </div>
        );
    },
};

export const { useUser, useLogin } = configureAuth<
    AuthUser | null,
    unknown,
    LoginCredentialsDTO,
    RegisterCredentialsDTO
>(authConfig);
