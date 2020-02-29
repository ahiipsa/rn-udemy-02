import React, {useCallback, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {NavigationStackScreenComponent} from 'react-navigation-stack';
import {useDispatch} from 'react-redux';
import {HeaderIcon} from '../components/HeaderIcon';
import {PhotoPicker} from '../components/PhotoPicker';
import {createPost} from '../store/actions/post';

type Props = {};
export const CreateScreen: NavigationStackScreenComponent<Props> = ({
  navigation,
}) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const handleCreatePost = useCallback(() => {
    dispatch(createPost({text, img: image}));
    navigation.navigate('Main');
  }, [text]);

  const handleImage = useCallback((uri: string) => {
    setImage(uri);
  }, []);

  const handleClickOutside = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={handleClickOutside}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Create Post</Text>
          <TextInput
            style={styles.textArea}
            value={text}
            multiline
            placeholder="Enter text here..."
            onChangeText={setText}
          />
          <PhotoPicker onPick={handleImage} />
          <Button
            title="create post"
            onPress={handleCreatePost}
            disabled={!text}
          />
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
        onPress={() => navigation.toggleDrawer()}
      />
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
  },
});
