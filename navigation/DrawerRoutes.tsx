import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { NavigationProps } from "../App";
import { useAuthContext } from "../providers/AuthProvider";
import Escritorio from "../screens/Escritorio";
import Reportes from "../screens/Reportes";
import { DrawerContent } from "./DrawerContent";

const DrawerRoot = createDrawerNavigator();

export function DrawerRoutes() {
  const navigation = useNavigation<NavigationProps>();
  const { isLogged } = useAuthContext();

  useEffect(() => {
    if (!isLogged) {
      //navigation.navigate("Login");
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

  return (
    <DrawerRoot.Navigator drawerContent={DrawerContent}>
      <DrawerRoot.Screen name="Escritorio" component={Escritorio} />
      <DrawerRoot.Screen name="Reportes" component={Reportes} />
      <DrawerRoot.Screen name="Graficos" component={Escritorio} />
      <DrawerRoot.Screen name="Alertas" component={Reportes} />
      <DrawerRoot.Screen name="Configuracion" component={Reportes} />
    </DrawerRoot.Navigator>
  );
}
