import React from 'react';
import { useFonts } from 'expo-font';
import RootDrawer from './routes/Drawer'

export default function App() {
	let [fontsLoaded] = useFonts({
		'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
		'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
	});

	if (!fontsLoaded) return null

	return (
		RootDrawer()
	);
}
