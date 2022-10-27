import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Keyboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.mainViewStyle}>
                <View style={styles.submitButtonView}>
                    
                </View>
                <Text>Hello</Text>
                <Text>World</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainViewStyle: {
        backgroundColor: 'white',
    },
    submitButtonView: {

    },
    qLetterRowView: {

    },
    letterRowView: {

    },
})