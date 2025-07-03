import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileBackButton() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{ position: "absolute", top: 10, left: 20, zIndex: 10 }}
    >
      <Pressable
        onPress={() => router.push("/home/profile")}
        className="px-4 py-2 bg-red-500/50 rounded-full"
      >
        <Text className="text-white text-lg">←</Text>
      </Pressable>
    </SafeAreaView>
  );
}
