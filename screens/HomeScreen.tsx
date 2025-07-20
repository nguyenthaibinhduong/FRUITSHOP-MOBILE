import Banner from '@/components/blocks/Banner';
import CategoryList from '@/components/blocks/CategoryList';
import FlashSale from '@/components/blocks/FlashSale';
import ProductList from '@/components/blocks/product/ProductList';
import Header from '@/components/layouts/Header';
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';






export default function HomeScreen() {
    return (
        <SafeAreaView className="bg-primary flex-1">
            {/* Thanh tìm kiếm */}
            <Header />
            <ScrollView className="bg-white flex-1 min-h-screen">
                {/* Banner */}
                <Banner />
                {/* Danh mục */}
                <CategoryList />
                {/* Flash Sale */}
                <FlashSale />
                <ProductList />
            </ScrollView>
        </SafeAreaView>
    );
}
