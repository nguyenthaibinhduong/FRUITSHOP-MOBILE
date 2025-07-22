import CategoryList from "@/components/blocks/CategoryList";
import ProductList from "@/components/blocks/product/ProductList";
import HeaderLayout from "@/components/layouts/HeaderLayout";
import FilterModal from "@/components/modals/FilterModal";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

function ProductsScreen() {
    const [isFilterVisible, setFilterVisible] = React.useState<boolean>(false);

    const openFilter = () => setFilterVisible(!isFilterVisible);
    const closeFilter = () => setFilterVisible(false);

    useFocusEffect(
        useCallback(() => {
            return () => {
                setFilterVisible(false);
            };
        }, [])
    );

    return (
        <>
            <View className="bg-primary flex-1">
                <HeaderLayout isRedirect={true} hasComeBack={true}>
                    <TouchableOpacity
                        onPress={openFilter}
                        className="p-2 rounded-full"
                    >
                        <Ionicons name="funnel-outline" size={25} color="white" />

                    </TouchableOpacity>

                </HeaderLayout>

                <ScrollView
                    className="bg-white min-h-screen"
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    contentContainerStyle={{ paddingBottom: 200 }}
                >
                    <CategoryList />
                    <ProductList />
                    <FilterModal visible={isFilterVisible} onClose={closeFilter} topOffset={0} />
                </ScrollView>

            </View>
        </>
    );
}

export default ProductsScreen;