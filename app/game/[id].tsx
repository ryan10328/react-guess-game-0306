import React from "react";
import GameScreen from "@/screens/GameScreen";
import { useSearchParams } from "expo-router/build/hooks";

const Game = () => {
  const params = useSearchParams();
  return <GameScreen id={params.get("id")} />;
};
export default Game;
