import React from 'react';
import {StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import {HeaderIcon} from '../components/HeaderIcon';
import {PostList} from '../components/PostList';
import {DATA, TPost} from '../data';

type Props = {};
export const BookedScreen: NavigationStackScreenComponent<Props> = ({navigation}) => {

  const handleOpenPost = (post: TPost) => {
    navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked })
  };

  return (
    <PostList
      postList={DATA.filter((item) => item.booked)}
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
