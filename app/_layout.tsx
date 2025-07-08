import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Taskly",
          headerStyle: { backgroundColor: "#1a759f" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
    </Stack>
  );
}
