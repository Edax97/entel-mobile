import React, { useMemo } from "react";
import { IconButton, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { DispositivoAPIType } from "../../api/dispositivos-api";
import CardWidget from "../common/card/CardWidget";
import { theme } from "../../theme/theme";
import Icon from "react-native-paper/src/components/Icon";

interface Props {
  areaName: string;
  disposList: DispositivoAPIType[];
}
export default function AreaDispos(props: Props) {
  const tempPromedio = useMemo(
    () =>
      props.disposList.reduce<number>((temp, dev) => temp + +dev.temp, 0) /
      props.disposList.length,
    [props.disposList]
  );
  const humePromedio = useMemo(
    () =>
      props.disposList.reduce<number>((temp, dev) => temp + +dev.hum, 0) /
      props.disposList.length,
    [props.disposList]
  );
  return (
    <CardWidget title="CAMARA 2">
      <View style={styles.promedioContainer}>
        <View>
          <Text variant="bodyLarge" style={{ color: theme.colors.secondary }}>
            Promedios
          </Text>
          <View style={styles.promedioIcons}>
            <Text variant="titleLarge">{tempPromedio.toFixed(1)}°C</Text>
            <Icon source="thermometer" size={38} color={theme.colors.danger} />
            <Text variant="titleLarge" style={{ marginStart: 12 }}>
              {humePromedio.toFixed(1)}%
            </Text>
            <Icon source="water" size={38} color={theme.colors.info} />
          </View>
        </View>
        <IconButton
          icon={"chart-line"}
          mode="contained"
          size={28}
          style={{ marginStart: "auto" }}
          onPress={() => {}}
        />
      </View>
    </CardWidget>
  );
}
const styles = StyleSheet.create({
  promedioContainer: {
    paddingStart: 8,
    flexDirection: "row",
    paddingTop: 16,
    alignItems: "flex-end",
  },
  promedioIcons: {
    flexDirection: "row",
    gap: 0,
    alignItems: "center",
  },
});
