import { Stack } from "expo-router";
import React from "react";
import { LogBox, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
    </GestureHandlerRootView>
  );
}
