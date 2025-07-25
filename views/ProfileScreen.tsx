import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const menuItems: any = [
    { icon: "person-outline", label: "Thông tin cá nhân", route: "/profile/info" },
    { icon: "cube-outline", label: "Thông tin đơn hàng", route: "/profile/orders" },
    { icon: "heart-outline", label: "Sản phẩm yêu thích", route: "/profile/favorites" },
    { icon: "key-outline", label: "Đổi mật khẩu", route: "/profile/change-password" },
    { icon: "settings-outline", label: "Cài đặt", route: "/profile/settings" },
    { icon: "document-text-outline", label: "Chính sách", route: "/profile/policy" },
];

const ProfileScreen = () => {
    const router = useRouter();

    const handleLogout = () => {
        // TODO: Xử lý đăng xuất ở đây
        console.log("Logging out...");
    };

    return (
        <ScrollView className="flex-1 ">
            <View className="items-center pt-10 pb-5 bg-primary">
                <Image
                    source={{ uri: "https://i.pravatar.cc/150?img=3" }}
                    className="w-24 h-24 rounded-full"
                />
                <Text className="mt-4 text-lg text-white font-semibold">Nguyễn Văn A</Text>
                <Text className="text-white">nguyenvana@gmail.com</Text>
            </View>

            <View className="bg-white border-t border-gray-200">
                {menuItems.map((item: any, index: number) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => router.push(item.route)}
                        className="flex-row items-center px-5 py-4 border-b border-gray-100"
                    >
                        <Ionicons name={item.icon as any} size={22} color="#333" />
                        <Text className="ml-4 text-base text-gray-800">{item.label}</Text>
                    </TouchableOpacity>
                ))}

                {/* Nút Đăng xuất */}
                <TouchableOpacity
                    onPress={handleLogout}
                    className="flex-row items-center px-5 py-4 border-b border-gray-100"
                >
                    <Ionicons name="log-out-outline" size={22} color="#333" />
                    <Text className="ml-4 text-base text-gray-800">Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default ProfileScreen;
