import React from "react";
import { StyleSheet, View } from "react-native";
import LoginContainer from "../components/auth/LoginContainer";
import { theme } from "../theme/theme";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <LoginContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
    color: theme.colors.onPrimary,
  },
});
