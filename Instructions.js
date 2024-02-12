import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function InstructionsScreen() {
    return (
        <View style={styles.container}>
            <Text>Instructions Screen</Text>
            {/* Add your instructions here */}
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
});
