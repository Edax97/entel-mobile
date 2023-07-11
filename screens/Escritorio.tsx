import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useAreaDevices } from "../api-state/useAreaDevicesAPI";

export default function Escritorio() {
  const { areaList, isLoading, error } = useAreaDevices("1");

  useEffect(() => {
    console.log("Area List", areaList);
  }, [areaList]);

  return (
    <View style={styles.container}>
      <Text>Escritorio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
