import axios from 'axios';

const frankToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTYxNzI1MDIyNCwiZXhwIjoxNjI1MDI2MjI0fQ.7o85X9u-O3MoZOa6z5_OvtuW8dtt_Qa053TD70fi6Ak';

export default axios.create ({
    baseURL: 'http://api.zugoi.net',
    headers: {
        'Content-Type': 'application/json',
        'z-token': `${frankToken}`
    }
});