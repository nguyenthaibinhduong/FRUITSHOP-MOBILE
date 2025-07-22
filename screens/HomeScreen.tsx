import Banner from '@/components/blocks/Banner';
import CategoryList from '@/components/blocks/CategoryList';
import FlashSale from '@/components/blocks/FlashSale';
import ProductList from '@/components/blocks/product/ProductList';
import HeaderLayout from '@/components/layouts/HeaderLayout';
import React from 'react';
import { ScrollView, View } from 'react-native';

const HomeScreen = () => {
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
                    <ProductList />
                </View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;
