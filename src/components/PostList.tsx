import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {DATA, TPost} from '../data';
import {PostItem} from './PostItem';

type Props = {
  postList: TPost[],
  onOpen: (post: TPost) => void,
};
export const PostList: React.FC<Props> = ({postList, onOpen}) => {
  return (
    <View style={styles.root}>
      <FlatList
        data={postList}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => (
          <PostItem post={item} onOpen={onOpen} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
  }
});
