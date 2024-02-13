// Instructions.js
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Instructions({ navigation }) {
    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <View style={[styles.container, { backgroundColor: 'skyblue' }]}>
            <Text style={styles.title}>Instructions</Text>
            <Text style={styles.text}>
                Welcome to Mine Weeper! The objective of the game is to clear the grid without detonating any mines.
                To play, you need to set the grid size and the number of mines. Then, click on a tile to reveal what's underneath.
                If you reveal a mine, the game ends. If you reveal all non-mine tiles, you win!
            </Text>
            <Text style={styles.info}>
                You can choose the number of mines to play with, within a certain range. The minimum number of mines is 1, and the maximum number of mines is one less than the total number of tiles in the grid.
            </Text>
            <Text style={styles.info}>
                Scoring System:
                - When a tile is cleared (revealed) successfully without hitting a mine, the player earns points. The base score for clearing a tile is 100 points.
                - The score is multiplied based on the number of mines in play. If there is only one mine, the base score applies. But for each additional mine, the score is multiplied accordingly.
                - If a mine is hit, the player loses points.
            </Text>
            <Button title="Go Back" onPress={handleGoBack} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    info: {
        fontSize: 14,
        textAlign: 'center',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
});
