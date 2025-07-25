import { Ionicons } from "@expo/vector-icons";

import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoBack from "../buttons/GoBack";

import SearchInput from "../blocks/form/SearchInput";

function HeaderLayout({ children, isRedirect = false, hasComeBack = false }: { children?: React.ReactNode, isRedirect?: boolean, hasComeBack?: boolean }) {
    const router = useRouter();
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
                        <SearchInput />
                    </>

            }

        </SafeAreaView>
    );
}

export default HeaderLayout;
