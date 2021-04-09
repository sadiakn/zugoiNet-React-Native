import axios from 'axios';

const frankToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTYxNzc3MDQzMywiZXhwIjoxNjI1NTQ2NDMzfQ.3qoLPwiwznqEih2ocg96Mn1j65UvQSyNVgaYGQNGJrs';
const url = 'https://api.zugoi.net';
const url2 = 'https://zugoinet.herokuapp.com';

export default axios.create({
    baseURL: `${url}`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        'z-token': `${frankToken}`
    }
});