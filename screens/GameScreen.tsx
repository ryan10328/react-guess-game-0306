import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "@/components/ui/Title";
import NumberContainer from "@/components/game/NumberContainer";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { useRouter } from "expo-router";
import Card from "@/components/ui/Card";

export type GameScreenProps = {
  id: string | null;
};

const generateRandomBetween = (min: number, max: number, exclude?: number) => {
  const n = Math.floor(Math.random() * (max - min)) + min;
  if (n === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return n;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ id }: GameScreenProps) => {
  const router = useRouter();
  const initialGuess = generateRandomBetween(1, 100, parseInt(id as string));
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === parseInt(id as string)) {
      router.replace("/game-over");
    }
  }, [currentGuess]);

  const guessHandler = (direction: string) => {
    if (
      (direction === "lower" && currentGuess < parseInt(id as string)) ||
      (direction === "greater" && currentGuess > parseInt(id as string))
    ) {
      Alert.alert("Don't lie!", "You know that is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else if (direction === "greater") {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
  };

  return (
    <View style={styles.screen}>
      <Title />
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={() => guessHandler("greater")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={() => guessHandler("lower")}>-</PrimaryButton>
        </View>
      </Card>
    </View>
  );
};
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
