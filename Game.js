import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import NumberInput from './components/NumberInput';
import Grid from './components/Grid';

export default function Game({ navigation, route }) {
    const [gridSize, setGridSize] = useState('');
    const [numMines, setNumMines] = useState('');
    const [showGrid, setShowGrid] = useState(false);
    const [error, setError] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (route.params?.reset) {
            // Reset the game when the reset parameter is true
            setShowGrid(false);
            setGridSize('');
            setNumMines('');
            setScore(0);
        }
    }, [route.params]);

    // Function to handle size change
    const handleSizeChange = (text) => {
        const size = parseInt(text);
        if (text === '' || (!isNaN(size) && size >= 4 && size <= 10)) {
            setGridSize(text);
            setError(false); // Reset error state
        } else {
            setError(true); // Display error if value is outside range
        }
    };

    // Function to handle number of mines change
    const handleNumMinesChange = (text) => {
        const num = parseInt(text);
        if (text === '' || (!isNaN(num) && num >= 1 && num < parseInt(gridSize) * parseInt(gridSize))) {
            setNumMines(text);
            setError(false); // Reset error state
        } else {
            setError(true); // Display error if value is outside range
        }
    };

    // Function to handle start game
    const handleStartGame = () => {
        setShowGrid(true);
    };

    // Function to handle quit
    const handleQuit = () => {
        navigation.navigate('HighScore', { score: score }); // Navigate to HighScore screen with score parameter
    };

    // Function to handle clearing a tile
    const handleClearTile = () => {
        // Update the score
        setScore((prevScore) => prevScore + 100); // Increment score by 100 for each tile cleared
    };

    // Function to handle mine hit
    const handleMineHit = () => {
        // Deduct 100 points for hitting a mine
        setScore((prevScore) => prevScore - 100);
        // Navigate to HighScore screen with updated score
        navigation.navigate('HighScore', { score: score - 100 });
    };

    return (
        <View style={styles.container}>
            {!showGrid && (
                <View>
                    <Text style={styles.title}>Mine Weeper</Text>
                    <NumberInput value={gridSize} onChange={handleSizeChange} error={error} label="Grid Size" />
                    <NumberInput value={numMines} onChange={handleNumMinesChange} error={error} label="Number of Mines" />
                    <Button title="Start Game" onPress={handleStartGame} />
                </View>
            )}
            {showGrid && (
                <View style={styles.gridContainer}>
                    <Text style={styles.score}>Score: {score}</Text>
                    <Grid
                        size={parseInt(gridSize)}
                        numMines={parseInt(numMines)}
                        onClearTile={handleClearTile}
                        onMineHit={handleMineHit} // Pass handleMineHit function to Grid component
                        score={score} // Pass score to Grid component
                        navigation={navigation} // Pass navigation prop to Grid component
                    />
                    <View style={styles.gameControls}>
                        <Button title="Quit" onPress={handleQuit} />
                    </View>
                </View>
            )}
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
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
    },
    gridContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    gameControls: {
        marginTop: 20,
    },
    score: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
});
