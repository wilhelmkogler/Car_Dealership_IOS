import Background from "@/components/Background";
import { useState } from "react";
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
} from "react-native";

export default function AuthScreen() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const toggleMode = () => {
    setMode((prev) => (prev === "login" ? "signup" : "login"));
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  const handleSubmit = () => {
    if (mode === "login") {
      // login logic
      console.log("Logging in", { email, password });
    } else {
      // signup logic
      console.log("Signing up", { firstName, lastName, email, password });
    }
  };

  return (
    <Background>
      <SafeAreaView className="flex-1">
        <ScrollView contentContainerStyle={{ paddingHorizontal: 50 }}>
          <Text className="text-white text-3xl font-bold mt-20 mb-16 text-center">
            {mode === "login" ? "Sign In" : "Create Account"}
          </Text>

          {mode === "signup" && (
            <>
              <TextInput
                placeholder="First Name"
                placeholderTextColor="#ccc"
                value={firstName}
                onChangeText={setFirstName}
                className="bg-white/10 text-white px-4 py-6 rounded-xl mb-6"
              />
              <TextInput
                placeholder="Last Name"
                placeholderTextColor="#ccc"
                value={lastName}
                onChangeText={setLastName}
                className="bg-white/10 text-white px-4 py-6 rounded-xl mb-6"
              />
            </>
          )}

          <TextInput
            placeholder="Email"
            placeholderTextColor="#ccc"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            className="bg-white/10 text-white px-4 py-6 rounded-xl mb-6"
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#ccc"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="bg-white/10 text-white px-4 py-6 rounded-xl mb-6"
          />

          <Pressable
            onPress={handleSubmit}
            className="bg-blue-600 py-4 rounded-lg mb-6"
          >
            <Text className="text-white text-lg text-center font-semibold">
              {mode === "login" ? "Enter Account" : "Create"}
            </Text>
          </Pressable>

          <Pressable onPress={toggleMode}>
            <Text className="text-white text-sm text-center">
              {mode === "login"
                ? "Don't have an account? Click Here"
                : "Already have an account? Click Here"}
            </Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}
