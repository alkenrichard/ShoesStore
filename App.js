import Navigation from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";
import Detail from "./src/page/detail";
import { createStackNavigator } from "@react-navigation/stack";
import ImagePage from "./src/page/image";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Navigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="detail"
          component={Detail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="image"
          component={ImagePage}
          options={{ headerShown: false, presentation: "modal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
