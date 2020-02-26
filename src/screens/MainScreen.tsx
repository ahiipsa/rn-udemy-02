import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import {PostItem} from '../components/PostItem';
import {DATA} from '../data'

type Props = {};
export const MainScreen: NavigationStackScreenComponent<Props> = ({navigation}) => {

  const goToPost = () => {
    navigation.navigate('Post')
  }

  return (
    <View style={styles.root}>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => (
          <PostItem post={item} />
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
