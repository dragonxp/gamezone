import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';

const Stack = createStackNavigator();

export default function AboutStack() {
    return (
        <Stack.Navigator>
            <Stack.Group screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' }, headerTintColor: '#444', headerShown: false }}>
                <Stack.Screen
                    name="_About"
                    component={About}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
}