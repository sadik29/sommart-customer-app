import { Icons } from "@/assets/Icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.logoContainer}>
          <Icons.Sommart width={150} height={150} />
        </View>

        <TextInput
          placeholder="Email / Phone *"
          placeholderTextColor="#888"
          style={styles.input}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password *"
            placeholderTextColor="#888"
            secureTextEntry={!passwordVisible}
            style={styles.passwordInput}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible((prev) => !prev)}
            style={styles.eyeIcon}
          >
            <Icons.eye width={20} height={20} stroke="#003B64" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.linkText}>Forget Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signInBtn}
          onPress={() => router.replace("/(tabs)/home")}
        >
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Sign in with</Text>

        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialBtn}>
            <Image
              source={Icons.facebook}
              style={{ width: 40, height: 40 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Image
              source={Icons.google}
              style={{ width: 40, height: 40 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => router.push("/(auth)/singup")}>
          <Text style={styles.footerText}>
            Don’t have an account ? <Text style={styles.linkText}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
    marginBottom: 15,
  },
  passwordContainer: {
    position: "relative",
    justifyContent: "center",
  },
  passwordInput: {
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
    paddingRight: 45,
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: 12,
  },
  forgotPassword: {
    alignItems: "flex-end",
    marginVertical: 8,
  },
  linkText: {
    color: "#03A9F4",
    fontWeight: "600",
  },
  signInBtn: {
    backgroundColor: "#003B64",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  signInText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  orText: {
    textAlign: "center",
    marginVertical: 20,
    color: "#888",
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 30,
  },
  socialBtn: {
    borderWidth: 1,
    borderColor: "#E6E6E6",
    padding: 10,
    borderRadius: 10,
  },
  footerText: {
    textAlign: "center",
    fontSize: 13,
  },
});
