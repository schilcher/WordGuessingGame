/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
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
import Key from './components/key';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <View style={styles.lettersViewStyle}>
        <Text>test</Text>
        <Button 
          onPress={getRandomWord}
          title='Fetch Random Word'
        />
      </View>
      <Keyboard />
      <Key letter='A' NW='green' SW='green' NE='gray' SE='white'/>
      <Key letter='B' NW='white' SW='green' NE='gray' SE='white'/>
      <Key letter='C' NW='white' SW='green' NE='gray' SE='white'/>
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
