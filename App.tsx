import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from 'expo';
import {bootstrap} from './src/bootstrap';
import {AppNavigation} from './src/navigation/AppNavigation';

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
  return (<AppNavigation />);
}
