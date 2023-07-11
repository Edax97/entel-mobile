import { createDrawerNavigator } from "@react-navigation/drawer";
import Escritorio from "../screens/Escritorio";
import Reportes from "../screens/Reportes";
import { DrawerContent } from "./DrawerContent";

const DrawerRoot = createDrawerNavigator();

export function DrawerRoutes() {
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
