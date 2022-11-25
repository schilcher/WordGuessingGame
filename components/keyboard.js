import React, { useEffect } from 'react';
import {StyleSheet, View, Text, Pressable, useWindowDimensions} from 'react-native';
import Key from './key';
import Icon from "react-native-vector-icons/Ionicons";  // cd ios && pod install

const Keyboard = (props) => {
    const windowWidth = useWindowDimensions().width;
    const { styles } = useStyle(windowWidth);
    backspaceIconSize = Math.floor(windowWidth / 13) + 1;

    useEffect(() => {
        //console.log('props:', props.gamestate.qNE)
    }, [])

    return (
        <View style={styles.mainViewStyle}>
            <View style={styles.submitRowView}>

                <View style={styles.spacerViewStyle}></View>
                
                <Pressable
                    onPress={() => {updateGameState('submit')}}
                    style ={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <View style={styles.submitButtonView}>
                        <Text style={styles.submitTextStyle}>SUBMIT</Text>
                    </View>
                </Pressable>

                <Pressable
                    onPress={() => {updateGameState('backspace')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <View style={styles.backspaceButtonView}>
                        {/*<Text style={styles.backspaceTextStyle}>{'<'}</Text>*/}
                        {/*<Icon name='delete'/>*/}
                        <Icon
                            name="backspace-outline"
                            color="white"
                            size={backspaceIconSize}
                        />
                    </View>
                </Pressable>
            </View>

            <View style={styles.qLetterRowView}>
                <Pressable 
                    onPress={() => {updateGameState('Q')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='Q' NW={props.gamestate.qNW} SW={props.gamestate.qSW} NE={props.gamestate.qNE} SE={props.gamestate.qSE}/>
                </Pressable>
                
                <Pressable 
                    onPress={() => {updateGameState('W')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='W' NW={props.gamestate.wNW} SW={props.gamestate.wSW} NE={props.gamestate.wNE} SE={props.gamestate.wSE}/>
                </Pressable>

                <Pressable 
                    onPress={() => {updateGameState('E')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='E' NW={props.gamestate.eNW} SW={props.gamestate.eSW} NE={props.gamestate.eNE} SE={props.gamestate.eSE}/>
                </Pressable>

                <Pressable 
                    onPress={() => {updateGameState('R')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='R' NW={props.gamestate.rNW} SW={props.gamestate.rSW} NE={props.gamestate.rNE} SE={props.gamestate.rSE}/>
                </Pressable>

                <Pressable 
                    onPress={() => {updateGameState('T')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='T' NW={props.gamestate.tNW} SW={props.gamestate.tSW} NE={props.gamestate.tNE} SE={props.gamestate.tSE}/>
                </Pressable>

                <Pressable 
                    onPress={() => {updateGameState('Y')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='Y' NW={props.gamestate.yNW} SW={props.gamestate.ySW} NE={props.gamestate.yNE} SE={props.gamestate.ySE}/>
                </Pressable>

                <Pressable 
                    onPress={() => {updateGameState('U')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='U' NW={props.gamestate.uNW} SW={props.gamestate.uSW} NE={props.gamestate.uNE} SE={props.gamestate.uSE}/>
                </Pressable>

                <Pressable 
                    onPress={() => {updateGameState('I')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='I' NW={props.gamestate.iNW} SW={props.gamestate.iSW} NE={props.gamestate.iNE} SE={props.gamestate.iSE}/>
                </Pressable>

                <Pressable 
                    onPress={() => {updateGameState('O')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='O' NW={props.gamestate.oNW} SW={props.gamestate.oSW} NE={props.gamestate.oNE} SE={props.gamestate.oSE}/>
                </Pressable>

                <Pressable 
                    onPress={() => {updateGameState('P')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='P' NW={props.gamestate.pNW} SW={props.gamestate.pSW} NE={props.gamestate.pNE} SE={props.gamestate.pSE}/>
                </Pressable>

            </View>
            <View style={styles.letterRowView}>
                <Pressable 
                    onPress={() => {updateGameState('A')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='A' NW={props.gamestate.aNW} SW={props.gamestate.aSW} NE={props.gamestate.aNE} SE={props.gamestate.aSE}/>
                </Pressable>

                <Pressable 
                    onPress={() => {updateGameState('S')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='S' NW={props.gamestate.sNW} SW={props.gamestate.sSW} NE={props.gamestate.sNE} SE={props.gamestate.sSE}/>
                </Pressable>

                <Pressable 
                    onPress={() => {updateGameState('D')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='D' NW={props.gamestate.dNW} SW={props.gamestate.dSW} NE={props.gamestate.dNE} SE={props.gamestate.dSE}/>
                </Pressable>

                <Pressable 
                    onPress={() => {updateGameState('F')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='F' NW={props.gamestate.fNW} SW={props.gamestate.fSW} NE={props.gamestate.fNE} SE={props.gamestate.fSE}/>
                </Pressable>

                <Pressable 
                    onPress={() => {updateGameState('G')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='G' NW={props.gamestate.gNW} SW={props.gamestate.gSW} NE={props.gamestate.gNE} SE={props.gamestate.gSE}/>
                </Pressable>

                <Pressable 
                    onPress={() => {updateGameState('H')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='H' NW={props.gamestate.hNW} SW={props.gamestate.hSW} NE={props.gamestate.hNE} SE={props.gamestate.hSE}/>
                </Pressable>

                <Pressable 
                    onPress={() => {updateGameState('J')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='J' NW={props.gamestate.jNW} SW={props.gamestate.jSW} NE={props.gamestate.jNE} SE={props.gamestate.jSE}/>
                </Pressable>

                <Pressable 
                    onPress={() => {updateGameState('K')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='K' NW={props.gamestate.kNW} SW={props.gamestate.kSW} NE={props.gamestate.kNE} SE={props.gamestate.kSE}/>
                </Pressable>

                <Pressable 
                    onPress={() => {updateGameState('L')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='L' NW={props.gamestate.lNW} SW={props.gamestate.lSW} NE={props.gamestate.lNE} SE={props.gamestate.lSE}/>
                </Pressable>

            </View>
            <View style={styles.letterRowView}>
                <Pressable 
                    onPress={() => {updateGameState('Z')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='Z' NW={props.gamestate.zNW} SW={props.gamestate.zSW} NE={props.gamestate.zNE} SE={props.gamestate.zSE}/>
                </Pressable>

                <Pressable 
                    onPress={() => {updateGameState('X')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='X' NW={props.gamestate.xNW} SW={props.gamestate.xSW} NE={props.gamestate.xNE} SE={props.gamestate.xSE}/>
                </Pressable>

                <Pressable 
                    onPress={() => {updateGameState('C')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='C' NW={props.gamestate.cNW} SW={props.gamestate.cSW} NE={props.gamestate.cNE} SE={props.gamestate.cSE}/>
                </Pressable>

                <Pressable 
                    onPress={() => {updateGameState('V')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='V' NW={props.gamestate.vNW} SW={props.gamestate.vSW} NE={props.gamestate.vNE} SE={props.gamestate.vSE}/>
                </Pressable>

                <Pressable 
                    onPress={() => {updateGameState('B')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='B' NW={props.gamestate.bNW} SW={props.gamestate.bSW} NE={props.gamestate.bNE} SE={props.gamestate.bSE}/>
                </Pressable>

                <Pressable 
                    onPress={() => {updateGameState('N')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='N' NW={props.gamestate.nNW} SW={props.gamestate.nSW} NE={props.gamestate.nNE} SE={props.gamestate.nSE}/>
                </Pressable>

                <Pressable 
                    onPress={() => {updateGameState('M')}}
                    style={({pressed}) => [
                        {backgroundColor: pressed ? 'lightblue' : 'transparent'}]}>
                    <Key letter='M' NW={props.gamestate.mNW} SW={props.gamestate.mSW} NE={props.gamestate.mNE} SE={props.gamestate.mSE}/>
                </Pressable>

            </View>
        </View>
    );
}

const useStyle = (windowWidth) => {
    // round down to remove decimal to prevent line between views on keys
    const keyWidth = Math.floor(windowWidth / 26) * 2;
    const keyHeight = Math.floor(windowWidth / 24) * 2;
    const fontSize = Math.floor(windowWidth / 14);
    
    const styles = StyleSheet.create({
        mainViewStyle: {
            
        },
        submitButtonView: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 5,
            backgroundColor: 'green',
            width: keyWidth * 6,
            height: keyHeight,
        },
        backspaceButtonView: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 5,
            backgroundColor: 'red',
            width: keyWidth + 10,
            height: keyHeight,
            marginLeft: 10,
        },
        spacerViewStyle: {
            width: keyWidth + 10,
            height: keyHeight,
            marginRight: 10,
        },
        submitRowView: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 5,
        },
        qLetterRowView: {
            flexDirection: 'row',
            justifyContent: 'center',
        },
        letterRowView: {
            flexDirection: 'row',
            justifyContent: 'center',
        },
        backspaceView: {
            backgroundColor: 'red',
        },
        submitTextStyle: {
            color: 'white',
            fontSize: fontSize,
        },
        backspaceTextStyle: {
            color: 'white',
            fontSize: fontSize,
        },
    })

    return {styles}
}

export default Keyboard;