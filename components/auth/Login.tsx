import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { theme } from "../../theme/theme";
import Icon from "react-native-paper/src/components/Icon";
import { darkTheme } from "../../theme/dark-theme";
interface Props {
  login: (userName: string, password: string) => void;
  loginLoading: boolean;
}
export default function Login(props: Props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.rowAround}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Icon source="lock" size={40} color={theme.colors.onPrimary} />
      </View>
      <TextInput
        label="Usuario"
        theme={darkTheme}
        style={styles.input}
        value={userName}
        onChangeText={(text) => setUserName(text)}
      />
      <TextInput
        label="Password"
        secureTextEntry={isHidden}
        right={
          <TextInput.Icon
            icon={isHidden ? "eye" : "eye-off"}
            onPress={() => setIsHidden(!isHidden)}
            color={darkTheme.colors.onSecondaryContainer}
          />
        }
        theme={darkTheme}
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        mode="contained"
        buttonColor={theme.colors.info}
        onPress={() => props.login(userName, password)}
        disabled={props.loginLoading}
      >
        Ingresar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    gap: 24,
    color: theme.colors.onPrimary,
  },
  input: {
    width: "90%",
  },

  rowAround: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around",
  },
  logo: {
    height: 150 / 3,
    width: 150,
    resizeMode: "contain",
  },
});
