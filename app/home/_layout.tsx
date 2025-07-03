import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function HomeLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2563eb", // Tailwind: blue-600
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cars"
        options={{
          title: "Cars",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="car-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="garage"
        options={{
          title: "Garage",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="carpage"
        options={{
          href: null, // 🔒 ez eltünteti a tabok közül
        }}
      />
      <Tabs.Screen
        name="faq"
        options={{
          href: null, // 🔒 ez eltünteti a tabok közül
        }}
      />
      <Tabs.Screen
        name="carinfo"
        options={{
          href: null, // 🔒 ez eltünteti a tabok közül
        }}
      />
      <Tabs.Screen
        name="calculator"
        options={{
          href: null, // 🔒 ez eltünteti a tabok közül
        }}
      />
      <Tabs.Screen
        name="askaquestion"
        options={{
          href: null, // 🔒 ez eltünteti a tabok közül
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          href: null, // 🔒 ez eltünteti a tabok közül
        }}
      />
      <Tabs.Screen
        name="signup"
        options={{
          href: null, // 🔒 ez eltünteti a tabok közül
        }}
      />
      <Tabs.Screen
        name="userdetails"
        options={{
          href: null, // 🔒 ez eltünteti a tabok közül
        }}
      />
    </Tabs>
  );
}
