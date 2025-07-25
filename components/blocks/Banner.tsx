import useFetch from '@/hooks/useFetch';
import React from 'react';
import { Dimensions, FlatList, Image } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const dataSample = [
    require('../../assets/images/banner/banner.jpg'),
    require('../../assets/images/banner/banner.jpg'),
    require('../../assets/images/banner/banner.jpg'),
];

export default function Banner() {
    const [bannerImages, setBannerImages] = React.useState<any>()
    const { data, loading, error } = useFetch('/banners?page=1');
    React.useEffect(() => {
        if (data?.data) {
            setBannerImages(data?.data)


        }
    }, [data])



    return (
        <FlatList
            horizontal
            data={bannerImages ?? dataSample}
            keyExtractor={(_, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            contentContainerStyle={{ paddingHorizontal: 0 }}
            renderItem={({ item }) => (
                <Image
                    source={bannerImages ? { uri: item.image } : item}
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
