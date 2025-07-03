import Background from "@/components/Background";
import ProfileBackButton from "@/components/ProfileBackButton";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

const sections = [
  {
    title: "New Car (Showroom)",
    pros: [
      "Modern technology and features",
      "Manufacturer warranty",
      "Higher reliability and lower maintenance",
      'That "new car" smell and experience',
    ],
    cons: [
      "Higher purchase price",
      "Faster depreciation in the first few years",
      "Higher insurance costs",
      "Higher taxes and registration fees",
    ],
  },
  {
    title: "Used Car",
    pros: [
      "Lower purchase price",
      "Less depreciation",
      "Wider selection of models and types",
      "More room for price negotiation",
    ],
    cons: [
      "Higher risk of hidden issues",
      "Shorter or no warranty",
      "Higher maintenance and repair costs",
      "Limited financing options",
    ],
  },
  {
    title: "Car Rental",
    pros: [
      "Regular maintenance and servicing by the rental company",
      "No depreciation worries",
      "Convenient for trips and short-term needs",
      "Opportunity to try out new models",
    ],
    cons: [
      "More expensive in the long run compared to buying",
      "Mileage limitations",
      "Security deposit required",
      "Rental costs can increase with extra features",
    ],
  },
  {
    title: "Petrol/Diesel Car",
    pros: [
      "Lower purchase price",
      "Longer range on a full tank",
      "More options available on the market",
      "Longer-lasting engines",
    ],
    cons: [
      "Higher fuel costs",
      "Higher emissions",
      "Less fuel efficiency",
      "Harder to start in cold weather",
    ],
  },
  {
    title: "Electric Car",
    pros: [
      "Instant torque and acceleration",
      "Various incentives and tax benefits",
      "Home charging options",
      "Environmentally friendly choice",
    ],
    cons: [
      "Higher purchase price",
      "Limited driving range",
      "Longer charging time",
      "Battery degradation over time",
    ],
  },
  {
    title: "Hybrid Car",
    pros: [
      "Better fuel efficiency",
      "Longer range than fully electric cars",
      "Lower fuel costs in city driving",
      "More eco-friendly than traditional cars",
    ],
    cons: [
      "Higher purchase price",
      "More complex drivetrain, potentially higher maintenance costs",
      "Battery replacement may be needed sooner",
      "Higher insurance costs",
    ],
  },
];

const CarInfoScreen = () => {
  return (
    <Background>
      <ProfileBackButton />
      <SafeAreaView className="flex-1">
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="flex-1"
        >
          <View>
            <Text className="text-3xl text-center font-bold text-white mt-4 mb-16">
              Cars We Offer
            </Text>
          </View>
          {sections.map((section, index) => (
            <View key={index} className="mb-10">
              <Text className="text-white text-center text-2xl font-semibold mb-6 underline">
                {section.title}
              </Text>
              <View className="flex-row-reverse justify-between gap-4">
                <View className="flex-1 bg-green-500/30 p-4 rounded-3xl">
                  <Text className="text-white text-center text-lg font-semibold mb-6">
                    Pros
                  </Text>
                  {section.pros.map((item, i) => (
                    <Text key={i} className="text-white text-sm mb-1">
                      • {item}
                    </Text>
                  ))}
                </View>
                <View className="flex-1 bg-red-500/20 p-4 rounded-3xl">
                  <Text className="text-white text-center text-lg font-semibold mb-6">
                    Cons
                  </Text>
                  {section.cons.map((item, i) => (
                    <Text key={i} className="text-white text-sm mb-1">
                      • {item}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
};

export default CarInfoScreen;
