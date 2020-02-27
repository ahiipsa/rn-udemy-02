import React from 'react';
import {StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {HeaderIcon} from '../components/HeaderIcon';
import {PostList} from '../components/PostList';
import {DATA, TPost} from '../data';

type Props = {};
export const MainScreen: NavigationStackScreenComponent<Props> = ({navigation}) => {
  const handleOpenPost = (post: TPost) => {
    navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked});
  };

  return (
    <PostList postList={DATA} onOpen={handleOpenPost}/>
  );
};

MainScreen.navigationOptions = ({navigation}) => ({
  headerTitle: 'My blog',
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderIcon}>
      <Item
        title={'Take photo'}
        iconName={'ios-camera'}
        onPress={() => navigation.navigate('Create')} />
    </HeaderButtons>
  ),
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderIcon}>
      <Item
        title={'Menu'}
        iconName={'ios-menu'}
        onPress={() => navigation.toggleDrawer()} />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({});
