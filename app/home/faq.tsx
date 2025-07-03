import Background from "@/components/Background";
import ProfileBackButton from "@/components/ProfileBackButton";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  LayoutAnimation,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  UIManager,
  View,
} from "react-native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function FAQScreen() {
  const faqs = [
    {
      question: "What payment methods does KWheels accept?",
      answer: "We accept cash, bank transfers, and financing options for our customers.",
    },
    {
      question: "What type of warranty do I get when purchasing a car?",
      answer:
        "All new cars come with a manufacturer warranty, which covers a specific period or mileage. Additional warranty options are available for used cars.",
    },
    {
      question: "Can I trade in my current car when buying a new one?",
      answer:
        "Yes, we accept trade-ins for new car purchases. Please contact us for details.",
    },
    {
      question: "What documents do I need to buy a car?",
      answer:
        "You will need an identification document, proof of address, and for financing applications, additional financial documents may be required.",
    },
    {
      question: "What documents will I receive when purchasing a car?",
      answer:
        "You will receive an invoice, a purchase contract, and all necessary paperwork.",
    },
    {
      question: "How can I schedule a test drive?",
      answer:
        "Contact us by phone or email, and we will be happy to arrange a test drive appointment.",
    },
    {
      question: "What type of insurance should I get for my car?",
      answer:
        "The recommended insurance depends on the type, value, and use of your car. Generally, we suggest full coverage or third-party liability insurance.",
    },
    {
      question: "Can I order additional accessories for my car?",
      answer:
        "Yes, we offer a wide range of extra accessories, such as roof racks, tow bars, navigation systems, and more.",
    },
    {
      question: "What should I do if I experience an issue with my car during the warranty period?",
      answer:
        "Please contact us as soon as possible so we can assist you in resolving the issue.",
    },
    {
      question: "Can I take a rental car abroad?",
      answer:
        "Yes, you are allowed to use the rental car abroad without any restrictions.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Background>
      <ProfileBackButton />
      <SafeAreaView className="flex-1 pt-10">
        <Text className="text-white text-3xl font-bold mt-4 mb-16 text-center">
          FAQ's
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {faqs.map((item, index) => (
            <View key={index} className="mb-8">
              <Pressable
                onPress={() => toggleFAQ(index)}
                className="flex-row items-center justify-between bg-white/10 px-4 py-4 rounded-3xl"
              >
                <Text className="text-white text-lg font-semibold flex-1">
                  {item.question}
                </Text>
                <Ionicons
                  name={openIndex === index ? "chevron-up-outline" : "chevron-down-outline"}
                  size={20}
                  color="white"
                />
              </Pressable>
              {openIndex === index && (
                <View className=" px-4 py-4 rounded-b-lg">
                  <Text className="text-white text-sm leading-relaxed text-justify">
                    {item.answer}
                  </Text>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}