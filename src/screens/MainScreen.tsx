import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

type Props = {};
export const MainScreen: NavigationStackScreenComponent<Props> = ({navigation}) => {

  const goToPost = () => {
    navigation.navigate('Post')
  }

  return (
    <View style={styles.root}>
      <Text>MainScreen</Text>
      <Button title="Go to post" onPress={goToPost} />
    </View>
  );
};

MainScreen.navigationOptions = {
  headerTitle: 'My blog'
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
