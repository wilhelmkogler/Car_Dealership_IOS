// app/index.tsx
import { router } from "expo-router";
import { useEffect } from "react";
import { Image, View } from "react-native";

export default function SplashScreen() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/home");
    }, 3000); // 3 másodperc

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-black">
      <Image
        source={require("../assets/images/splash.png")}
        className="w-full h-full"
        resizeMode="cover"
      />
    </View>
  );
}
