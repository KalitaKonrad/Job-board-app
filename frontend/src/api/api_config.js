import Axios from 'axios';
import { connect } from 'react-redux';

const axios = Axios.create({
  baseURL: 'http://localhost:8080/',
});

export default axios;
