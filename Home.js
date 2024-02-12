//Home.js
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    const handlePlay = () => {
        navigation.navigate('Game');
    };

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
