import Background from "@/components/Background";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";

export default function ProfileScreen() {
  const router = useRouter();
  return (
    <Background>
      <SafeAreaView className="flex-1 justify-center items-center">
        {/* Profilkép */}
        <Image
          source={require("../../assets/images/cv.png")}
          className="w-24 h-24 rounded-full border-2 border-white mb-4"
        />

        {/* Név */}
        <Text className="text-2xl font-bold text-white mb-10">Hi, Wilhelm</Text>

        {/* Menüpontok */}
        <View className="w-full gap-4">
          <MenuItem
            icon="person-outline"
            label="My Details"
            route="/home/userdetails"
          />
          <MenuItem
            icon="car-sport-outline"
            label="Cars We Offer"
            route="/home/carinfo"
          />
          <MenuItem
            icon="calculator-outline"
            label="Loan Calculator"
            route="/home/calculator"
          />
          <MenuItem
            icon="help-circle-outline"
            label="Frequently Asked Questions"
            route="/home/faq"
          />
          <MenuItem
            icon="chatbubble-ellipses-outline"
            label="Ask a Question"
            route="/home/askaquestion"
          />
          <MenuItem
            icon="information-circle-outline"
            label="About Us"
            route="/home/about"
          />

          <MenuItem
            icon="log-out-outline"
            label="Logout"
            variant="danger"
            route="/home/signup"
          />
        </View>
      </SafeAreaView>
    </Background>
  );
}

function MenuItem({
  icon,
  label,
  route,
  variant = "default",
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  route: string;
  variant?: "default" | "danger";
}) {
  const isDanger = variant === "danger";
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(route as unknown as `/`)}
      className={`flex-row items-center justify-between px-4 py-5 rounded-lg ${
        isDanger ? "bg-red-600/80" : "bg-white/10"
      }`}
    >
      <View className="flex-row items-center">
        <Ionicons
          name={icon}
          size={22}
          color="white"
          style={{ marginRight: 12 }}
        />
        <Text className="text-white text-lg">{label}</Text>
      </View>
      <Ionicons
        name="chevron-forward-outline"
        size={20}
        color="white"
        style={{ opacity: 0.6 }}
      />
    </Pressable>
  );
}
