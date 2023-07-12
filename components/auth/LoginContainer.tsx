import React, { useCallback, useState } from "react";
import { View } from "react-native";
import Login from "./Login";

export default function LoginContainer() {
  const [loginLoading] = useState(false);
  const login = useCallback((userName: string, password: string) => {
    console.log(userName, password);
  }, []);
  return <Login login={login} loginLoading={loginLoading} />;
}
