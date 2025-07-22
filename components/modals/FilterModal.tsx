import React, { useEffect, useRef } from "react";
import { Text, TouchableOpacity, View, Animated, Dimensions } from "react-native";

interface FilterModalProps {
    visible: boolean;
    onClose: () => void;
    topOffset?: number; // vị trí bắt đầu top (thường là dưới header)
}

const FilterModal: React.FC<FilterModalProps> = ({ visible, onClose, topOffset = 60 }) => {
    const slideAnim = useRef(new Animated.Value(-300)).current;

    useEffect(() => {
        if (visible) {
            Animated.timing(slideAnim, {
                toValue: topOffset,
                duration: 300,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(slideAnim, {
                toValue: -300,
                duration: 200,
                useNativeDriver: false,
            }).start();
        }
    }, [visible]);

    return (
        visible && (
            <TouchableOpacity
                activeOpacity={1}
                onPress={onClose}
                className="absolute top-0 left-0 right-0 h-full z-50 bg-transparent"
            >
                {/* Màn che */}
                <View className="absolute top-0 left-0 right-0 bottom-0 bg-black/30" />

                {/* Modal xổ từ topOffset xuống */}
                <Animated.View
                    style={{ top: slideAnim }}
                    className="absolute left-0 right-0 bg-white p-4 rounded-b-2xl z-50"
                >
                    <Text className="text-lg font-semibold mb-2">Bộ lọc sản phẩm</Text>

                    <TouchableOpacity className="py-2">
                        <Text>Lọc theo giá</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="py-2">
                        <Text>Lọc theo danh mục</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="py-2">
                        <Text>Lọc theo đánh giá</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onClose} className="mt-4 bg-primary px-4 py-2 rounded-lg self-end">
                        <Text className="text-white">Đóng</Text>
                    </TouchableOpacity>
                </Animated.View>
            </TouchableOpacity>
        )
    );
};

export default FilterModal;
