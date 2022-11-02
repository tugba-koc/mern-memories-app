import axios from './instance';

export const fetchPost = () => {
  return axios.get('');
};

export const addPost = (data) => {
  return axios.post('', data);
};

export const updatePost = (id, data) => {
  return axios.patch(`/${id}`, data);
};

export const deletePost = (id) => {
  return axios.delete(`/${id}`);
};

export const likePost = (id) => {
  return axios.patch(`/${id}/likePost`);
};
