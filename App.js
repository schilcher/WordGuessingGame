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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const getRandomWord = () => {
  console.log('getRandomWord');
  
  axios.get("https://random-word-api.herokuapp.com/word")
      .then(response => {
          console.log('getting data from axios', response.data);
          setTimeout(() => {
              return("Hello");
          }, 2000)
      })
      .catch(error => {
          console.log(error);
      });
}

const goForFetch = () => {
  // this.setState({
  //     fromFetch: true,
  //     loading: true,

  // })
  fetch("https://random-word-api.herokuapp.com/word?length=5&&number=4")
      .then(response => response.json())
      .then((responseJson) => {
          console.log('getting data from fetch', responseJson)
          console.log('first word is:', responseJson[0])
          // this.setState({
          //     loading: false,
          //     dataSource: responseJson
          // })
      })
      .catch(error => console.log(error))
}

const randomWord = () => {
  console.log('randomWord');
  return getRandomWord();
}

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.lettersViewStyle}>
        <Text>test</Text>
        <Button 
          onPress={goForFetch}
          title='Fetch Random Word'
        />
      </View>
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
