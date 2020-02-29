import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {TPost} from '../types';
import {PostItem} from './PostItem';

type Props = {
  postList: TPost[];
  onOpen: (post: TPost) => void;
};
export const PostList: React.FC<Props> = ({postList = [], onOpen}) => {
  if (!postList.length) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.noItemsText}>No Items</Text>
      </View>
    );
  }
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={postList}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => <PostItem post={item} onOpen={onOpen} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  noItemsText: {
    textAlign: 'center',
    fontSize: 20,
  },
});
