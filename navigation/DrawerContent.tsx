import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { Image, StyleSheet } from "react-native";
import { theme } from "../theme/theme";
import { Drawer } from "react-native-paper";
import { ThemeProp } from "react-native-paper/lib/typescript/src/types";

export function DrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props} style={styles.drawer}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Drawer.Section>
        {props.state.routes.map((r, j) => {
          const isActive = j === props.state.index;
          return (
            <Drawer.Item
              key={j}
              label={r.name}
              active={isActive}
              onPress={() => props.navigation.navigate(r.name)}
              theme={itemTheme}
              icon={itemsIcon[r.name]}
            />
          );
        })}
        <Drawer.Item
          label="Salir"
          onPress={() => {}}
          theme={itemTheme}
          icon="logout"
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: theme.colors.primary,
  },
  logo: {
    marginTop: 16,
    marginBottom: 24,
    marginLeft: 24,
    height: 48,
    width: (48 * 9) / 3,
    resizeMode: "contain",
  },
});

const itemTheme: ThemeProp = {
  colors: {
    onSurfaceVariant: "rgba(255,255,255,0.6)",
    secondaryContainer: "rgba(0,0,0,0.2)",
    onSecondaryContainer: "rgb(255,255,255)",
  },
};

interface ItemsIconType {
  [key: string]: string;
}
const itemsIcon: ItemsIconType = {
  Escritorio: "home",
  Reportes: "file-document",
  Graficos: "chart-line",
  Alertas: "alert-outline",
  Configuracion: "cog",
};
