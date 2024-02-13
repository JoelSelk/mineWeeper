//highscore.js
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HighScore({ route }) {
    const navigation = useNavigation();
    const { score } = route.params;

    // Function to handle playing again
    const handlePlayAgain = () => {
        navigation.navigate('Game', { reset: true });
    };

    // Function to handle navigating to home screen
    const handleHome = () => {
        navigation.navigate('Home');
    };

    // Dummy data for top ten scores
    const topTenScores = [
        { name: 'Player 1', score: 5000 },
        { name: 'Player 2', score: 4800 },
        { name: 'Player 3', score: 4500 },
        { name: 'Player 4', score: 4200 },
        { name: 'Player 5', score: 4000 },
        { name: 'Player 6', score: 3800 },
        { name: 'Player 7', score: 3500 },
        { name: 'Player 8', score: 3200 },
        { name: 'Player 9', score: 3000 },
        { name: 'Player 10', score: score },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.scoreTitle}>Game-Over</Text>
            <Text style={styles.scoreTitle}>Your Score: {score}</Text>

            <View style={styles.scoreboard}>
                {topTenScores.map((entry, index) => (
                    <Text key={index} style={[styles.scoreText, { fontSize: index < 5 ? 24 - index * 2 : 14 }]}>
                        {entry.name}: {entry.score}
                    </Text>
                ))}
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Play Again" onPress={handlePlayAgain} />
                <Button title="Home" onPress={handleHome} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scoreTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    scoreboard: {
        alignItems: 'center',
        marginBottom: 20,
    },
    scoreText: {
        marginBottom: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});