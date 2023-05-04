import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import TabNavigator from "./TabNavigator";
export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
