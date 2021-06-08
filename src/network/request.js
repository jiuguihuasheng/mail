import axios from 'axios';

export function request (config) {
  const instance = axios.create({
    baseURL: '',
    timeout: 5000
  });

  instance.interceptors.request.use(config => {
    config.headers['content-type'] = 'application/json';
    return config;
  }, err => {
    console.log(err);
  });

  instance.interceptors.response.use(res => {
    return res.data;
  }, err => Promise.reject(err));

  return instance(config);
}
