import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {TPost} from '../data';
import {THEME} from '../theme';

type Props = {
  post: TPost;
};
export const PostItem: React.FC<Props> = ({post}) => {
  return (
    <View style={styles.root}>
      <ImageBackground style={styles.bgImage} source={{uri: post.img}}>
        <View style={styles.textWrap}>
          <Text style={styles.title}>
            {new Date(post.date).toLocaleDateString()}
          </Text>
        </View>
      </ImageBackground>
    </View>
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
