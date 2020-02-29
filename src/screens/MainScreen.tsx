import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {useDispatch} from 'react-redux';
import {HeaderIcon} from '../components/HeaderIcon';
import {PostList} from '../components/PostList';
import {TPost} from '../types';
import {usePostList} from '../hooks/usePost';
import {loadPostList} from '../store/actions/post';

type Props = {};
export const MainScreen: NavigationStackScreenComponent<Props> = ({
  navigation,
}) => {
  const handleOpenPost = (post: TPost) => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  const dispatch = useDispatch();
  const postList = usePostList();

  useEffect(() => {
    dispatch(loadPostList());
  }, []);

  return <PostList postList={postList} onOpen={handleOpenPost} />;
};

MainScreen.navigationOptions = ({navigation}) => ({
  headerTitle: 'My blog',
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderIcon}>
      <Item
        title={'Take photo'}
        iconName={'ios-camera'}
        onPress={() => navigation.navigate('Create')}
      />
    </HeaderButtons>
  ),
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderIcon}>
      <Item
        title={'Menu'}
        iconName={'ios-menu'}
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({});
