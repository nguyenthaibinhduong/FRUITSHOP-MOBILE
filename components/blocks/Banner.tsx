import { Dimensions, FlatList, Image } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const bannerImages = [
    require('../../assets/images/banner/banner.jpg'),
    require('../../assets/images/banner/banner.jpg'),
    require('../../assets/images/banner/banner.jpg'),
];

export default function Banner() {
    return (
        <FlatList
            horizontal
            data={bannerImages}
            keyExtractor={(_, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            contentContainerStyle={{ paddingHorizontal: 8 }}
            renderItem={({ item }) => (
                <Image
                    source={item}
                    style={{
                        width: screenWidth,
                        height: screenWidth * 0.6,


                    }}
                    resizeMode="cover"
                />
            )}
        />
    );
}
