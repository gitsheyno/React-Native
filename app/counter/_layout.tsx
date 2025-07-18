import { Stack, Link } from "expo-router";
import { Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { theme } from "../../theme";
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Counter",
          headerRight: () => {
            return (
              <Link href="/counter/history" asChild>
                <Pressable hitSlop={20}>
                  <MaterialIcons
                    name="history"
                    size={26}
                    color={theme.colorGrey}
                  />
                </Pressable>
              </Link>
            );
          },
        }}
      />
      <Stack.Screen name="history" options={{ title: "History" }} />
    </Stack>
  );
}
