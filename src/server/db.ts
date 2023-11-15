import { factory, primaryKey } from '@mswjs/data';

const models = {
  user: {
    id: primaryKey(String),
    name: String,
    username: String,
    email: String,
    password: String,
    createdAt: Number
  },

  post: {
    id: primaryKey(String),
    body: String,
    createdAt: Number,
    authorId: String,
    imageUrl: String,
  },

  comment: {
    id: primaryKey(String),
    body: String,
    createdAt: Number,
    authorId: String,
    postId: String,
  }
}

export const db = factory(models);

export type Model = keyof typeof db;

export const loadDb = () =>
  Object.assign(JSON.parse(window.localStorage.getItem('msw-db') || '{}'));


export const persistDb = (model: Model) => {
  // if (process.env.NODE_ENV === 'test') return;
  const data = loadDb();
  // @ts-ignore
  data[model] = (db[model]).getAll()
  window.localStorage.setItem('msw-db', JSON.stringify(data));
};

export const initializeDb = () => {
  const database = loadDb();
  Object.entries(db).forEach(([key, model]) => {
    const dataEntres = database[key];
    if (dataEntres) {
      dataEntres?.forEach((entry: Record<string, any>) => {
        model.create(entry);
      });
    }
  });
};

export const resetDb = () => {
  window.localStorage.clear();
};

initializeDb();