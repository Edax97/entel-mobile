import React, { useCallback, useState } from "react";
import { View } from "react-native";
import { Portal, Snackbar, Text } from "react-native-paper";
import { useAuthContext } from "../../providers/AuthProvider";
import Alert from "../common/alert/Alert";
import Login from "./Login";

export default function LoginContainer() {
  const { login, loginLoading, loginError } = useAuthContext();

  return (
    <>
      <Login login={login} loginLoading={loginLoading} />
      {loginError && <Alert mssg="Datos de usuario no coinciden." />}
    </>
  );
}
