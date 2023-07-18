import "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { theme } from "./theme/theme";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerRoutes } from "./navigation/DrawerRoutes";
import AuthProvider from "./providers/AuthProvider";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "./screens/SignIn";

export type StackParamList = {
  Login: undefined;
  Start: undefined;
};
export type NavigationProps = {
  navigate: (screen?: string) => void;
  goBack: () => void;
};
const Stack = createStackNavigator<StackParamList>();
export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Start"
          >
            <Stack.Screen name="Login" component={SignIn} />
            <Stack.Screen name="Start" component={DrawerRoutes} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </PaperProvider>
  );
}
