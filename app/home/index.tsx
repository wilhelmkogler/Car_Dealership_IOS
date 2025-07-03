import Background from "@/components/Background";
import cars from "@/data/cars";
import garage from "@/data/garage";
import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  const featuredCars = [...cars]
    .filter((car) => car.type === "buy")
    .sort((a, b) => b.price - a.price)
    .slice(0, 5);

  const rentCars = cars.filter((car) => car.type === "rent").slice(0, 5);

  return (
    <Background>
      <ScrollView className="flex-1 pt-10" showsVerticalScrollIndicator={false}>
        <View className="flex-row justify-between items-center mt-4 mb-10">
          <Text className="text-white text-3xl font-bold text-center">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </Text>
          <Pressable
            onPress={() => router.push("/home/profile")}
            className="rounded-full"
          >
            <Image
              source={require("@/assets/images/cv.png")}
              className="w-12 h-12 rounded-full border-2 border-white"
            />
          </Pressable>
        </View>

         {/* Top Brands */}

        <View className="flex-row flex-wrap justify-between gap-4 mb-4">
          <Text className="text-white text-2xl font-semibold">
            Most Popular Car Brands
          </Text>

          <Pressable
            onPress={() => router.push("/home/cars?brand=Audi")}
            className="bg-white/10 rounded-xl w-[48%] items-center py-4"
          >
            <Image
              source={require("@/assets/images/brands/audi.png")}
              className="w-16 h-16 mb-2"
              resizeMode="contain"
            />
            <Text className="text-white text-lg font-medium">Audi</Text>
          </Pressable>

          <Pressable
            onPress={() => router.push("/home/cars?brand=Mercedes")}
            className="bg-white/10 rounded-xl w-[48%] items-center py-4"
          >
            <Image
              source={require("@/assets/images/brands/mercedes.png")}
              className="w-16 h-16 mb-2"
              resizeMode="contain"
            />
            <Text className="text-white text-lg font-medium">Mercedes</Text>
          </Pressable>

          <Pressable
            onPress={() => router.push("/home/cars?brand=McLaren")}
            className="bg-white/10 rounded-xl w-[48%] items-center py-4"
          >
            <Image
              source={require("@/assets/images/brands/mclaren.png")}
              className="w-16 h-16 mb-2"
              resizeMode="contain"
            />
            <Text className="text-white text-lg font-medium">McLaren</Text>
          </Pressable>

          <Pressable
            onPress={() => router.push("/home/cars?brand=Tesla")}
            className="bg-white/10 rounded-xl w-[48%] items-center py-4"
          >
            <Image
              source={require("@/assets/images/brands/tesla.png")}
              className="w-16 h-16 mb-2"
              resizeMode="contain"
            />
            <Text className="text-white text-lg font-medium">Tesla</Text>
          </Pressable>
        </View>

        <Pressable
          onPress={() => router.push("/home/cars")}
          className="bg-blue-600 py-3 rounded-xl mb-10"
        >
          <Text className="text-white text-center text-lg font-semibold">
            Check Out More Brands
          </Text>
        </Pressable>

        {/*Cars to Buy*/}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-white text-2xl font-semibold">
            Cars Available to Buy
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-4"
        >
          {featuredCars.map((car) => (
            <Pressable
              key={car.id}
              onPress={() => router.push(`/home/carpage?id=${car.id}`)}
              className="bg-white/10 rounded-xl overflow-hidden mr-4 w-72"
            >
              <View className="w-full aspect-[16/9] bg-black">
                <Image
                  source={car.image1}
                  className="w-full h-full"
                  resizeMode="cover"
                />
                <View className="absolute bottom-0 w-full bg-black/50 px-4 py-2 flex-row justify-center items-center">
                  <Text className="text-white text-sm">
                    {car.year} {car.brand} {car.model}
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>

        <Pressable
          onPress={() => router.push("/home/cars")}
          className="bg-blue-600 py-3 rounded-xl mb-10"
        >
          <Text className="text-white text-center text-lg font-semibold">
            Browse Available Cars
          </Text>
        </Pressable>

        

        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-white text-2xl font-semibold">
            Top Rental Cars
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-4"
        >
          {rentCars.map((car) => (
            <Pressable
              key={car.id}
              onPress={() => router.push(`/home/carpage?id=${car.id}`)}
              className="bg-white/10 rounded-xl overflow-hidden mr-4 w-72"
            >
              <View className="w-full aspect-[16/9] bg-black">
                <Image
                  source={car.image1}
                  className="w-full h-full"
                  resizeMode="cover"
                />
                <View className="absolute bottom-0 w-full bg-black/50 px-4 py-2 flex-row justify-center items-center">
                  <Text className="text-white text-sm">
                    {car.year} {car.brand} {car.model}
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>

        <Pressable
          onPress={() => router.push("/home/cars")}
          className="bg-blue-600 py-3 rounded-xl mb-10"
        >
          <Text className="text-white text-center text-lg font-semibold">
            Show All Rental Cars
          </Text>
        </Pressable>

       
{/* Why KWheels */}
        <View>
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-white text-2xl font-semibold">
              Why Choose KWheels?
            </Text>

            <Pressable
              onPress={() => router.push("/home/about")}
              className="bg-white/20 px-4 py-2 rounded-2xl"
            >
              <Text className="text-white text-center text-md font-semibold">
                Learn More
              </Text>
            </Pressable>
          </View>

          <Text className="text-white text-sm leading-7 text-justify bg-white/10 p-4 mb-4 rounded-2xl">
            KWheels is the perfect choice for all your car needs. Our platform
            makes it easy to browse through our available cars for purchase,
            with convenient filtering and sorting options.{"\n\n"}
            If you're considering financing, our user-friendly loan calculator
            helps you plan your monthly payments effortlessly.
          </Text>
        </View>
        <Pressable
          onPress={() => router.push("/home/calculator")}
          className="bg-blue-600 py-3 rounded-xl mb-10"
        >
          <Text className="text-white text-center text-lg font-semibold">
            Use Loan Calculator
          </Text>
        </Pressable>


         {/* --- Garage Section --- */}
        <View className="flex-row mb-4">
          <Text className="text-white text-2xl font-semibold">
            My Garage ({garage.length})
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-4"
        >
          {garage.map((car) => (
            <Pressable
              key={car.id}
              onPress={() => router.push(`/home/carpage?id=${car.id}`)}
              className="bg-white/10 rounded-xl overflow-hidden mr-4 w-72"
            >
              <View className="w-full aspect-[16/9] bg-black">
                <Image
                  source={car.image1}
                  className="w-full h-full"
                  resizeMode="cover"
                />
                <View className="absolute bottom-0 w-full bg-black/50 px-4 py-2 flex-row justify-center items-center">
                  <Text className="text-white text-sm">
                    {car.year} {car.brand} {car.model}
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>

        <Pressable
          onPress={() => router.push("/home/garage")}
          className="bg-blue-600 py-3 rounded-xl mb-10"
        >
          <Text className="text-white text-center text-lg font-semibold">
            See Your Favorite Cars
          </Text>
        </Pressable>

          {/* FAQ Highlights */}
        <Text className="text-white text-2xl font-semibold mb-4 ">
          Frequently Asked Questions
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-4"
        >
          {[
            {
              question: "What payment methods does KWheels accept?",
              answer: "We accept cash, bank transfers, and financing options.",
            },

            {
              question: "What documents are required to buy a car?",
              answer: "ID, proof of address, and financial docs for financing.",
            },
            {
              question: "Can I trade in my current car?",
              answer: "Yes, we accept trade-ins for new car purchases.",
            },
            {
              question: "How to schedule a test drive?",
              answer: "Contact us by phone or email to arrange an appointment.",
            },
          ].map((faq, index) => (
            <View
              key={index}
              className="bg-white/10 rounded-2xl w-72 mr-4 p-4 justify-between"
            >
              <Text className="text-white text-lg mb-8">{faq.question}</Text>
              <Text className="text-white text-sm text-justify leading-relaxed">
                {faq.answer}
              </Text>
            </View>
          ))}
        </ScrollView>

        <Pressable
          onPress={() => router.push("/home/faq")}
          className="bg-blue-600 py-3 rounded-xl mb-10"
        >
          <Text className="text-white text-center text-lg font-semibold">
            Explore All Questions
          </Text>
        </Pressable>


       

        <Text className="text-white text-2xl font-semibold mb-4">
          Car Buying Tips
        </Text>
        <View className="bg-white/10 p-4 rounded-2xl mb-4">
          {/* New Car */}
          <Text className="text-white text-lg font-semibold  mb-2">
            New Car (Showroom)
          </Text>
          <View className="flex-row justify-between mb-8">
            <View className="flex-1 mr-2">
              <Text className="text-green-400 font-semibold mb-1">Pros:</Text>
              <Text className="text-white text-sm">• Modern technology</Text>
              <Text className="text-white text-sm">
                • Manufacturer warranty
              </Text>
            </View>
            <View className="flex-1 ml-2">
              <Text className="text-red-400 font-semibold mb-1">Cons:</Text>
              <Text className="text-white text-sm">• Higher price</Text>
              <Text className="text-white text-sm">• Fast depreciation</Text>
            </View>
          </View>

          {/* Used Car */}
          <Text className="text-white text-lg font-semibold  mb-2">
            Used Car
          </Text>
          <View className="flex-row justify-between mb-8">
            <View className="flex-1 mr-2">
              <Text className="text-green-400 font-semibold mb-1">Pros:</Text>
              <Text className="text-white text-sm">• Lower purchase price</Text>
              <Text className="text-white text-sm">• Slower depreciation</Text>
            </View>
            <View className="flex-1 ml-2">
              <Text className="text-red-400 font-semibold mb-1">Cons:</Text>
              <Text className="text-white text-sm">• Unknown history</Text>
              <Text className="text-white text-sm">• More maintenance</Text>
            </View>
          </View>

          <Text className="text-white text-lg font-semibold  mb-2">
            Electric Car
          </Text>
          <View className="flex-row justify-between mb-4">
            <View className="flex-1 mr-2">
              <Text className="text-green-400 font-semibold mb-1">Pros:</Text>
              <Text className="text-white text-sm">
                • Home charging options
              </Text>
              <Text className="text-white text-sm">
                • Environmentally friendly choice
              </Text>
            </View>
            <View className="flex-1 ml-2">
              <Text className="text-red-400 font-semibold mb-1">Cons:</Text>
              <Text className="text-white text-sm">
                • Limited driving range
              </Text>
              <Text className="text-white text-sm">• Longer charging time</Text>
            </View>
          </View>
        </View>

        <Pressable
          onPress={() => router.push("/home/carinfo")}
          className="bg-blue-600 py-3 rounded-xl mb-10"
        >
          <Text className="text-white text-center text-lg font-semibold">
            See All Car Types
          </Text>
        </Pressable>

        
      </ScrollView>
    </Background>
  );
}
