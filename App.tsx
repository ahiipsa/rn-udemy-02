import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from 'expo';
import {bootstrap} from './src/bootstrap';

export default function App() {
  const [isReady, setReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setReady(true)}
        onError={(error) => console.log('error', error)}
      />
    )
  }
  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}
