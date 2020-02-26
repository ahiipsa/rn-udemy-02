import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};
export const MainScreen: React.FC<Props> = () => {
  return (
    <View style={styles.root}>
      <Text>MainScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
