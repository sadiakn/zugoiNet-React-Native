import axios from 'axios';

const regToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJmcm9udGVuZC10b2tlbiIsImlhdCI6MTYxNjc3Nzc2NSwiZXhwIjoxNjI0NTUzNzY1fQ.ceaIM40k4isZdfILoI_vVgXXMTOLaHC7asbEsS7D3dg';

export default axios.create ({
    baseURL: 'https://api.zugoi.net',
    headers: {
        'Content-Type': 'application/json',
        'z-token': `${regToken}`
    }
});