import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";
import { useAreaDevices } from "../api-state/useAreaDevicesAPI";
import { DispositivoAPIType } from "../api/dispositivos-api";
import CardWidget from "../components/common/card/CardWidget";
import AreaDispos from "../components/escritorio/AreaDispos";
import { theme } from "../theme/theme";

const disposList: DispositivoAPIType[] = [
  {
    dis_id: 108,
    dis_mas: 5,
    dis_loc: "19",
    dis_sensor_id: "00000109",
    dis_nom: "C2_57C",
    dis_maxt: "-18.00",
    dis_mint: "-26.00",
    dis_maxh: "88.00",
    dis_minh: "45.00",
    dis_status: "activo",
    dis_last_up: "2023-03-31 21:05:00",
    loc_nom: "FRIGORIFICO 2",
    temp: -24.8,
    hum: 72.8,
    bat: 100,
  },
  {
    dis_id: 109,
    dis_mas: 5,
    dis_loc: "19",
    dis_sensor_id: "00000084",
    dis_nom: "C2_89c",
    dis_maxt: "-18.00",
    dis_mint: "-26.00",
    dis_maxh: "88.00",
    dis_minh: "45.00",
    dis_status: "activo",
    dis_last_up: "2023-03-31 20:09:17",
    loc_nom: "FRIGORIFICO 2",
    temp: -25,
    hum: 75.2,
    bat: 100,
  },
  {
    dis_id: 110,
    dis_mas: 5,
    dis_loc: "19",
    dis_sensor_id: "00000068",
    dis_nom: "C2_79C",
    dis_maxt: "-18.00",
    dis_mint: "-26.00",
    dis_maxh: "88.00",
    dis_minh: "45.00",
    dis_status: "activo",
    dis_last_up: "2023-03-31 20:09:02",
    loc_nom: "FRIGORIFICO 2",
    temp: -25,
    hum: 73.9,
    bat: 100,
  },
  {
    dis_id: 111,
    dis_mas: 5,
    dis_loc: "19",
    dis_sensor_id: "00000070",
    dis_nom: "C2_67C",
    dis_maxt: "-18.00",
    dis_mint: "-26.00",
    dis_maxh: "88.00",
    dis_minh: "45.00",
    dis_status: "activo",
    dis_last_up: "2023-03-31 20:08:45",
    loc_nom: "FRIGORIFICO 2",
    temp: -25.1,
    hum: 76.3,
    bat: 100,
  },
  {
    dis_id: 112,
    dis_mas: 5,
    dis_loc: "19",
    dis_sensor_id: "00000091",
    dis_nom: "C2puer",
    dis_maxt: "-18.00",
    dis_mint: "-26.00",
    dis_maxh: "88.00",
    dis_minh: "45.00",
    dis_status: "activo",
    dis_last_up: "2023-03-31 22:28:43",
    loc_nom: "FRIGORIFICO 2",
    temp: -24.8,
    hum: 75.6,
    bat: 100,
  },
];

export default function Escritorio() {
  const { areaList, isLoading, error } = useAreaDevices("1");

  useEffect(() => {
    console.log("Area List", areaList);
  }, [areaList]);

  return (
    <View style={styles.container}>
      <AreaDispos areaName="CAMARA 1" disposList={disposList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
