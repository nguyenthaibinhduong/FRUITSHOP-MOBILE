
import { Stack } from "expo-router";
import './global.css';
import { SearchProvider } from "@/context/SearchContext";
import { Provider } from "react-redux";
import { store } from "@/redux/stores/store";


export default function RootLayout() {
    return (
        <SearchProvider>
            <Provider store={store}>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="search" options={{ headerShown: false, animation: 'fade' }} />

                </Stack >
            </Provider>
        </SearchProvider>
    );
}
