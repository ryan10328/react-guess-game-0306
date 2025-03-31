import { Text, StyleSheet } from "react-native";
import React from "react";

export type TitleProps = {
  children?: any;
};

const Title = ({ children }: TitleProps) => {
  return <Text style={styles.title}>{children}</Text>;
};
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: "#fff",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#fff",
    padding: 12,
  },
});
