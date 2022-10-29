import { ActionType } from './action_types';

export const postInitialState = {
  posts: [],
  error: false,
};

const postReducer = (state = postInitialState, action) => {
  switch (action.type) {
    case ActionType.SET_POST:
      return {
        ...state,
        posts: action.payload,
      };
    case ActionType.CREATE:
      return {
        ...state,
        posts: [...state.posts,action.payload],
      };
    case ActionType.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const selectError = (state) => state.postReducer?.error;
export const selectPosts = (state) => state.postReducer?.posts;
export default postReducer;
