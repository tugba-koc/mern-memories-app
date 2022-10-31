import { ActionType } from './action_types';

export const postInitialState = {
  posts: [],
  currentId: null,
  error: false,
};

const postReducer = (state = postInitialState, action) => {
  switch (action.type) {
    case ActionType.SET_POST:
      return {
        ...state,
        posts: action.payload,
      };
    case ActionType.UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(el => el._id === action.payload._id ? action.payload : el ),
      };
    case ActionType.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(el => el._id != action.payload),
      };
    case ActionType.SET_CURRENT_POST_ID:
      return {
        ...state,
        currentId: action.payload,
      };
    case ActionType.CREATE:
      return {
        ...state,
        posts: [...state.posts, action.payload],
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
export const selectCurrentId = (state) => state.postReducer?.currentId;
export default postReducer;
