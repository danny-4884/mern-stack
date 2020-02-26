import axios from 'axios';

const env = process.env.NODE_ENV; // current environment

export default axios.create({
    baseURL:
        env === 'production'
            ? 'http://example.com/api/' // production
            : 'http://localhost:3000/', // development
});