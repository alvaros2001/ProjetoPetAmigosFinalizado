import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api-petamigos.herokuapp.com'
})

export default instance; 