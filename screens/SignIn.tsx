import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationProps } from "../App";
import LoginContainer from "../components/auth/LoginContainer";
import { useAuthContext } from "../providers/AuthProvider";
import { theme } from "../theme/theme";
export default function SignIn() {
  const navigation = useNavigation<NavigationProps>();
  const { isLogged } = useAuthContext();

  useEffect(() => {
    if (isLogged) {
      navigation.navigate("Start");
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

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
