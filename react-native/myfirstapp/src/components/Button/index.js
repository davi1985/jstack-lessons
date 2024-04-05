import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

/**
 * @param {import('react-native').PressableProps} param
 */

export function Button({ children, disabled, ...props }) {
  return (
    <View style={styles.buttonWrapper}>
      <Pressable
        disabled={disabled}
        android_ripple={{ color: "#44" }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonActive,
          disabled && styles.buttonDisabled,
        ]}
        {...props}
      >
        <Text
          style={[styles.buttonLabel, disabled && styles.buttonLabelDisabled]}
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
}
