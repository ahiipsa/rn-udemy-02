import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationStackScreenComponent} from 'react-navigation-stack';

type Props = {};
export const PostScreen: NavigationStackScreenComponent<Props> = () => {
  return (
    <View>

    </View>
  );
};

PostScreen.navigationOptions = {
  headerTitle: 'Post 42',
};

const styles = StyleSheet.create({});
