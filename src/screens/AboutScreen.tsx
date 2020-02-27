import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {HeaderIcon} from '../components/HeaderIcon';

type Props = {};
export const AboutScreen: NavigationStackScreenComponent<Props> = () => {
  return (
    <View>

    </View>
  );
};

AboutScreen.navigationOptions = ({navigation}) => ({
  headerTitle: 'About',
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
