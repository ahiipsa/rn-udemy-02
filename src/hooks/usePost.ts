import {useSelector} from 'react-redux';

export const useBookedPostList = () => {
  return useSelector(state => state.post.postList.filter(post => post.booked));
};

export const usePostList = () => {
  return useSelector(state => state.post.postList);
};

export const usePost = (postId: string) => {
  return usePostList().find(post => post.id === postId);
};

export const useIsLoading = () => {
  return useSelector(state => state.post.loading);
};
