import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';

const GoBack = ({ color }: any) => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <TouchableOpacity
            onPress={handleGoBack}
            className="p-2"
            activeOpacity={0.7}
        >
            <Ionicons name="arrow-back" size={24} color={color || '#fff'} />
        </TouchableOpacity>
    );
};

export default GoBack;
