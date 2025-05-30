import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../../assets/icons";
import BackButton from "../../components/backButton";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { hp, wp } from "../../constant/helpers";
import theme from "../../constant/theme";
import { useAuth } from "../../context/authContext";

const Signup = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const nameRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const OnSubmit = async () => {
    if (!emailRef.current || !passwordRef.current || !nameRef.current) {
      Alert.alert("Sign Up", "Please fill all fields");
      return;
    }

    const name = nameRef.current.trim();
    const email = emailRef.current.trim();
    const password = passwordRef.current.trim();

    setLoading(true);
    // appwrite signup

    const { success, error } = await register({ name, email, password });

    setLoading(false);

    if (!success) {
      Alert.alert("Signup", error);
      return;
    }

    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        minHeight: "100%",
        width: "100%",
        marginTop: 10,
      }}
    >
      <ScrollView style={{ Height: "100%", width: "100%" }}>
        <View style={styles.container}>
          <BackButton router={router} />

          {/* //  welcome text  */}
          <View>
            <Text style={styles.welcomeText}>Let's</Text>
            <Text style={styles.welcomeText}>Get Started</Text>
          </View>

          {/* form  */}

          <View style={styles.form}>
            <Text
              style={{
                fontSize: hp(3.5),
                fontFamily: theme.fonts.regular,
                color: theme.color.text,
              }}
            >
              Please fill the details to create new account
            </Text>
            <Input
              onChangeText={(value) => (nameRef.current = value)}
              placeholder="Enter your name"
              icon={<Icon name={"user"} size={26} strokeWidth={1.6} />}
            />
            <Input
              onChangeText={(value) => (emailRef.current = value)}
              placeholder="Enter your email"
              icon={<Icon name={"mail"} size={26} strokeWidth={1.6} />}
            />
            <Input
              onChangeText={(value) => (passwordRef.current = value)}
              placeholder="Enter your password"
              secureTextEntry={true}
              icon={<Icon name={"lock"} size={26} strokeWidth={1.6} />}
            />

            <Button
              title={"Create Account"}
              buttonStyle={{}}
              textStyle={{}}
              onPress={OnSubmit}
              loading={loading}
            />

            {/* footer  */}

            <View style={styles.footerText}>
              <Text
                style={{
                  fontFamily: theme.fonts.regular,
                  color: theme.color.text,
                }}
              >
                Already have an account!
              </Text>
              <Pressable onPress={() => router.push("../login")}>
                <Text
                  style={{
                    fontFamily: theme.fonts.medium,
                    color: theme.color.buttonDark,
                  }}
                >
                  Login
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: { paddingHorizontal: wp(3), paddingTop: 10, flex: 1, gap: 45 },
  welcomeText: {
    fontFamily: theme.fonts.bold,
    fontSize: hp(8),
    color: theme.color.text,
  },
  form: {
    gap: 25,
  },
  forgotpass: {
    textAlign: "right",
    fontFamily: theme.fonts.medium,
    color: theme.color.text,
  },

  footerText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
});
