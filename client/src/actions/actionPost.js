import { addPost, fetchPost, updatePost } from '../api/fetch';
import { ActionType } from '../redux/post/action_types';

export const getPosts = () => async (dispatch) => {
  try {
    let res = await fetchPost();
    let data = res.data;
    dispatch({
      type: ActionType.SET_POST,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const createPost = async (data) => {
  try {
    await addPost(data);
    getPosts();
  } catch (err) {
    console.log(err.message);
  }
};

export const updateCurrentPost = (id, data) => {
  try {
    updatePost(id, data);
  } catch (err) {
    console.log(err.message);
  }
};
