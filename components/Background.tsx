// components/Background.tsx
import { ReactNode } from "react";
import { ImageBackground, View } from "react-native";

type Props = {
  children: ReactNode;
};

export default function Background({ children }: Props) {
  return (
    <ImageBackground
      source={require("../assets/images/wall.jpg")}
      resizeMode="cover"
      className="flex-1"
    >
      <View className="flex-1 bg-black/20 px-4">{children}</View>
    </ImageBackground>
  );
}
