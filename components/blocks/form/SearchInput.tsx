import { useSearch } from "@/context/SearchContext";
import { resetQuery, setKeySearch } from "@/redux/stores/productSlice";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { TextInput, View } from "react-native";
import { useDispatch } from "react-redux";

function SearchInput() {

    const router = useRouter();
    const { setQuery, query }: any = useSearch();
    const inputRef = React.useRef<TextInput>(null);
    const dispatch = useDispatch();
    React.useEffect(() => {
        setQuery('')
        const timer = setTimeout(() => {
            inputRef.current?.focus();
        }, 300); // thêm delay nhỏ để đảm bảo component đã render

        return () => clearTimeout(timer);
    }, []);

    const submitSearch = () => {
        dispatch(resetQuery())
        if (dispatch(setKeySearch({ key: 'name', value: query ?? '' }))) router.push('/search/result');
    }
    return (<View


        className="flex-row flex-1 items-center bg-white rounded-[30px] px-3 h-[5vh]"
    >
        <Ionicons name="search-outline" size={20} color="#7fad39" />
        <TextInput
            ref={inputRef}
            value={query}
            onChangeText={setQuery}
            onSubmitEditing={submitSearch}
            placeholder="Tìm sản phẩm..."
            placeholderTextColor={'#ccc'}
            className="flex-row flex-1 items-center ml-2 pb-1 text-gray-500 text-sm" />
    </View>);
}

export default SearchInput;