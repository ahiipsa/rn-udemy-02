import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {HeaderIcon} from '../components/HeaderIcon';

type Props = {};
export const CreateScreen: NavigationStackScreenComponent<Props> = () => {
  return (
    <View>

    </View>
  );
};

CreateScreen.navigationOptions = ({navigation}) => ({
  headerTitle: 'Create Post',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderIcon}>
      <Item
        title={'Take photo'}
        iconName={'ios-menu'}
        onPress={() => navigation.toggleDrawer()} />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({});
