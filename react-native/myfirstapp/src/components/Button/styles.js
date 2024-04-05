import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonWrapper: {
    overflow: "hidden",
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#222",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonActive: {
    opacity: Platform.OS === "ios" ? 0.75 : 1,
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonLabel: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonLabelDisabled: {
    color: "#888",
  },
});
