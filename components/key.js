import React, { Component } from 'react';
import {StyleSheet, View, Text, useWindowDimensions} from 'react-native';



const Key = (props) => {
    const windowWidth = useWindowDimensions().width;
    // console.log('window width:', windowWidth);
    // console.log('half width:', Math.floor(windowWidth / 24))
    const { styles } = useStyle(windowWidth);

    return (
        <View style={styles.keyOutlineStyle}>
            <View style={styles.halfStyle}>
                {/* upper left corner color */}
                {quadColor(props.NW, styles)}

                {/* lower left corner color */}
                {quadColor(props.SW, styles)}
            </View>
            <View style={styles.halfStyle}>
                {/* upper right corner color */}
                {quadColor(props.NE, styles)}

                {/* lower right corner color */}
                {quadColor(props.SE, styles)}
            </View>
            <View style={styles.letterViewStyle}>
                <Text style={styles.letterFontStyle}>{props.letter}</Text>
            </View>
        </View>
    );
}

const quadColor = (color, styles) => {
    if (color == 'green') {
        return <View style={styles.greenQuarter}></View>
    } else if (color == 'gray') {
        return <View style={styles.grayQuarter}></View>
    } else if (color == 'red') {
        return <View style={styles.redQuarter}></View>
    } else {
        return <View style={styles.whiteQuarter}></View>
    }
}

const useStyle = (windowWidth) => {
    // round down to remove decimal to prevent line between views on keys
    const keyWidth = Math.floor(windowWidth / 26) * 2;
    const keyHeight = Math.floor(windowWidth / 24) * 2;
    const fontSize = Math.floor(windowWidth / 13);
    
    const styles = StyleSheet.create({
        keyOutlineStyle: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'blue',
            height: keyHeight,
            width: keyWidth,
            margin: 2,
            borderRadius: 5,
            overflow: 'hidden',
        },
        halfStyle: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
        },  
        whiteQuarter: {
            backgroundColor: 'white',
            height: keyHeight / 2,
            width: keyWidth / 2,
        },
        greenQuarter: {
            backgroundColor: 'lightgreen',
            height: keyHeight / 2,
            width: keyWidth / 2,
        },
        grayQuarter: {
            backgroundColor: 'lightgray',
            height: keyHeight / 2,
            width: keyWidth / 2,
        },
        redQuarter: {
            backgroundColor: 'red',
            height: keyHeight / 2,
            width: keyWidth / 2,
        },
        letterViewStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            position: 'absolute',
            height: keyHeight,
            width: keyWidth,
        },
        letterFontStyle: {
            fontSize: fontSize,
        },
    })

    return {styles}
}

export default Key;