import Background from "@/components/Background";
import cars from "@/data/cars";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useMemo, useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function CarPage() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const carId = parseInt(id as string);
  const car = useMemo(() => cars.find((c) => c.id === carId), [carId]);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isImageModalVisible, setImageModalVisible] = useState(false);

  if (!car) {
    return (
      <Background>
        <SafeAreaView className="flex-1 items-center justify-center">
          <Text className="text-red-500 font-bold text-3xl">Car not found</Text>
          <Pressable onPress={() => router.push(`/home/cars`)}>
            <View>
              <Text className="text-white bg-red-500 px-6 py-2 text-xl rounded-3xl mt-6">
                Go Back
              </Text>
            </View>
          </Pressable>
        </SafeAreaView>
      </Background>
    );
  }

  const images = [car.image1, car.image2, car.image3, car.image4];

  const handleNextImage = () =>
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  const handlePrevImage = () =>
    setSelectedImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <Background>
      <SafeAreaView className="flex-1">
        <View className="flex-row items-center px-0 py-4">
          <Pressable
            onPress={() => router.push("/home/cars")}
            className="bg-white/10 px-4 py-2 rounded-full"
          >
            <Text className="text-white text-lg">← Back</Text>
          </Pressable>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} className="py-2 mb-4">
          <View className="relative">
            <Pressable onPress={() => setImageModalVisible(true)}>
              <Image
                source={images[selectedImageIndex]}
                className="w-full h-64 rounded-xl mb-2"
                resizeMode="cover"
              />
            </Pressable>

            <Pressable
              onPress={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 px-2 py-1 rounded-full"
            >
              <Text className="text-white text-4xl">‹</Text>
            </Pressable>

            <Pressable
              onPress={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 px-2 py-1 rounded-full"
            >
              <Text className="text-white text-4xl">›</Text>
            </Pressable>
          </View>

          <View className="flex-row justify-between mb-4 gap-0">
            {images.map((img, idx) => (
              <Pressable key={idx} onPress={() => setSelectedImageIndex(idx)}>
                <Image
                  source={img}
                  className={` h-14 rounded-md border-4 aspect-[16/9] ${
                    selectedImageIndex === idx
                      ? "border-blue-500 "
                      : "border-white/20"
                  }`}
                  resizeMode="cover"
                />
              </Pressable>
            ))}
          </View>

          <Text className="text-white text-4xl font-bold text-center mt-4 mb-2">
            {car.brand} {car.model}
          </Text>

          <Text className="text-green-400 text-2xl text-center mb-8 font-semibold">
            {car.price.toLocaleString("de-DE")} € {car.type === "rent" ? "/ Day" : ""}
          </Text>

          <View className="bg-white/10 rounded-lg px-4 pt-4 space-y-2">
            <Detail label="Year:" value={car.year.toString()} />

            <Detail label="Fuel:" value={car.fuel} />
            <Detail
              label="Engine:"
              value={`${car.engine.toLocaleString()} cm³`}
            />
            <Detail label="Power:" value={`${car.horsepower} Hp`} />
            <Detail
              label="Mileage:"
              value={`${car.mileage.toLocaleString()} km`}
            />
            <Detail label="Body:" value={car.body} />
            <Detail label="Status:" value={car.status} />
            <Detail label="Transmission:" value={car.transmission} />

            {car.type === "buy" && (
              <View className=" py-8">
                <Text className="text-white text-center text-2xl font-bold mb-12">
                  Car Buying Process
                </Text>

                <Text className="text-white text-xl font-semibold mb-2">
                  Selecting a Car:
                </Text>
                <Text className="text-white mb-1">
                  • Browse our available cars here.
                </Text>
                <Text className="text-white mb-1">
                  • Use filtering and sorting options to find your ideal car.
                </Text>
                <Text className="text-white mb-1">
                  • View detailed car info and images.
                </Text>
                <Text className="text-white mb-10">
                  • Add favorites to your garage for quick access later.
                </Text>

                <Text className="text-white text-xl font-semibold mb-2">
                  Car Inspection & Test Drive:
                </Text>
                <Text className="text-white mb-1">
                  • Visit the dealership to see the car.
                </Text>
                <Text className="text-white mb-10">• Take a test drive.</Text>

                <Text className="text-white text-xl font-semibold mb-2">
                  Financing & Price Negotiation:
                </Text>
                <Text className="text-white mb-1">
                  • Discuss pricing with a salesperson.
                </Text>
                <Text className="text-white mb-1">
                  • Explore financing (loan/installments).
                </Text>
                <Text className="text-white mb-10">
                  • Use our loan calculator in the main page.
                </Text>

                <Text className="text-white text-xl font-semibold mb-2">
                  Purchase Agreement & Documentation:
                </Text>
                <Text className="text-white mb-1">
                  • Sign the purchase agreement.
                </Text>
                <Text className="text-white mb-10">
                  • Handle documents like registration and insurance.
                </Text>

                <Text className="text-white text-xl font-semibold mb-2">
                  Car Pickup:
                </Text>
                <Text className="text-white mb-1">
                  • Complete final payment.
                </Text>
                <Text className="text-white">• Receive your car and keys.</Text>
              </View>
            )}

            {car.type === "rent" && (
              <View className=" py-8">
                <Text className="text-white text-center text-2xl font-bold mb-12">
                  Car Rental Process
                </Text>

                <Text className="text-white font-semibold mb-2">
                  Selecting a Car:
                </Text>
                <Text className="text-white mb-1">
                  • Browse available rental cars.
                </Text>
                <Text className="text-white mb-1">
                  • Choose based on your needs.
                </Text>
                <Text className="text-white mb-10">
                  • Check availability on our contact page.
                </Text>

                <Text className="text-white font-semibold mb-2">
                  Paying the Deposit:
                </Text>
                <Text className="text-white mb-1">
                  • Pay 500 € deposit at pickup.
                </Text>
                <Text className="text-white mb-10">
                  • Pay by cash or credit card.
                </Text>

                <Text className="text-white font-semibold mb-2">
                  Picking Up the Car:
                </Text>
                <Text className="text-white mb-1">
                  • Go to the rental location.
                </Text>
                <Text className="text-white mb-10">
                  • Inspect and document car condition.
                </Text>

                <Text className="text-white font-semibold mb-2">
                  Getting Insurance:
                </Text>
                <Text className="text-white mb-1">
                  • Buy insurance before agreement.
                </Text>
                <Text className="text-white mb-10">
                  • 30 € / day insurance fee.
                </Text>

                <Text className="text-white font-semibold mb-2">
                  Returning the Car:
                </Text>
                <Text className="text-white mb-1">
                  • Return to the specified location.
                </Text>
                <Text className="text-white mb-1">• Check for damages.</Text>
                <Text className="text-white">
                  • Deposit is refunded if all is fine.
                </Text>
              </View>
            )}
          </View>
        </ScrollView>

        <View className="pb-4">
          <Pressable
            onPress={() => alert("Added to garage!")}
            className="bg-blue-600 py-4 rounded-3xl"
          >
            <Text className="text-white text-center text-xl font-semibold">
              Add to Garage
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>

      <Modal visible={isImageModalVisible} transparent={true}>
        <View className="flex-1 bg-black/90 justify-center">
          {/* X gomb a jobb felső sarokban */}
          <Pressable
            onPress={() => setImageModalVisible(false)}
            className="absolute top-14 right-4 z-50"
          >
            <Text className="text-white text-lg rounded-2xl px-4 py-2 bg-white/20">
              Close
            </Text>
          </Pressable>

          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={(e) => {
              const index = Math.round(
                e.nativeEvent.contentOffset.x /
                  e.nativeEvent.layoutMeasurement.width
              );
              setSelectedImageIndex(index);
            }}
            scrollEventThrottle={16}
          >
            {images.map((img, idx) => (
              <View
                key={idx}
                className="w-screen h-full justify-center items-center"
              >
                <Image
                  source={img}
                  className="w-full h-full"
                  resizeMode="contain"
                />
              </View>
            ))}
          </ScrollView>

          {/* Kép számláló a bal alsó sarokban */}
          <View className="absolute bottom-1/4 left-[47%]">
            <Text className="text-white font-bold text-xl">
              {selectedImageIndex + 1}/{images.length}
            </Text>
          </View>
        </View>
      </Modal>
    </Background>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <View className="flex-row justify-between border-b border-white/20 pb-2 mb-4 ">
      <Text className="text-white text-xl font-semibold">{label}</Text>
      <Text className="text-white text-xl text-right">{value}</Text>
    </View>
  );
}
