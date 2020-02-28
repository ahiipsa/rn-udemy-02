import {LOAD_POSTS} from '../store/types';

const initialState = {
  postList: [],
  bookedPostList: [],
};

export const postReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOAD_POSTS: {
      return {
        ...state,
        postList: action.payload,
        bookedPostList: action.payload.filter(post => post.booked),
      }
    }
    default: return state;
  }

  return state;
};
