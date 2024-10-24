import { Stack } from "expo-router";
import { LogBox, StatusBar } from "react-native";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerTitle: "TextOverflow",
            headerLeft: () => null,
            headerShown: false,
          }}
        />

        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}
