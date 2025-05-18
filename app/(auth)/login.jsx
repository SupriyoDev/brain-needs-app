import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
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

const Login = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const OnSubmit = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Login", "Please fill all the details");
    }
    const email = emailRef.current.trim();
    const password = passwordRef.current.trim();

    //login gto supabase

    setLoading(true);
    const { success } = await login({ email, password });
    setLoading(false);

    if (!success) {
      Alert.alert("Login", "Inavlid email and password");
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
      <StatusBar style="light" />
      <ScrollView style={{ minHeight: "100%", width: "100%" }}>
        <View style={styles.container}>
          <BackButton router={router} />

          {/* //  welcome text  */}
          <View>
            <Text style={styles.welcomeText}>Hey,</Text>
            <Text style={styles.welcomeText}>Welcome Back</Text>
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
              Please login to continue
            </Text>

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
            <Text style={styles.forgotpass}>Forgot Password?</Text>
            <Button
              loading={loading}
              title={"Login"}
              buttonStyle={{}}
              textStyle={{}}
              onPress={OnSubmit}
            />
          </View>
          <View style={styles.footerText}>
            <Text
              style={{
                fontFamily: theme.fonts.regular,
                color: theme.color.text,
              }}
            >
              Don't have an account!
            </Text>
            <Pressable onPress={() => router.push("../signup")}>
              <Text
                style={{
                  fontFamily: theme.fonts.medium,
                  color: theme.color.buttonDark,
                }}
              >
                Sign up
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

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
