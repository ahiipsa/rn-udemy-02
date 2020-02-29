import React, {useCallback, useEffect} from 'react';
import {Alert, Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {useDispatch} from 'react-redux';
import {HeaderIcon} from '../components/HeaderIcon';
import {usePost} from '../hooks/usePost';
import {removePost, toggleBooked} from '../store/actions/post';
import {POST_REMOVE} from '../store/types';
import {THEME} from '../theme';

type Params = {
  postId: string;
  date: string;
  booked: boolean;
  toggleHandler: () => void,
};

type Props = {};

export const PostScreen: NavigationStackScreenComponent<Params, Props> = ({navigation}) => {
  const postId = navigation.getParam('postId');
  const post = usePost(postId);
  const dispatch = useDispatch();

  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(post));
  }, [dispatch, postId]);

  useEffect(() => {
    navigation.setParams({
      toggleHandler,
    })
  }, [toggleHandler]);

  useEffect(() => {
    if (!post) {
      return;
    }
    navigation.setParams({
      booked: post.booked,
    })
  }, [post]);

  const handleRemovePost = useCallback(() => {
    dispatch(removePost(postId));
  }, [dispatch, postId]);

  if (!post) {
    return <View><Text>Post not found {postId}</Text></View>;
  }

  console.log('### post', post);


  const handleRemove = () => {
    Alert.alert(
      'Delete a post',
      'Are you sure?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Delete', style: 'destructive', onPress: () => {
            handleRemovePost();
            navigation.navigate('Main');
          }},
      ],
      {cancelable: false},
    );
  };

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: post.img}} />
      <View style={styles.titleWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button title="Delete" color={THEME.COLORS_DANGER} onPress={handleRemove} />
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({navigation}) => {
  const date = navigation.getParam('date');
  const booked = navigation.getParam('booked');
  const toggleHandler = navigation.getParam('toggleHandler');
  const iconName = booked ? 'ios-star' : 'ios-star-outline';

  return {
    headerTitle: `Post ${new Date(date).toLocaleDateString()}`,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderIcon}>
        <Item title={'Take photo'} iconName={iconName} onPress={toggleHandler} />
      </HeaderButtons>
    ),
  }
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  titleWrap: {
    padding: 10,
  },
  title: {
    fontFamily: 'opensans-regular',
  }
});
