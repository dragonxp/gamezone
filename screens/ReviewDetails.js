import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Card from "../shared/card";
import { globalStyles, images } from "../styles/global";

export default function ReviewDetails({ route, navigation }) {
    const { title, body, rating } = route.params

    useFocusEffect(
        useCallback(() => {
            // From a Stack screen, the Drawer is accessed.
            const parent = navigation.getParent()
            parent?.setOptions({ headerShown: false })
            // It returns to the initial state.
            return () => parent?.setOptions({ headerShown: true })
        }, [navigation])
    )

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{title}</Text>
                <Text>{body}</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating:</Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
});