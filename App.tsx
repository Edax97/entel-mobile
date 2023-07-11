import "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { theme } from "./theme/theme";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerRoutes } from "./navigation/DrawerRoutes";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <DrawerRoutes />
      </NavigationContainer>
    </PaperProvider>
  );
}
