import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://gorest.co.in',
    timeout: 1000
  });


export default instance;