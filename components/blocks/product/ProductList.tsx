import { FlatList, Text, View } from "react-native";
import ProductCard from "./ProductCard";
import React from "react";



const dataSample: any = [
    { id: '1', name: 'Áo thun nam', price: '99.000đ', image: require('../../../assets/images/product/product-1.jpg') },
    { id: '2', name: 'Tai nghe Bluetooth', price: '129.000đ', image: require('../../../assets/images/product/product-2.jpg') },
    { id: '3', name: 'Giày Sneaker', price: '199.000đ', image: require('../../../assets/images/product/product-3.jpg') },
    { id: '4', name: 'Áo hoodie nữ', price: '149.000đ', image: require('../../../assets/images/product/product-4.jpg') },
    { id: '5', name: 'Balo thời trang', price: '179.000đ', image: require('../../../assets/images/product/product-5.jpg') },
    { id: '6', name: 'Bộ đồ ngủ', price: '89.000đ', image: require('../../../assets/images/product/product-6.jpg') },
    { id: '7', name: 'Kính mát thời trang', price: '59.000đ', image: require('../../../assets/images/product/product-7.jpg') },
    { id: '8', name: 'Túi xách nữ', price: '239.000đ', image: require('../../../assets/images/product/product-8.jpg') },
    { id: '9', name: 'Đồng hồ thể thao', price: '399.000đ', image: require('../../../assets/images/product/product-9.jpg') },
    { id: '10', name: 'Áo sơ mi nam', price: '119.000đ', image: require('../../../assets/images/product/product-10.jpg') },
    { id: '11', name: 'Tai nghe chụp tai', price: '199.000đ', image: require('../../../assets/images/product/product-11.jpg') },
    { id: '12', name: 'Dép tổ ong', price: '49.000đ', image: require('../../../assets/images/product/product-12.jpg') },
];

function ProductList(props: any) {
    const { products } = props;



    return (

        <View className="bg-secondary px-2 py-4 flex-1">
            <Text className="font-bold px-3 text-primary text-xl  my-5 ">Sản phẩm</Text>
            <FlatList
                className="w-full"
                data={products ?? dataSample}
                numColumns={2}
                keyExtractor={(item) => item.id}
                scrollEnabled={false}
                renderItem={({ item }) => (
                    <ProductCard hasAddCart={true} key={item?.id} item={item} col={2} gap={16} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>

    );
}

export default ProductList;