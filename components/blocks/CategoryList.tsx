import useFetch from "@/hooks/useFetch";
import { resetQuery, setCategory } from "@/redux/stores/productSlice";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

const dataSample: any = [
    { name: 'Điện thoại', icon: 'phone-portrait-outline' },
    { name: 'Thời trang', icon: 'shirt-outline' },
    { name: 'Làm đẹp', icon: 'rose-outline' },
    { name: 'Gia dụng', icon: 'home-outline' },
    { name: 'Thể thao', icon: 'bicycle-outline' },
    { name: 'Sách', icon: 'book-outline' },
    { name: 'Máy tính', icon: 'laptop-outline' },
];

function CategoryList() {
    const [categories, setCategories] = React.useState<any>()
    const { data, loading, error } = useFetch('/categories');
    React.useEffect(() => {
        if (data?.data) {
            setCategories(data?.data)
        }
    }, [data])

    const dispatch = useDispatch();
    const router = useRouter()
    const handlePress = (id: any) => {
        dispatch(resetQuery())
        if (dispatch(setCategory(id))) {
            router.push('/search/result');
        }
    }

    return (
        <FlatList
            className="py-5"
            data={categories ?? dataSample}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 12, paddingTop: 10 }}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handlePress(item?.id)} className="items-center w-16 mr-4">
                    <Ionicons name={'shirt-outline'} size={28} color="#7fad39" />
                    <Text className="text-xs text-center mt-1">{item?.name}</Text>
                </TouchableOpacity>
            )}
        />
    );
}

export default CategoryList;
