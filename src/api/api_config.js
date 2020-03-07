import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://localhost:8080/'
});

export default axios;
