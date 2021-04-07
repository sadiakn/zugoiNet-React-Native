import axios from 'axios';

const frankToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTYxNzc3MDQzMywiZXhwIjoxNjI1NTQ2NDMzfQ.3qoLPwiwznqEih2ocg96Mn1j65UvQSyNVgaYGQNGJrs';

export default axios.create ({
    baseURL: 'http://api.zugoi.net',
    headers: {
        'Content-Type': 'application/json',
        'z-token': `${frankToken}`
    }
});