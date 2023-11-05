import Navigation from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";
import Detail from "./src/page/detail";

export default function App() {
  return (
    <NavigationContainer>
      {/* <Navigation /> */}
      <Detail />
    </NavigationContainer>
  );
}
