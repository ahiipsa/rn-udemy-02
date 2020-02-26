import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import {THEME} from '../theme';

type Props = {};
export const HeaderIcon: React.FC<Props> = (props) => {
  const color = Platform.OS === 'android' ? THEME.COLORS_WHITE : THEME.COLORS_MAIN
  return (
    <HeaderButton
      title={''}
      {...props}
      IconComponent={Ionicons}
      iconSize={24}
      color={color} />
  );
};

const styles = StyleSheet.create({});
