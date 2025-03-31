import { StyleSheet, Text } from "react-native";

export type InstructionTextProps = {
  children?: any;
  style?: any;
};

const InstructionText = ({ children, style }: InstructionTextProps) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: "#ddb52f",
    fontSize: 24,
  },
});
