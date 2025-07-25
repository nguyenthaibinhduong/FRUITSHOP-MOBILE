import HeaderLayout from "@/components/layouts/HeaderLayout";
import { useSearch } from "@/context/SearchContext";
import useFetch from "@/hooks/useFetch";
import React from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

const dataSample: any = [
    { id: '1', name: 'Áo thun nam', price: '99.000đ', image: require('../assets/images/product/product-1.jpg') },
    { id: '2', name: 'Tai nghe Bluetooth', price: '129.000đ', image: require('../assets/images/product/product-2.jpg') },
    { id: '3', name: 'Giày Sneaker', price: '199.000đ', image: require('../assets/images/product/product-3.jpg') },
    { id: '4', name: 'Áo hoodie nữ', price: '149.000đ', image: require('../assets/images/product/product-4.jpg') },
    { id: '5', name: 'Balo thời trang', price: '179.000đ', image: require('../assets/images/product/product-5.jpg') },
    { id: '6', name: 'Bộ đồ ngủ', price: '89.000đ', image: require('../assets/images/product/product-6.jpg') },
    { id: '7', name: 'Kính mát thời trang', price: '59.000đ', image: require('../assets/images/product/product-7.jpg') },
    { id: '8', name: 'Túi xách nữ', price: '239.000đ', image: require('../assets/images/product/product-8.jpg') },
    { id: '9', name: 'Đồng hồ thể thao', price: '399.000đ', image: require('../assets/images/product/product-9.jpg') },
    { id: '10', name: 'Áo sơ mi nam', price: '119.000đ', image: require('../assets/images/product/product-10.jpg') },
    { id: '11', name: 'Tai nghe chụp tai', price: '199.000đ', image: require('../assets/images/product/product-11.jpg') },
    { id: '12', name: 'Dép tổ ong', price: '49.000đ', image: require('../assets/images/product/product-12.jpg') },
];

function SearchScreen() {
    const { query }: any = useSearch();
    const { data, loading, error } = useFetch('/products?with=image&keySearch=name&valueSearch=' + query);
    const [products, setProducts] = React.useState<any[]>([]);

    React.useEffect(() => {
        if (data && query) {
            setProducts(data?.data);
        }
    }, [data, query]);

    return (
        <View className="bg-primary flex-1">
            <HeaderLayout />
            <FlatList
                className="bg-white"
                data={products ?? dataSample}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={
                    <View className="mb-5 mt-4">
                        {query ? (
                            <Text className="text-base px-4 text-black">Kết quả cho: "{query}"</Text>
                        ) : (
                            <Text className="text-base px-4 text-gray-400">Chưa nhập từ khóa</Text>
                        )}
                    </View>
                }
                renderItem={({ item }) => (
                    <View className="flex-row items-center justify-start mb-5 border-b border-gray-200 px-4">
                        <Image
                            source={item.image}
                            style={{ width: 70, height: 70 }}
                            resizeMode="cover"
                        />
                        <Text className="text-base flex-1 px-4 text-black">{item.name}</Text>
                    </View>
                )}
                showsVerticalScrollIndicator={true}
            />

        </View>
    );
}

export default SearchScreen;
