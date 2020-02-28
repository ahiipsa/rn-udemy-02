import {LOAD_POSTS, TOGGLE_BOOKED} from '../types';

const initialState = {
  postList: [],
};

export const postReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOAD_POSTS: {
      return {
        ...state,
        postList: action.payload,
      }
    }
    case TOGGLE_BOOKED: {
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
    default: return state;
  }

  return state;
};
