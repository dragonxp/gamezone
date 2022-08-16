import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { globalStyles } from "../styles/global";
import * as yup from 'yup';
import FlatButton from "../shared/button";

const reviewSchema = yup.object().shape({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required()
        .test('is-num-1-5', 'Rating must be a number between 1-5', (val) => {
            return parseInt(val) > 0 && parseInt(val) < 6;
        })
})

export default function ReviewForm({ addReview }) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [rating, setRating] = useState('')

    const submitForm = async () => {

        try {
            const res = await reviewSchema.validate({ title, body, rating })
            if (res) addReview(res)
        } catch (err) {
            Alert.alert('Invalid Review', err.message, [{ text: "OK"}])
        }
    }

    return (
        <View style={globalStyles.container}>
            <TextInput
                placeholder="Review Title"
                onChangeText={(val) => setTitle(val)}
                value={title}
                style={globalStyles.input}
            />

            <TextInput
                multiline
                placeholder="Review Body"
                onChangeText={(val) => setBody(val)}
                value={body}
                style={globalStyles.input}
            />

            <TextInput
                placeholder="Rating (1-5)"
                onChangeText={(val) => setRating(val)}
                value={rating}
                style={globalStyles.input}
                keyboardType='numeric'
            />

            <FlatButton text='Submit Review' onPress={submitForm} />
        </View>
    )
}