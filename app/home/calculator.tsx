import Background from "@/components/Background";
import ProfileBackButton from "@/components/ProfileBackButton";
import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

const LoanCalculator = () => {
  const [carPrice, setCarPrice] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [downPayment, setDownPayment] = useState<number>(0);
  const [loanTerm, setLoanTerm] = useState<number>(36);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);

  const handlePercentageSelect = (percent: number) => {
    const calculated = (carPrice * percent) / 100;
    setDownPayment(calculated);
  };

  const calculateMonthlyPayment = () => {
    const loanAmount = carPrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm;

    const monthly =
      monthlyInterestRate === 0
        ? loanAmount / numberOfPayments
        : (loanAmount * monthlyInterestRate) /
          (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    setMonthlyPayment(monthly);
  };

  return (
    <Background>
      <ProfileBackButton />
      <SafeAreaView className="flex-1 mx-10">
        <Text className="text-white text-3xl font-bold mt-4 mb-16 text-center">
          Loan Calculator
        </Text>
        <View className="mb-4">
          <Text className="text-white text-xl mb-2">Car Price (€):</Text>
          <TextInput
            className="bg-white/10 text-white p-4 rounded-xl"
            keyboardType="numeric"
            value={carPrice.toString()}
            onChangeText={(text: string) => setCarPrice(Number(text))}
          />
        </View>

        <View className="mb-4">
          <Text className="text-white text-xl mb-2">Interest Rate (%):</Text>
          <TextInput
            className="bg-white/10 text-white p-4 rounded-xl"
            keyboardType="numeric"
            value={interestRate.toString()}
            onChangeText={(text: string) => setInterestRate(Number(text))}
          />
        </View>

        <View className="mb-4">
          <Text className="text-white text-xl mb-2">Down Payment (€):</Text>
          <TextInput
            className="bg-white/10 text-white p-4 rounded-xl mb-2"
            keyboardType="numeric"
            value={downPayment.toString()}
            onChangeText={(text: string) => setDownPayment(Number(text))}
          />
          <View className="flex-row justify-between gap-2">
            {[10, 20, 30].map((percent) => (
              <Pressable
                key={percent}
                onPress={() => handlePercentageSelect(percent)}
                className="bg-white/10 px-6 py-2 rounded-full"
              >
                <Text className="text-white text-md font-bold">{percent}%</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View className="my-6">
          <Text className="text-white text-xl mb-2">
            Loan Term: {loanTerm} ({loanTerm / 12} years)
          </Text>
          <Slider
            minimumValue={12}
            maximumValue={120}
            step={12}
            value={loanTerm}
            onValueChange={(value: number) => setLoanTerm(value)}
            minimumTrackTintColor="#fff"
            maximumTrackTintColor="#666"
          />
        </View>

        <Pressable
          onPress={calculateMonthlyPayment}
          className="bg-green-500 py-4 rounded-3xl mb-6"
        >
          <Text className="text-white text-center font-semibold text-xl">
            Calculate
          </Text>
        </Pressable>

        <View className="items-center">
          <Text className="text-white text-xl font-bold">Monthly Payment:</Text>
          <Text className="text-white text-3xl font-bold mt-2">
            {monthlyPayment.toFixed(0)} €
          </Text>
        </View>
      </SafeAreaView>
    </Background>
  );
};

export default LoanCalculator;
