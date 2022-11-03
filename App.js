/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {getRandomWord} from './src/apiFetch';
import Keyboard from './views/keyboard';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [gameState, setGameState] = useState({
    qNW: 'white',
    qSW: 'white',
    qNE: 'white',
    qSE: 'white',
  });

  const log = () => {
    console.log('state:', gameState);
  }

  updateGameState = (letterPressed) => {
    console.log('pressed', letterPressed);
    let newState = {...gameState};
    newState.qNW = 'green'
    newState.qSE = 'gray'
    setGameState(newState);
    console.log('state:', gameState);
  }

  return (
    <SafeAreaView>
      <View style={styles.lettersViewStyle}>
        <Text>test</Text>
        <Button 
          onPress={getRandomWord}
          title='Fetch Random Word'
        />
      </View>
      <Keyboard updateGameState={updateGameState} gamestate={gameState} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  lettersViewStyle: {
    backgroundColor: 'red',
  },
});

export default App;
