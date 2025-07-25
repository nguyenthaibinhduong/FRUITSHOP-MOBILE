import Banner from '@/components/blocks/Banner';
import CategoryList from '@/components/blocks/CategoryList';
import FlashSale from '@/components/blocks/FlashSale';
import ProductList from '@/components/blocks/product/ProductList';
import HeaderLayout from '@/components/layouts/HeaderLayout';
import { useProductList } from '@/hooks/useProductList';
import React from 'react';
import { ScrollView, View } from 'react-native';

const HomeScreen = () => {

    const [products, setProducts] = React.useState<any>()
    const { data, loading, error } = useProductList();

    React.useEffect(() => {
        if (data) {
            setProducts(data?.data);
        }
    }, [data]);
    return (
        <View className="bg-primary flex-1">
            <HeaderLayout isRedirect={true} />
            <ScrollView
                className="bg-white min-h-screen"
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
                contentContainerStyle={{ paddingBottom: 200 }}
            >
                <View>
                    <Banner />
                    <CategoryList />
                    <FlashSale />
                    <ProductList products={products} />
                </View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;
