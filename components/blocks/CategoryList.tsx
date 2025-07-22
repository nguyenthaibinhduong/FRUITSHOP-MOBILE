import { Ionicons } from "@expo/vector-icons";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const categories: any = [
    { name: 'Điện thoại', icon: 'phone-portrait-outline' },
    { name: 'Thời trang', icon: 'shirt-outline' },
    { name: 'Làm đẹp', icon: 'rose-outline' },
    { name: 'Gia dụng', icon: 'home-outline' },
    { name: 'Thể thao', icon: 'bicycle-outline' },
    { name: 'Sách', icon: 'book-outline' },
    { name: 'Máy tính', icon: 'laptop-outline' },
];

function CategoryList() {
    return (
        <FlatList
            className="py-5"
            data={categories}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 12, paddingTop: 10 }}
            renderItem={({ item }) => (
                <TouchableOpacity className="items-center w-16 mr-4">
                    <Ionicons name={item.icon} size={28} color="#7fad39" />
                    <Text className="text-xs text-center mt-1">{item.name}</Text>
                </TouchableOpacity>
            )}
        />
    );
}

export default CategoryList;
