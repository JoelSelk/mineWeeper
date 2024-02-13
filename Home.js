//Home.js
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Home component
export default function Home() {
    const navigation = useNavigation();

    // Function to handle navigation to the game screen
    const handlePlay = () => {
        navigation.navigate('Game');
    };

    // Function to handle navigation to the instructions screen
    const handleInstructions = () => {
        navigation.navigate('Instructions');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mine Weeper</Text>
            <View style={styles.buttonContainer}>
                <Button title='Play' onPress={handlePlay} />
                <Button title='Instructions' onPress={handleInstructions} />
            </View>
        </View>
    );
}

// Styles for the Home component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40,
        marginBottom: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
    },
});
