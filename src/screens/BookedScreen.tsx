import React from 'react';
import {StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import {useDispatch, useSelector} from 'react-redux';
import {HeaderIcon} from '../components/HeaderIcon';
import {PostList} from '../components/PostList';
import {DATA, TPost} from '../data';
import {useBookedPostList} from '../hooks/usePost';

type Props = {};
export const BookedScreen: NavigationStackScreenComponent<Props> = ({navigation}) => {

  const handleOpenPost = (post: TPost) => {
    navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked })
  };

  const postList = useBookedPostList();

  return (
    <PostList
      postList={postList}
      onOpen={handleOpenPost}
    />
  );
};

BookedScreen.navigationOptions = {
  headerTitle: 'Booked',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderIcon}>
      <Item title={'Take photo'} iconName={'ios-menu'} onPress={() => console.log('press photo')} />
    </HeaderButtons>
  ),

};

const styles = StyleSheet.create({});
