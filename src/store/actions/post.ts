import {POST_CREATE, POST_LOAD_LIST, POST_REMOVE, POST_TOGGLE_BOOKED} from '../types';

export const loadPostList = () => {
  return {
    type: POST_LOAD_LIST,
    payload: [],
  }
};

export const toggleBooked = (postId) => {
  return {
    type: POST_TOGGLE_BOOKED,
    payload: postId,
  }
};

export const removePost = (postId)  => {
  return {
    type: POST_REMOVE,
    payload: postId,
  }
};

export const createPost = ({text, img}) => {
  return {
    type: POST_CREATE,
    payload: {
      id: Date.now().toString(),
      text,
      img,
      date: new Date().toJSON(),
      booked: false,
    }
  }
}
