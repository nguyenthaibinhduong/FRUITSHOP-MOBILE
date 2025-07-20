import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

const categories = [
    { name: 'Điện thoại', icon: 'phone-portrait-outline' },
    { name: 'Thời trang', icon: 'shirt-outline' },
    { name: 'Làm đẹp', icon: 'rose-outline' },
    { name: 'Gia dụng', icon: 'home-outline' },
    { name: 'Thể thao', icon: 'bicycle-outline' },
];

function CategoryList() {
    return (<View className="flex-row justify-around mt-5">
        {categories.map((item: any, idx: number) => (
            <TouchableOpacity key={idx} className="items-center w-16">
                <Ionicons name={item.icon} size={28} color="#7fad39" />
                <Text className="text-xs text-center mt-1">{item.name}</Text>
            </TouchableOpacity>
        ))}
    </View>);
}

export default CategoryList;