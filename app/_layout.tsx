import { AuthProvider } from "@/context/authContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "f-100": require("@/assets/fonts/extraLight.ttf"),
    "f-200": require("@/assets/fonts/light.ttf"),
    "f-300": require("@/assets/fonts/regular.ttf"),
    "f-400": require("@/assets/fonts/medium.ttf"),
    "f-500": require("@/assets/fonts/bold.ttf"),
    "f-600": require("@/assets/fonts/extraBold.ttf"),
  });
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }} />;
      </AuthProvider>
    </SafeAreaProvider>
  );
}
