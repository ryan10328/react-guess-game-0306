import { StyleSheet, Text } from "react-native";

export type InstructionTextProps = {
  children?: any;
};

const InstructionText = ({ children }: InstructionTextProps) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: "#ddb52f",
    fontSize: 24,
  },
});
