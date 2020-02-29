import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import {PermissionStatus} from 'expo-permissions';
import React, {useCallback, useState} from 'react';
import {Alert, Button, Image, StyleSheet, View} from 'react-native';

async function askForPermissions() {
  const {status} = await Permissions.askAsync(
    Permissions.CAMERA,
    Permissions.CAMERA_ROLL
  );

  if (status !== PermissionStatus.GRANTED) {
    Alert.alert('Error', "You didn't give permissions");
    return false;
  }

  return true;
}

type Props = {
  onPick: (uri: string) => void;
};

export const PhotoPicker: React.FC<Props> = React.memo(({onPick}) => {
  const [image, setImage] = useState(null);
  const handleTakePhoto = async () => {
    const hasPermissions = await askForPermissions();

    if (!hasPermissions) {
      return;
    }

    const img = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9],
    });

    if (img.cancelled === false) {
      setImage(img.uri);
      onPick(img.uri);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Button title="Take photo" onPress={handleTakePhoto} />
      {image && <Image style={styles.image} source={{uri: image}} />}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 300,
  },
});
