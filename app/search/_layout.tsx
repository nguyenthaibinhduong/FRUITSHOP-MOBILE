import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View } from 'react-native';
import { Stack } from "expo-router";

export default function SearchLayout() {



    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Stack screenOptions={{ headerShown: false }} />
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}
