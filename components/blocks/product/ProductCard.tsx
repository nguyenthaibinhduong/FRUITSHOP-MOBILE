import { Dimensions, Image, Text, View } from "react-native";
import FormattedPrice from "../price/FormatPrice";
import AddCartButton from "@/components/buttons/addCartButton";
const screenWidth = Dimensions.get('window').width;
const ProductCard = ({ item, col, gap, hasAddCart = false }: { item: any, col: any, gap: any, hasAddCart?: boolean }) => {
    const itemWidth = screenWidth / col;



    return (
        // <Link href={{
        //     pathname: "/product/[id]" as any,
        //     params: { id: item.id },
        // }} asChild>
        <View style={{ width: itemWidth - gap }} className={` mr-4 rounded-lg p-3 bg-white mb-5`}>
            <Image
                source={item?.image}
                style={{ height: itemWidth - gap }}
                className="rounded-md w-full"
                resizeMode="cover"
            />
            <Text numberOfLines={1} className="text-md mt-2 py-2">{item?.name}</Text>
            <Text className="text-sm text-gray-500">
                {item?.categories?.[0]?.name || ''}
            </Text>
            <View className="flex flex-row justify-between">
                <FormattedPrice price={item?.price} salePrice={item?.price * item?.sale_percent} />
                {hasAddCart && <AddCartButton />}


            </View>

        </View>
        // </Link>
    );
}

export default ProductCard; 