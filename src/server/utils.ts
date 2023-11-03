import jwt from "jsonwebtoken";

import { JWT_SECRET } from "@/config";
import { db } from "./db";
export const hash = (str: string) => {
    let hash = 5381,
        i = str.length;

    while (i) {
        hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return String(hash >>> 0);
};

export function authenticate({email, password}: {email: string, password: string}) {
    const user = db.user.findFirst({
        where: {
          email: {
            equals: email,
          },
        },
    })

    if (user?.password === hash(password)) {
        const sanitizedUser = { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email };
        const encodedToken = jwt.sign(sanitizedUser, JWT_SECRET);
        return { user: sanitizedUser, jwt: encodedToken };
    }

    const error = new Error('Invalid username or password');
    throw error;
}

export function requireAuth(request: any) {
    try {
        const token = request.headers.get('authorization')
        if(!token) {
            throw new Error('No Authorization header provided')
        }
        const decodedToken = jwt.verify(token, JWT_SECRET) as { id: string}
        const user = db.user.findFirst({
            where: {
                id: {
                    equals: decodedToken.id
                }
            }
        })

        if(!user) {
            throw Error('Unauthorized')
        }
        return { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email };
    } catch(error: any) {
        throw Error(error)
    }
}