import { UserResponse } from "@/features/auth";
import storage from "@/utils/storage";

async function handleUserResponse(data: UserResponse) {
    const { jwt, user } = data;
    storage.setToken(jwt);
    return user;
}

async function loginFn() {
    const response = await loginWithEmailAndPassword(data);
    const user = await handleUserResponse(response);
    return user;
}
