import React, {useEffect} from 'react';
import {Alert, Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {HeaderIcon} from '../components/HeaderIcon';
import {DATA} from '../data';
import {THEME} from '../theme';

type Params = {
  postId: string;
  date: string;
  booked: boolean;
}
type Props = {
};
export const PostScreen: NavigationStackScreenComponent<Params, Props> = ({navigation}) => {
  const postId = navigation.getParam('postId');
  const post = DATA.find((item) => item.id === postId);

  if (!post) {
    return <View>Post not found {postId}</View>;
  }

  const handleRemove = () => {
    Alert.alert(
      'Delete a post',
      'Are you sure?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Delete', style: 'destructive', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: post.img}} />
      <View style={styles.titleWrap}>
        <Text style={styles.title}>{post.text.repeat(100)}</Text>
      </View>
      <Button title="Delete" color={THEME.COLORS_DANGER} onPress={handleRemove} />
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({navigation}) => {
  const date = navigation.getParam('date');
  const booked = navigation.getParam('booked');
  const iconName = booked ? 'ios-star' : 'ios-star-outline';

  return {
    headerTitle: `Post ${new Date(date).toLocaleDateString()}`,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderIcon}>
        <Item title={'Take photo'} iconName={iconName} onPress={() => console.log('press photo')} />
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
