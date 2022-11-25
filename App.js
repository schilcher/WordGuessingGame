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
import Keyboard from './components/keyboard';
import Tileboard from './components/tileboard';
import Icon from 'react-native-vector-icons/Ionicons';



const App = () => {
  Icon.loadFont();
  const isDarkMode = useColorScheme() === 'dark';
  const [gameState, setGameState] = useState({
    qNW: 'white',
    qSW: 'white',
    qNE: 'white',
    qSE: 'white',
  });
  const [guess, setGuess] = useState('');
  const [guessNumber, setGuessNumber] = useState(0);
  const [tileboardState, setTileboardState] = useState({
    UL: ['', '', '', '', '', '', '', '', '',],
    UR: ['', '', '', '', '', '', '', '', '',],
    BL: ['', '', '', '', '', '', '', '', '',],
    BR: ['', '', '', '', '', '', '', '', '',],
    ULcolors: [
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',],],
    URcolors: [
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',],
    ],
    BLcolors: [
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',],
    ],
    BRcolors: [
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',], 
      ['', '', '', '', '',],
    ],
  });

  const log = () => {
    console.log('state:', gameState);
  }

  updateGameState = (letterPressed) => {
    if (letterPressed === 'submit') {
      console.log('submit pressed')
    }
    else if (letterPressed === 'backspace') {
      console.log('backspace pressed');
      if (guess.length > 0) {
        const newGuess = guess.slice(0, -1);  // remove last letter
        setGuess(newGuess);
        let newTileboardState = {...tileboardState}
        newTileboardState.UL[guessNumber] = newGuess;
        setTileboardState(newTileboardState);
      }
    }
    else {
      console.log('pressed', letterPressed);
      if (guess.length < 5) {
        let newGuess = guess + letterPressed;
        setGuess(newGuess);
        let newTileboardState = {...tileboardState}
        newTileboardState.UL[guessNumber] = newGuess;
        setTileboardState(newTileboardState);
      }
    }

    console.log(guess);
    
    // let newState = {...gameState};
    // newState.qNW = 'green'
    // newState.qSE = 'gray'
    // setGameState(newState);
    // console.log('state:', gameState);
  }

  return (
    <SafeAreaView>
      <View style={styles.lettersViewStyle}>
        <Button 
          onPress={getRandomWord}
          title='Fetch Random Word'
        />
      </View>
      <Tileboard UL={tileboardState.UL} ULcolors={tileboardState.ULcolors}/>

      <View style={{height: 20,}}></View>

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
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
});

export default App;
