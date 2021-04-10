import axios from 'axios';

const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjgsImlhdCI6MTYxODAyODc3NSwiZXhwIjoxNjI1ODA0Nzc1fQ.o4X1ttayxnED20gnR3tGi5diAPooPLe5YRlf0gr04q4';
const url = 'https://api.zugoi.net';

export default axios.create({
    baseURL: `${url}`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        'z-token': `${userToken}`
    }
});