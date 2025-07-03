import Background from "@/components/Background";
import ProfileBackButton from "@/components/ProfileBackButton";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function AboutScreen() {
  return (
    <Background>
      <ProfileBackButton />
      <SafeAreaView className="flex-1">
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <Text className="text-white text-3xl font-bold mt-4 mb-16 text-center">
            About KWheels
          </Text>
          <Text className="text-white text-lg text-justify mb-6">
            KWheels is the perfect choice for all your car needs. Our platform
            makes it easy to browse through our available cars for purchase,
            with convenient filtering and sorting options. By creating an
            account and logging in, you can add your favorite cars to your
            personal garage for easy access.
            {"\n\n"}
            Not only can you buy a car from us, but you also have the option to
            rent one. The rental process is fully transparent, allowing you to
            track each step, just like when purchasing a vehicle. If you're
            considering financing, our user-friendly loan calculator helps you
            plan your monthly payments effortlessly.
            {"\n\n"}
            Have questions? Feel free to reach out, or check our FAQ section for
            helpful information. At KWheels, we provide all these services in
            one place, making your car buying and renting experience smooth and
            hassle-free.
          </Text>

          <Text className="text-white text-center text-2xl font-semibold mt-10 mb-16">
            Address & Contact Information
          </Text>

          <View className="px-0">
            <Text className="text-white text-xl mb-8">
              <MaterialIcons name="location-on" size={14} color="white" /> 4028
              Debrecen, Kassai út 26.
            </Text>
            <Text className="text-white text-xl mb-8">
              <FontAwesome5 name="calendar-day" size={14} color="white" />
              {"  "}
              Monday - Friday: 9:00 AM - 17:00
            </Text>
            <Text className="text-white text-xl mb-8">
              <Ionicons name="call-outline" size={14} /> + 36 30 569 4123
            </Text>
            <Text
              className="text-white text-xl mb-8"
              onPress={() =>
                Linking.openURL("mailto:customerservice@kwheels.fun")
              }
            >
              <Ionicons name="mail-outline" size={14} />
              {"  "}
              customerservice@kwheels.fun
            </Text>
          </View>

          <Image
            source={require("../../assets/images/google.jpg")}
            style={{
              width: "100%",
              height: 250,
              borderRadius: 12,
              paddingHorizontal: 0,
              marginTop: 10,
              marginBottom: 20,
            }}
            resizeMode="cover"
          />

          <Pressable
            onPress={() =>
              Linking.openURL(
                "https://www.google.com/maps/place/Faculty+of+Informatics,+University+of+Debrecen/@47.5422881,21.6398566,17z"
              )
            }
            className="bg-white/10 p-4 rounded-xl mb-10"
          >
            <Text className="text-white text-center text-xl font-semibold">
              Open in Google Maps
            </Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}
