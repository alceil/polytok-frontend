import axios from 'axios';

const apiOrigin = 'https//localhost:5000';

const api = axios.create({
  baseURL: `https//localhost:5000/`,
//   withCredentials: true,
});

export default api;
