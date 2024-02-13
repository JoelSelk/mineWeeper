// Navigation.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Game from './Game';
import Instructions from './Instructions';
import HighScore from './HighScore';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    cardStyle: { backgroundColor: 'skyblue' }
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Game" component={Game} />
                <Stack.Screen name="Instructions" component={Instructions} />
                <Stack.Screen name="HighScore" component={HighScore} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
