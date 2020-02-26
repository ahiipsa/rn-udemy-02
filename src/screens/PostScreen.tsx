import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {THEME} from '../theme';

type Props = {};
export const PostScreen: NavigationStackScreenComponent<Props> = () => {
  return (
    <View>
      <Text>PostScreen</Text>
    </View>
  );
};

PostScreen.navigationOptions = {
  headerTitle: 'Post 42',
};

const styles = StyleSheet.create({});
