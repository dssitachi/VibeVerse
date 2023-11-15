import { faker } from '@faker-js/faker';

const posts: Post[] = [];
type Post = {
    id: string;
    name: string;
    username: string;
    body: string;
    imageUrl?: string;
    likesCount: number;
    commentsCount: number;
    avatar: string;
}

function createRandomUser(): Post {
    return {
        id: faker.string.uuid(),
        avatar: faker.image.avatar(),
        name: faker.person.firstName(),
        username: faker.internet.userName(),
        likesCount: faker.number.int({ min: 1, max: 100}),
        commentsCount: faker.number.int({min: 1, max: 70}),
        body: faker.lorem.sentence({min: 20, max: 40}),
    };
}

export function getId() {
    return faker.string.uuid();
}

for (let i = 0; i < 100; i++) {
    const user = createRandomUser();
    posts.push(user)
}


export default posts;