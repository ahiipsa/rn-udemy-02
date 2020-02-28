import {DATA} from '../../data';
import {POST_LOAD_LIST, POST_REMOVE, POST_TOGGLE_BOOKED} from '../types';

export const loadPostList = () => {
  return {
    type: POST_LOAD_LIST,
    payload: DATA,
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
