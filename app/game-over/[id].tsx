import React from "react";
import GameOverScreen from "@/screens/GameOverScreen";
import { useLocalSearchParams } from "expo-router/build/hooks";

const Index = () => {
  const params = useLocalSearchParams<{ id: string; rounds?: string }>();
  return <GameOverScreen id={params.id} rounds={params.rounds} />;
};
export default Index;
