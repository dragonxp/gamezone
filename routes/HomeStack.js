import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Group screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' }, headerTintColor: '#444' }}>
                <Stack.Screen
                    name="_Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ReviewDetails"
                    component={ReviewDetails}
                    options={{ title: 'Review Details' }}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
}