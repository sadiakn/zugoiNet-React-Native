import axios from 'axios';

export default axios.create ({
    baseURL: 'https://zugoinet.herokuapp.com',
    headers: { 'z-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTYxNjc3OTkyNywiZXhwIjoxNjI0NTU1OTI3fQ.FpVw71dAs4I5ygbpSmsXhogRRe0etaKRo_k-9EjVbzI'}
});