import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import './global.css';

const visibleTabs = [
  { name: "index", title: "Trang chủ", icon: "home-outline" },
  { name: "products/index", title: "Sản phẩm", icon: "pricetags-outline" },
  { name: "cart", title: "Giỏ hàng", icon: "cart-outline" },
  { name: "orders", title: "Đơn hàng", icon: "clipboard-outline" },
  { name: "profile", title: "Tôi", icon: "person-outline" },
];

const hiddenTabs = ["auth/login", "auth/register"];

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#7fad39',         // màu chủ đạo khi active
        tabBarInactiveTintColor: '#666',          // màu khi không active
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          fontFamily: 'System',                  // hoặc bạn có thể dùng font tuỳ chỉnh
        },
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#eee',
        },
      }}
    >
      {visibleTabs.map(({ name, title, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarIcon: ({ color, size, focused }) => {
              const iconName: any = focused
                ? icon.replace('-outline', '') // Bỏ -outline để thành icon fill
                : icon;

              return <Ionicons name={iconName} size={size} color={color} />
            },
          }}
        />
      ))}
      {hiddenTabs.map((name) => (
        <Tabs.Screen key={name} name={name} options={{ href: null }} />
      ))}
    </Tabs>
  );
}
