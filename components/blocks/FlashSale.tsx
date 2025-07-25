import { FlatList, Text, View } from "react-native";
import ProductCard from "./product/ProductCard";
import React from "react";
import useFetch from "@/hooks/useFetch";
const dataSample = [
    { id: '1', name: 'Áo thun nam', price: '99.000đ', image: require('../../assets/images/product/product-1.jpg') },
    { id: '2', name: 'Tai nghe Bluetooth', price: '129.000đ', image: require('../../assets/images/product/product-2.jpg') },
    { id: '3', name: 'Giày Sneaker', price: '199.000đ', image: require('../../assets/images/product/product-3.jpg') },
    { id: '4', name: 'Áo hoodie nữ', price: '149.000đ', image: require('../../assets/images/product/product-4.jpg') },
    { id: '5', name: 'Balo thời trang', price: '179.000đ', image: require('../../assets/images/product/product-5.jpg') },
    { id: '6', name: 'Bộ đồ ngủ', price: '89.000đ', image: require('../../assets/images/product/product-6.jpg') },
    { id: '7', name: 'Kính mát thời trang', price: '59.000đ', image: require('../../assets/images/product/product-7.jpg') },
    { id: '8', name: 'Túi xách nữ', price: '239.000đ', image: require('../../assets/images/product/product-8.jpg') },
    { id: '9', name: 'Đồng hồ thể thao', price: '399.000đ', image: require('../../assets/images/product/product-9.jpg') },
    { id: '10', name: 'Áo sơ mi nam', price: '119.000đ', image: require('../../assets/images/product/product-10.jpg') },
    { id: '11', name: 'Tai nghe chụp tai', price: '199.000đ', image: require('../../assets/images/product/product-11.jpg') },
    { id: '12', name: 'Dép tổ ong', price: '49.000đ', image: require('../../assets/images/product/product-12.jpg') },
];
function FlashSale() {
    const [products, setProducts] = React.useState<any>()
    const { data, loading, error } = useFetch('/products?page=1&limit=20&with=image');
    React.useEffect(() => {
        if (data?.data) {
            setProducts(data?.data)


        }
    }, [data])


    return (<>
        <View className="bg-primary mt-5 px-2 py-3">
            <Text className="font-bold px-3 text-white text-xl   ">⚡ Flash Sale</Text>
            <FlatList

                horizontal
                data={products ?? dataSample}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 2, paddingVertical: 2 }}
                renderItem={({ item }) => (
                    <ProductCard item={item} col={3} gap={16} />
                )}
            />
        </View>

    </>);
}

export default FlashSale;