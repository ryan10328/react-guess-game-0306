import { View, StyleSheet, Alert, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "@/components/ui/Title";
import NumberContainer from "@/components/game/NumberContainer";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { useRouter } from "expo-router";
import Card from "@/components/ui/Card";
import InstructionText from "@/components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "@/components/game/GuessLogItem";
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
  const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess]);

  useEffect(() => {
    if (currentGuess === parseInt(id as string)) {
      router.replace(`/game-over/${id}?rounds=${guessRounds.length}`);
    }
  }, [currentGuess]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
    setGuessRounds((prevGuessRound) => {
      return [...prevGuessRound, newRndNumber];
    });
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => guessHandler("greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => guessHandler("lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => {
            return (
              <GuessLogItem
                roundNumber={guessRounds.length - itemData.index}
                guess={itemData.item}
              />
            );
          }}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
};
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
