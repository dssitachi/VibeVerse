import { delay, http, HttpResponse } from 'msw'
import { db, persistDb } from '../db';
import { nanoid } from 'nanoid';
import { authenticate, hash } from '../utils';

type RegisterBody = {
    name: string;
    username: string;
    email: string;
    password: string;
};

type LoginBody = {
    email: string;
    password: string;
};

export const authHandler = [

    http.post<RegisterBody>('/auth/register', async ({ request }) => {
        try {
            const user = await request.json() as RegisterBody;
            const existingUser = db.user.findFirst({
                where: {
                    email: {
                        equals: user.email,
                    },
                },
            });

            if (existingUser) {
                throw new Error('User already exists');
            }

            db.user.create({
                ...user,
                id: nanoid(),
                createdAt: Date.now(),
                password: hash(user.password),
            })

            // persistDb('user');
            const result = authenticate({ email: user.email, password: user.password });
            await delay(1000);

            return new HttpResponse(null, {
                headers: {
                    // 'Set-Cookie': `jwt=${result.jwt}; Path=/; HttpOnly; Max-Age=86400`,
                }
            })

        } catch (err) {
            return HttpResponse.error()
        }

    })

]