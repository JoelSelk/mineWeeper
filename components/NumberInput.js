import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

const NumberInput = ({ value, onChange, error, label, gridSize, minePlaceholder }) => {
    const gridArea = gridSize * gridSize; // Calculate the total number of tiles in the grid
    const placeholderText = '4 - 9'; // Placeholder range for grid size
    const minePlaceholderText = gridSize ? `1 - ${gridArea - 1}` : '0'; // Placeholder range for mine number
    const minePlaceholderToShow = minePlaceholder ? minePlaceholder : minePlaceholderText; // Use custom mine placeholder if provided, otherwise use calculated value

    return (
        <View style={styles.container}>
            <Text>{label}</Text>
            <TextInput
                style={[styles.input, error && styles.error]}
                value={value}
                onChangeText={onChange}
                keyboardType="numeric"
                placeholder={label === 'Grid Size' ? placeholderText : minePlaceholderToShow}
                placeholderTextColor="lightgrey"
            />
            {error && <Text style={styles.errorMessage}>Invalid input</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    error: {
        borderColor: 'red',
    },
    errorMessage: {
        color: 'red',
        marginTop: 5,
    },
});

export default NumberInput;
