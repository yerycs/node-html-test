import { config as envConfig } from 'dotenv';

envConfig();

const config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    mongo: {
        host: process.env.MONGO_HOST,
        port: process.env.MONGO_PORT
    },
};

export default config;
