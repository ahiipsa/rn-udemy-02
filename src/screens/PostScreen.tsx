import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {THEME} from '../theme';

type Params = {
  postId: string;
  date: string;
}
type Props = {

};
export const PostScreen: NavigationStackScreenComponent<Params, Props> = ({navigation}) => {
  const postId = navigation.getParam('postId');
  return (
    <View>
      <Text>PostScreen {postId}</Text>
    </View>
  );
};

PostScreen.navigationOptions = ({navigation}) => {
  const date = navigation.getParam('date');

  return {
    headerTitle: `Post ${new Date(date).toLocaleDateString()}`,
  }
};

const styles = StyleSheet.create({});
