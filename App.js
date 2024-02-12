// Navigation.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Game from './Game';
import Instructions from './Instructions';
import HighScore from './HighScore'; // Import the HighScore component

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Game" component={Game} options={{ headerShown: false }} />
                <Stack.Screen name="Instructions" component={Instructions} options={{ headerShown: false }} />
                <Stack.Screen name="HighScore" component={HighScore} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
