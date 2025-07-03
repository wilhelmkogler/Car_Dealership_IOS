import Background from "@/components/Background";
import { Ionicons } from "@expo/vector-icons"; // szükséges az ikonhoz

import garage from "@/data/garage";
import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GarageScreen() {
  const router = useRouter();

  return (
    <Background>
      <SafeAreaView className="flex-1 mb-[-20px] pt-6">
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-white text-3xl font-bold mt-4 mb-10 text-center">
            Garage ({garage.length})
          </Text>

          <ScrollView
            contentContainerStyle={{ gap: 32, paddingVertical: 16 }}
            showsVerticalScrollIndicator={false}
          >
            {garage.map((car) => (
              <Pressable
                key={car.id}
                onPress={() => router.push(`/home/carpage?id=${car.id}`)}
                className="bg-white/10 rounded-lg overflow-hidden"
              >
                <View className="w-full aspect-[16/9] bg-black">
                  <Image
                    source={car.image1}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                  <View className="absolute bottom-0 w-full bg-black/50 px-4 py-2 flex-row justify-between items-center">
                    <Text className="text-white text-sm">
                      {car.year} {car.brand} {car.model}
                    </Text>
                    <Text className="text-green-400 text-sm font-bold">
                      {car.price.toLocaleString("de-DE")} €{car.type === "rent" ? " / Day" : ""}
                    </Text>
                  </View>
                </View>

                {/* ÚJ szekció a típushoz és törlés ikonhoz */}
                <View className="flex-row justify-between items-center px-4 py-3 bg-black/30">
                  <Text className="text-white text-lg font-semibold capitalize">
                    Available to {car.type}
                  </Text>
                  <Pressable
                    onPress={() =>
                      alert(`Remove ${car.brand} ${car.model} from garage?`)
                    }
                  >
                    <Ionicons name="trash-outline" size={24} color="red" />
                  </Pressable>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </ScrollView>
        <View>
          <Pressable
            onPress={() => alert("All cars removed!")}
            className="bg-red-500 mt-6 py-4 rounded-3xl"
          >
            <Text className="text-white text-center text-xl font-semibold">
              Clear Garage
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Background>
  );
}
