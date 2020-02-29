import React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TPost} from '../types';
import {THEME} from '../theme';

type Props = {
  post: TPost;
  onOpen: (post: TPost) => void;
};
export const PostItem: React.FC<Props> = ({post, onOpen}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => onOpen(post)}>
      <View style={styles.root}>
        <ImageBackground style={styles.bgImage} source={{uri: post.img}}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>
              {new Date(post.date).toLocaleDateString()}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    marginBottom: 15,
    overflow: 'hidden',
  },
  bgImage: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: THEME.COLORS_WHITE,
    fontFamily: 'opensans-regular',
  }
});
