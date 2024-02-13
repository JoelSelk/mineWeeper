//tile.js
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';

// Tile component
export default function Tile({ size, isMine, onPress, onMineHit }) {
    const [revealed, setRevealed] = useState(false);

    // Function to handle tile press
    const handlePress = () => {
        if (isMine) {
            Alert.alert(
                'Boom!',
                'You clicked on a mine.',
                () => {
                    onMineHit();
                }
            );
        } else {
            setRevealed(true);
            onPress();
        }
    };

    return (
        <TouchableOpacity
            style={[
                styles.tile,
                { width: size, height: size, backgroundColor: revealed ? 'brown' : 'green' },
                isMine && revealed && { backgroundColor: 'red' },
            ]}
            onPress={handlePress}
            disabled={revealed}
        >
            {revealed && isMine && (
                <Text style={styles.mine}>M</Text>
            )}
        </TouchableOpacity>
    );
}

// Styles for the Tile component
const styles = StyleSheet.create({
    tile: {
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mine: {
        color: 'white',
        fontWeight: 'bold',
    },
    text: {
        color: 'black',
    },
});
