import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

function FAQCard({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <View className="bg-white/10 rounded-2xl w-72 mr-4 p-4">
      <Pressable
        onPress={() => setOpen(!open)}
        className="flex-row justify-between items-center"
      >
        <Text className="text-white font-semibold text-base flex-1 mr-2">
          {question}
        </Text>
        <Ionicons
          name={open ? "chevron-up-outline" : "chevron-down-outline"}
          size={20}
          color="white"
        />
      </Pressable>
      {open && (
        <Text className="text-white text-sm mt-3 leading-relaxed">
          {answer}
        </Text>
      )}
    </View>
  );
}

export default FAQCard;
