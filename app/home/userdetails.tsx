import Background from "@/components/Background";
import ProfileBackButton from "@/components/ProfileBackButton";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
    Image,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UserDetailsScreen() {
  const [editing, setEditing] = useState(false);
  const [firstName, setFirstName] = useState("Wilhelm");
  const [lastName, setLastName] = useState("Kogler");
  const [email, setEmail] = useState("contact@wilhelmkogler.com");
  const [imageUri, setImageUri] = useState<string | null>(null);

  const toggleEdit = () => setEditing((prev) => !prev);

  const saveChanges = () => {
    console.log("Saved", { firstName, lastName, email, imageUri });
    setEditing(false);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <Background>
      <ProfileBackButton />
      <SafeAreaView className="flex-1">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 0 }}
        >
          <Text className="text-white text-3xl font-bold mt-4 mb-10 text-center">
            My Details
          </Text>

          <View className="items-center mb-8">
            <Pressable onPress={editing ? pickImage : undefined}>
              <Image
                source={
                  imageUri
                    ? { uri: imageUri }
                    : require("@/assets/images/cv.png")
                }
                className="w-32 h-32 rounded-full border-2 border-white"
              />
              {editing && (
                <Text className="text-white text-sm text-center mt-2">
                  Tap to change photo
                </Text>
              )}
            </Pressable>
          </View>

          <Text className="text-white text-lg mb-1 ml-2">First Name:</Text>
          <TextInput
            value={firstName}
            onChangeText={setFirstName}
            editable={editing}
            className={`p-4 rounded-lg mb-4 mx-2 ${
              editing ? "bg-white/10 text-white" : "bg-white/5 text-gray-300"
            }`}
          />

          <Text className="text-white text-lg mb-1 ml-2">Last Name:</Text>
          <TextInput
            value={lastName}
            onChangeText={setLastName}
            editable={editing}
            className={`p-4 rounded-lg mb-4 mx-2 ${
              editing ? "bg-white/10 text-white" : "bg-white/5 text-gray-300"
            }`}
          />

          <Text className="text-white text-lg mb-1 ml-2">Email:</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            editable={editing}
            keyboardType="email-address"
            autoCapitalize="none"
            className={`p-4 rounded-lg mb-6 mx-2 ${
              editing ? "bg-white/10 text-white" : "bg-white/5 text-gray-300"
            }`}
          />
          <Text className="text-white text-lg mb-1 ml-2">Password:</Text>

          <TextInput
            value={"********"}
            onChangeText={setEmail}
            editable={editing}
            keyboardType="email-address"
            autoCapitalize="none"
            className={`p-4 rounded-lg mb-6 mx-2 ${
              editing ? "bg-white/10 text-white" : "bg-white/5 text-gray-300"
            }`}
          />

          <View className="flex-row justify-between">
            <Pressable
              onPress={editing ? saveChanges : toggleEdit}
              className={`w-[45%] py-4 rounded-lg mb-4 mx-2 ${
                editing ? "bg-green-600" : "bg-red-500/80"
              }`}
            >
              <Text className="text-white text-lg text-center font-semibold">
                {editing ? "Save" : "Forgot Password"}
              </Text>
            </Pressable>

            <Pressable
              onPress={editing ? saveChanges : toggleEdit}
              className={`w-[45%] py-4 rounded-lg mb-4 mx-2 ${
                editing ? "bg-green-600" : "bg-blue-600"
              }`}
            >
              <Text className="text-white text-lg text-center font-semibold">
                {editing ? "Save" : "Edit Details"}
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}
