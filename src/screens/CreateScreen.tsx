import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {useDispatch} from 'react-redux';
import {HeaderIcon} from '../components/HeaderIcon';
import {createPost} from '../store/actions/post';

type Props = {};
export const CreateScreen: NavigationStackScreenComponent<Props> = ({navigation}) => {
  const [text, setText] = useState('');
  const img = 'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg';
  const dispatch = useDispatch();
  const handleCreatePost = useCallback(() => {
      dispatch(createPost({text, img}));
      navigation.navigate('Main');
  }, [text]);

  const handleClickOutside = useCallback(() => {
      Keyboard.dismiss();
  }, []);
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={handleClickOutside}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            Create Post
          </Text>
          <TextInput
            style={styles.textArea}
            value={text}
            multiline
            placeholder="Enter text here..."
            onChangeText={setText}
          />
          <Image style={styles.image} source={{uri: img}} />
          <Button title="create post" onPress={handleCreatePost} />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
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

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'opensans-regular',
    marginVertical: 10,
  },
  textArea: {
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  }
});
