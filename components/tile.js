import React, { Component } from 'react';
import {StyleSheet, View, Text, useWindowDimensions, TouchableWithoutFeedback} from 'react-native';



const Tile = (props) => {
    const windowWidth = useWindowDimensions().width;
    const { styles } = useStyle(windowWidth, props);

    return (
        <View style={TileColor(props.color, styles)}>
            <Text adjustsFontSizeToFit={true} style={styles.textStyle}>{props.letter}</Text>
        </View>
    );

}

const TileColor = (color, styles) => {
    if (color == 'green') {
        return styles.greenTile
    } else if (color == 'gray') {
        return styles.grayTile
    } else if (color == 'orange') {
        return styles.orangeTile
    } else {
        return styles.tileOutlineStyle
    }
}

const useStyle = (windowWidth, props) => {
    // round down to remove decimal to prevent line between views on keys
    const keyWidth = Math.floor(windowWidth / 26) * 2;
    const keyHeight = Math.floor(windowWidth / 28) * 2;
    const fontSize = Math.floor(windowWidth / 18);
    
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
        greenTile: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green',
            height: keyHeight,
            width: keyWidth,
            margin: 2,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: 'white',
            overflow: 'hidden',
        },
        grayTile: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'gray',
            height: keyHeight,
            width: keyWidth,
            margin: 2,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: 'white',
            overflow: 'hidden',
        },
        orangeTile: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'orange',
            height: keyHeight,
            width: keyWidth,
            margin: 2,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: 'white',
            overflow: 'hidden',
        },
        textStyle: {
            color: 'white',
            textAlignVertical: 'center',
            fontSize: fontSize,
        },
    })

    return {styles}
}

export default Tile;