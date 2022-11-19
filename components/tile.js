import React, { Component } from 'react';
import {StyleSheet, View, Text, useWindowDimensions, TouchableWithoutFeedback} from 'react-native';



const Tile = (props) => {
    const windowWidth = useWindowDimensions().width;
    const { styles } = useStyle(windowWidth);

    return (
        <View style={styles.tileOutlineStyle}>
            <Text style={styles.textStyle}>{props.letter}</Text>
        </View>
    );

}

const useStyle = (windowWidth) => {
    // round down to remove decimal to prevent line between views on keys
    const keyWidth = Math.floor(windowWidth / 26) * 2;
    const keyHeight = Math.floor(windowWidth / 28) * 2;
    const fontSize = Math.floor(windowWidth / 14);
    
    const styles = StyleSheet.create({
        tileOutlineStyle: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            height: keyHeight,
            width: keyWidth,
            margin: 2,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: 'white',
            overflow: 'hidden',
        },
        textStyle: {
            fontSize: fontSize,
            color: 'white',
        },
    })

    return {styles}
}

export default Tile;