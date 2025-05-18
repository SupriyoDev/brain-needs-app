import { Alert, Platform, ToastAndroid } from "react-native";

export function Toast(msg, msgDescription) {
  if (Platform.OS === "android") {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    Alert.alert(msg, msgDescription);
  }
}
