import { useEffect, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { useRouter } from "expo-router";
import { Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoBack from "../buttons/GoBack";
import { useSearch } from "@/context/SearchContext";

function HeaderLayout({ children, isRedirect = false, hasComeBack = false }: { children?: React.ReactNode, isRedirect?: boolean, hasComeBack?: boolean }) {

    const { query, setQuery }: any = useSearch();
    const router = useRouter();
    const inputRef = useRef<TextInput>(null);

    useEffect(() => {
        if (!isRedirect) {
            const timer = setTimeout(() => {
                inputRef.current?.focus();
            }, 300); // thêm delay nhỏ để đảm bảo component đã render

            return () => clearTimeout(timer);
        }
    }, []);

    const gotoSearch = () => {
        router.push('/search');
    };

    return (
        <SafeAreaView className="flex-row justify-items-start items-center px-3 pt-3  bg-primary">
            {
                isRedirect ?
                    <>{hasComeBack && <GoBack />}
                        <TouchableOpacity
                            onPress={gotoSearch}
                            activeOpacity={0.8}
                            className="flex-row flex-1 items-center bg-white rounded-[30px] px-3 h-[5vh]"
                        >
                            <Ionicons name="search-outline" size={20} color="#7fad39" />
                            <Text className="ml-2 text-gray-500 text-sm">Tìm sản phẩm...</Text>
                        </TouchableOpacity>
                        {children}
                    </>
                    :
                    <>
                        <GoBack />
                        <View


                            className="flex-row flex-1 items-center bg-white rounded-[30px] px-3 h-[5vh]"
                        >
                            <Ionicons name="search-outline" size={20} color="#7fad39" />
                            <TextInput
                                ref={inputRef}
                                value={query}
                                onChangeText={setQuery}
                                placeholder="Tìm sản phẩm..."
                                placeholderTextColor={'#ccc'}
                                className="flex-row flex-1 items-center ml-2 pb-1 text-gray-500 text-sm" />
                        </View>

                    </>

            }

        </SafeAreaView>
    );
}

export default HeaderLayout;
