import { Platform } from "react-native";
import { Account, Client, Databases } from "react-native-appwrite";
const config = {
  apiEndpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  db: process.env.EXPO_PUBLIC_APPWRITE_DB_ID,
  col: {
    users: process.env.EXPO_PUBLIC_APPWRITE_COL_USERS_ID,
  },

  androidBundleId: process.env.EXPO_PUBLIC_ANDROID_BUNDLE_ID,
  iosBundleId: process.env.EXPO_PUBLIC_IOS_BUNDLE_ID,
};

const client = new Client()
  .setEndpoint(config.apiEndpoint)
  .setProject(config.projectId);

switch (Platform.OS) {
  case "ios":
    client.setPlatform(config.iosBundleId);
    break;
  case "android":
    client.setPlatform(config.androidBundleId);
    break;
}

export const account = new Account(client);
const database = new Databases(client);

export { client, config, database };
