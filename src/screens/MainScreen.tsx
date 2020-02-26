import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import {HeaderIcon} from '../components/HeaderIcon';
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
  headerTitle: 'My blog',
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderIcon}>
      <Item title={'Take photo'} iconName={'ios-camera'} onPress={() => console.log('press photo')} />
    </HeaderButtons>
  ),

};

const styles = StyleSheet.create({
  root: {
    padding: 10,
  }
});
