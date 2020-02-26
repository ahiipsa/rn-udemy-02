import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import {PostItem} from '../components/PostItem';
import {DATA, TPost} from '../data';

type Props = {};
export const MainScreen: NavigationStackScreenComponent<Props> = ({navigation}) => {

  const handleOpenPost = (post: TPost) => {
    navigation.navigate('Post', {postId: post.id, date: post.date })
  }

  return (
    <View style={styles.root}>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => (
          <PostItem post={item} onOpen={handleOpenPost}/>
        )}
      />
    </View>
  );
};

MainScreen.navigationOptions = {
  headerTitle: 'My blog'
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
  }
});
