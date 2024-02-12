//tile.js
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';

export default function Tile({ size, isMine, onPress, onMineHit }) {
    const [revealed, setRevealed] = useState(false);

    const handlePress = () => {
        if (isMine) {
            Alert.alert(
                'Boom!',
                'You clicked on a mine.',
                () => {
                    onMineHit(); // Call the onMineHit callback to handle the mine hit logic in the Game component
                }
            );
        } else {
            setRevealed(true);
            onPress(); // Call the onPress function to reveal the tile
        }
    };

    return (
        <TouchableOpacity
            style={[
                styles.tile,
                { width: size, height: size, backgroundColor: revealed ? 'white' : 'grey' },
                isMine && revealed && { backgroundColor: 'red' }, // Change color to red if mine is revealed
            ]}
            onPress={handlePress}
            disabled={revealed} // Disable clicking on revealed tiles
        >
            {revealed && (isMine ? <Text>M</Text> : <Text>{"dirt"}</Text>)}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    tile: {
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
