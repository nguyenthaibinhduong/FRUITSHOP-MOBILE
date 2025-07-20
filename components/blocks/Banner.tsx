import { Image } from "react-native";

function Banner() {
    return (
        <Image
            source={require('../../assets/images/banner/banner.jpg')}
            className="w-full h-40 rounded-xl"
            resizeMode="cover"
        />
    );
}

export default Banner;