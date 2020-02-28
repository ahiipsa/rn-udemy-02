import {DATA} from '../../data';
import {LOAD_POSTS} from '../types';

export const loadPostList = () => {
  return {
    type: LOAD_POSTS,
    payload: DATA,
  }
};
