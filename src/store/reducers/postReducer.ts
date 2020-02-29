import {POST_CREATE, POST_LOAD_LIST, POST_REMOVE, POST_TOGGLE_BOOKED} from '../types';

const initialState = {
  postList: [],
  loading: true,
};

export const postReducer = (state = initialState, action) => {

  switch (action.type) {
    case POST_LOAD_LIST: {
      return {
        ...state,
        postList: action.payload,
        loading: false,
      }
    }
    case POST_TOGGLE_BOOKED: {
      const postList = state.postList.map((post) => {
        if (post.id !== action.payload) {
          return post;
        }
        return {
          ...post,
          booked: !post.booked,
        }
      });

      return {
        ...state,
        postList,
      }
    }
    case POST_REMOVE: {
      const postList = state.postList.filter((post) => post.id !== action.payload);

      return {
        ...state,
        postList,
      }
    }
    case POST_CREATE: {
      const postList = [action.payload, ...state.postList];

      return {
        ...state,
        postList,
      }
    }
    default: return state;
  }

  return state;
};
