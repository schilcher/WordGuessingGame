import React, { useEffect } from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import Tile from './tile';

const Tileboard = (props) => {

    // UL = upper left
    // UR = upper right
    // BL = bottom left
    // BR = botom right

    useEffect(() => {
        console.log('props:', props);
    }, [])

    return (
        <View style={styles.tileboardStyle}>
            <View style={styles.rowStyle}>
                {/* UL row 1 */}
                <View style={styles.leftTiles}>
                    <Tile letter={props.UL[0][0]} color={props.ULcolors[0][0]}/>
                    <Tile letter={props.UL[0][1]} color={props.ULcolors[0][1]}/>
                    <Tile letter={props.UL[0][2]} color={props.ULcolors[0][2]}/>
                    <Tile letter={props.UL[0][3]} color={props.ULcolors[0][3]}/>
                    <Tile letter={props.UL[0][4]} color={props.ULcolors[0][4]}/>
                </View>

                {/* UR row 1 */}
                <View style={styles.rightTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
            </View>

            <View style={styles.rowStyle}>
                <View style={styles.leftTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
                <View style={styles.rightTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
            </View>

            <View style={styles.rowStyle}>
                <View style={styles.leftTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
                <View style={styles.rightTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
            </View>

            <View style={styles.rowStyle}>
                <View style={styles.leftTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
                <View style={styles.rightTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
            </View>

            <View style={styles.rowStyle}>
                <View style={styles.leftTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
                <View style={styles.rightTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
            </View>

            <View style={styles.rowStyle}>
                <View style={styles.leftTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
                <View style={styles.rightTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
            </View>

            <View style={styles.rowStyle}>
                <View style={styles.leftTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
                <View style={styles.rightTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
            </View>

            <View style={styles.rowStyle}>
                <View style={styles.leftTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
                <View style={styles.rightTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
            </View>

            <View style={styles.rowStyle}>
                <View style={styles.leftTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
                <View style={styles.rightTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
            </View>

            <View style={{height: 20,}}></View>

            <View style={styles.rowStyle}>
                <View style={styles.leftTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
                <View style={styles.rightTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
            </View>

            <View style={styles.rowStyle}>
                <View style={styles.leftTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
                <View style={styles.rightTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
            </View>

            <View style={styles.rowStyle}>
                <View style={styles.leftTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
                <View style={styles.rightTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
            </View>

            <View style={styles.rowStyle}>
                <View style={styles.leftTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
                <View style={styles.rightTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
            </View>

            <View style={styles.rowStyle}>
                <View style={styles.leftTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
                <View style={styles.rightTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
            </View>

            <View style={styles.rowStyle}>
                <View style={styles.leftTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
                <View style={styles.rightTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
            </View>

            <View style={styles.rowStyle}>
                <View style={styles.leftTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
                <View style={styles.rightTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
            </View>

            <View style={styles.rowStyle}>
                <View style={styles.leftTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
                <View style={styles.rightTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
            </View>

            <View style={styles.rowStyle}>
                <View style={styles.leftTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
                <View style={styles.rightTiles}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </View>
            </View>            

        </View>
    );
}

const styles = StyleSheet.create({
    tileboardStyle: {
        flexDirection: 'column',
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftTiles: {
        flexDirection: 'row',
    },
    rightTiles: {
        flexDirection: 'row',
    },
})

export default Tileboard;