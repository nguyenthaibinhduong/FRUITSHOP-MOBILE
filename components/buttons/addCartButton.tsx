import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

type Props = {
    isLabel?: boolean;
    color?: string;
    onPress?: () => void;
};

const AddCartButton = ({ isLabel = false, color = '#fff' }: Props) => {
    return (
        <TouchableOpacity
            style={{
                width: 30,
                height: 30,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
            }}
            className='bg-primary'
        >
            <Ionicons name="add-outline" size={20} color={color} />
            {isLabel && (
                <Text style={{ color: color, marginLeft: 8, fontWeight: 'bold' }}>
                    Thêm
                </Text>
            )}
        </TouchableOpacity>
    );
};

export default AddCartButton;
