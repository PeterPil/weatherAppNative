import React, { useReducer } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import Header from './components/header/header.components';
import modal, { initialStateRegistration } from './reducer/modal';
const backgroundImg = require('./assets/2.jpeg');
export default function App() {
  const [state, dispatch] = useReducer(modal, initialStateRegistration)
  return (
    <ImageBackground source={backgroundImg} style={styles.wrapper} imageStyle={styles.overlay}>
      <View style={styles.container}>
        <Header/>
        {state.isRegistrationOpened ? <Text>open</Text> : <Text>closed</Text>}
      </View>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 15,
  },
  overlay: {
    opacity: 0.4,
    backgroundColor: '#000',
  }
});
