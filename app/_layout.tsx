import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import { theme } from "../theme";
export default function RootLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorCerulean }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Taskly",
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="clockcircleo" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: "Idea",
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name="lightbulb" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
