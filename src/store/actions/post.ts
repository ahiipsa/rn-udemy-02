import * as FileSystem from 'expo-file-system';
import {DB} from '../../db';
import {
  POST_CREATE,
  POST_LOAD_LIST,
  POST_REMOVE,
  POST_TOGGLE_BOOKED,
} from '../types';

export const loadPostList = () => async dispatch => {
  const postList = await DB.getPostList();

  return dispatch({
    type: POST_LOAD_LIST,
    payload: postList,
  });
};

export const toggleBooked = postId => {
  return {
    type: POST_TOGGLE_BOOKED,
    payload: postId,
  };
};

export const removePost = postId => {
  return {
    type: POST_REMOVE,
    payload: postId,
  };
};

export const createPost = ({text, img}) => async dispatch => {
  const fileName = img.split('/').pop();
  const filePath = FileSystem.documentDirectory + fileName;

  try {
    await FileSystem.moveAsync({
      to: filePath,
      from: img,
    });
  } catch (e) {
    console.log('### error', e);
    return;
  }

  const post = {
    text,
    img: filePath,
    date: new Date().toJSON(),
    booked: false,
  };

  console.log('### post', post);

  const postId = await DB.createPost(post);

  const payload = {
    ...post,
    id: postId,
  };

  return dispatch({
    type: POST_CREATE,
    payload,
  });
};
