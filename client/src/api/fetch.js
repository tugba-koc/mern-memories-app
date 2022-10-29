import axios from './instance';

export const fetchPost = () => {
  return axios.get('');
};

export const addPost = (data) => {
  return axios.post('', data);
};