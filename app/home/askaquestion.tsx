import Background from "@/components/Background";
import ProfileBackButton from "@/components/ProfileBackButton";
import React, { useState } from "react";
import { Alert, Pressable, SafeAreaView, Text, TextInput } from "react-native";

export default function AskAQuestion() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert("Please fill out all fields.");
      return;
    }

    // Küldési logika később kerül beépítésre
    Alert.alert("Question sent!", "We will get back to you shortly.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Background>
      <ProfileBackButton />
      <SafeAreaView className="flex-1 mx-10">
        <Text className="text-white text-3xl font-bold mt-4 mb-16 text-center">
          Write to Us
        </Text>
        <TextInput
          placeholder="Name..."
          placeholderTextColor="#ccc"
          className="bg-white/10 text-white text-lg p-6 rounded-xl mb-8"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />

        <TextInput
          placeholder="Email..."
          placeholderTextColor="#ccc"
          className="bg-white/10 text-white text-lg p-6 rounded-xl mb-8"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Your Question..."
          placeholderTextColor="#ccc"
          className="bg-white/10 text-white text-lg px-6 py-24 rounded-xl mb-8"
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={6}
          textAlignVertical="top"
        />

        <Pressable
          className="bg-green-500 py-4 rounded-3xl mb-6"
          onPress={handleSubmit}
        >
          <Text className="text-white text-center font-semibold text-xl">
            Send Question
          </Text>
        </Pressable>
      </SafeAreaView>
    </Background>
  );
}
