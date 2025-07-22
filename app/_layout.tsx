
import { Stack } from "expo-router";
import './global.css';
import HeaderLayout from "@/components/layouts/HeaderLayout";
import { SearchProvider } from "@/context/SearchContext";


export default function RootLayout() {
    return (
        <SearchProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="search" options={{ headerShown: false, animation: 'fade' }} />

            </Stack >

        </SearchProvider>
    );
}
