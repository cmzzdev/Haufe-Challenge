import axios from 'axios'

// Base Url environment REACT_APP_BACKEND_URL
// DEV file: /client/.env
// QA file:
// PRD file

const clientAxios = axios.create({
    baseURL : process.env.REACT_APP_BACKEND_URL
})

export default clientAxios;