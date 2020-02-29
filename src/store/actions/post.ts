import * as FileSystem from 'expo-file-system';
import {DB} from '../../db';
import {TPost} from '../../types';
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

export const toggleBooked = (post: TPost) => async dispatch => {
  await DB.updatePost(post);

  return dispatch({
    type: POST_TOGGLE_BOOKED,
    payload: post.id,
  });
};

export const removePost = postId => async dispatch => {
  await DB.deletePost(postId);
  return dispatch({
    type: POST_REMOVE,
    payload: postId,
  });
};

export const createPost = ({text, img}) => async dispatch => {
  const fileName = img.split('/').pop();
  const filePath = FileSystem.documentDirectory + fileName;

  console.log('### text', text);
  console.log('### img', img);

  console.log('### filePath', filePath);
  console.log('### fileName', fileName);


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
