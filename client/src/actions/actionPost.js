import { addPost, fetchPost, updatePost, deletePost } from '../api/fetch';

export const getPosts = async () => {
  try {
    let res = await fetchPost();
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
};

export const createPost = async (data) => {
  try {
    await addPost(data);
    let res = await getPosts();
    return res;
  } catch (err) {
    console.log(err.message);
  }
};

export const updateCurrentPost = async (id, data) => {
  try {
    await updatePost(id, data);
    let res = await getPosts();
    return res;
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteCurrentPost = (id) => {
  try {
    deletePost(id);
  } catch (err) {
    console.log(err.message);
  }
};
