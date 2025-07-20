import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

function Header() {
    return (<View className="flex-row py-5 items-center px-3 rounded-bottom-xl">
        <Ionicons name="search-outline" size={25} color="white" />
        <TextInput placeholder="Tìm sản phẩm..." placeholderTextColor="#7fad39" className="ml-3 flex-1 text-sm bg-white rounded-[30px] px-3 py-2 pb-3 text-black" />
    </View>);
}

export default Header;