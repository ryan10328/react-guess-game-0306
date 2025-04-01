import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Title from "@/components/ui/Title";
import Colors from "@/constants/colors";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { useRouter } from "expo-router";

export type GameOverScreenProps = {
  id: string | null;
  rounds?: string;
};
const GameOverScreen = ({ id, rounds }: GameOverScreenProps) => {
  const router = useRouter();
  const handleStartNewGame = () => {
    router.replace("/");
  };

  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds
        to guess the number <Text style={styles.highlight}>{id}</Text>.
      </Text>
      <PrimaryButton onPress={handleStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};
export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
