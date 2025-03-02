import axios from "axios";

const variables = {
  firebaseApiKey: "import.meta.env.VITE_FIREBASE_API_KEY",
  databaseURL: "import.meta.env.VITE_FIREBASE_DATABASE_URL",
  firebaseApiURL: "import.meta.env.VITE_AUTH_API_URL",
};

const dbInstance = axios.create({
  baseURL: variables.databaseURL,
  timeout: 1000,
});

const authInstance = axios.create({
  baseURL: variables.authApiURL,
  timeout: 1000,
  params: {
    key: variables.firebaseApiKey,
  },
});

export { dbInstance, authInstance };
