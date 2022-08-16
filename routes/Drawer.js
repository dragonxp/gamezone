import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
import Header from "../shared/header";

const Drawer = createDrawerNavigator();

export default function RootDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' }, headerTintColor: '#444' }}>
                <Drawer.Screen 
                    name="Home" 
                    component={HomeStack} 
                    options={{ 
                        headerTitle: () => <Header title='GameZone' />,
                     }} />
                <Drawer.Screen 
                    name="About" 
                    component={AboutStack} 
                    options={{ 
                        headerTitle: () => <Header title='About GameZone' />,
                    }} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}