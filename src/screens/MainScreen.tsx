import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {useDispatch} from 'react-redux';
import {HeaderIcon} from '../components/HeaderIcon';
import {PostList} from '../components/PostList';
import {THEME} from '../theme';
import {TPost} from '../types';
import {useIsLoading, usePostList} from '../hooks/usePost';
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
    setTimeout(() => dispatch(loadPostList()), 10000);
  }, []);

  const isLoading = useIsLoading();

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={THEME.COLORS_MAIN} />
      </View>
    );
  }

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

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
