import React from "react";
import { Text, View } from "react-native";

interface FormattedPriceProps {
    price: number; // giá gốc
    salePrice?: number; // giá sau khi giảm (nếu có)
    className?: string; // className tùy chọn
}

const FormattedPrice: React.FC<FormattedPriceProps> = ({ price, salePrice, className }) => {
    const formatVND = (value: number) =>
        value.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

    const hasSale = salePrice !== undefined && salePrice < price;

    return (
        <View className={`flex gap-2 ${className}`}>
            {hasSale ? (
                <>
                    <Text className="text-orange-600 font-semibold">{formatVND(salePrice!)}</Text>
                    <Text className="text-gray-500 line-through text-xs">{formatVND(price)}</Text>
                </>
            ) : (
                <Text className="text-orange-600 font-semibold">{formatVND(price)}</Text>
            )}
        </View>
    );
};

export default FormattedPrice;
