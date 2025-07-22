import { Dimensions, Image, Text, View } from "react-native";
const screenWidth = Dimensions.get('window').width;
const ProductCard = (props: any) => {
    const { item, col, gap } = props;
    const itemWidth = screenWidth / col;
    return (
        // <Link href={{
        //     pathname: "/product/[id]" as any,
        //     params: { id: item.id },
        // }} asChild>
        <View style={{ width: itemWidth - gap }} className={` mr-4 rounded-lg p-3 bg-white mb-5`}>
            <Image
                source={item.image}
                style={{ height: itemWidth - gap }}
                className="rounded-md w-full"
                resizeMode="cover"
            />
            <Text numberOfLines={1} className="text-xs mt-2">{item.name}</Text>
            <Text className="text-orange-500 font-bold">{item.price}</Text>
        </View>
        // </Link>
    );
}

export default ProductCard; 