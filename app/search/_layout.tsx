import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View } from 'react-native';
import { Stack } from "expo-router";

export default function SearchLayout() {



    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <Stack screenOptions={{ headerShown: false }} />
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
