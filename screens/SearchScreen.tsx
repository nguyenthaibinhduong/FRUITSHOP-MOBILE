import HeaderLayout from "@/components/layouts/HeaderLayout";
import { useSearch } from "@/context/SearchContext";
import { ScrollView, Text, View } from "react-native";

function SearchScreen() {
    const { query }: any = useSearch();
    const data = [
        "Áo thun nam",
        "Tai nghe Bluetooth",
        "Giày thể thao",
        "Quần jeans",
        "Áo khoác nữ",
    ];

    const filtered = data.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
    );
    return (
        <View className="bg-primary flex-1">
            <HeaderLayout />
            <ScrollView
                className="bg-white min-h-screen"
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
                contentContainerStyle={{ paddingBottom: 200 }}
            >
                <View>
                    {query ? (
                        <Text className="text-base px-4 mt-4 text-black">Kết quả cho: "{query}"</Text>
                    ) : (
                        <Text className="text-base px-4 mt-4 text-gray-400">Chưa nhập từ khóa</Text>
                    )}
                </View>

            </ScrollView>
        </View>
    );
}

export default SearchScreen;