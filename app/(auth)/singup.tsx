import { Icons } from "@/assets/Icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

export default function SignupScreen() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [agree, setAgree] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.logoContainer}>
          <Icons.Sommart width={100} height={100} />
        </View>

        {/* First Name */}
        <View style={styles.inputWrapper}>
          <Icons.user width={20} height={20} />
          <TextInput style={styles.input} placeholder="First Name *" />
        </View>

        {/* Last Name */}
        <View style={styles.inputWrapper}>
          <Icons.user width={20} height={20} />
          <TextInput style={styles.input} placeholder="Last Name *" />
        </View>

        {/* Email */}
        <View style={styles.inputWrapper}>
          <Icons.email width={20} height={20} />
          <TextInput
            style={styles.input}
            placeholder="Email *"
            keyboardType="email-address"
          />
        </View>

        {/* Phone Number */}
        <View style={styles.inputWrapper}>
          <Icons.phone width={20} height={20} />
          <Text style={styles.phoneCode}>+252</Text>
          <TextInput
            style={styles.input}
            placeholder="XXXXXXXXX *"
            keyboardType="phone-pad"
          />
        </View>

        {/* Password */}
        <View style={styles.inputWrapper}>
          <Icons.lock width={20} height={20} />
          <TextInput
            style={styles.input}
            placeholder="Password *"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity onPress={() => setPasswordVisible((prev) => !prev)}>
            <Icons.eye width={20} height={20} />
          </TouchableOpacity>
        </View>

        {/* Confirm Password */}
        <View style={styles.inputWrapper}>
          <Icons.lock width={20} height={20} />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password *"
            secureTextEntry={!confirmPasswordVisible}
          />
          <TouchableOpacity
            onPress={() => setConfirmPasswordVisible((prev) => !prev)}
          >
            <Icons.eye width={20} height={20} />
          </TouchableOpacity>
        </View>

        {/* Referral Code */}
        <View style={styles.inputWrapper}>
          <Icons.referral width={20} height={20} />
          <TextInput style={styles.input} placeholder="Referral Code" />
        </View>

        {/* Terms & Conditions */}
        <View style={styles.termsWrapper}>
          <TouchableOpacity
            style={[styles.checkbox, agree && styles.checkboxChecked]}
            onPress={() => setAgree(!agree)}
          >
            {agree && <Text style={styles.checkmark}>✔</Text>}
          </TouchableOpacity>

          <Text style={styles.termsText}>
            I agree with the ?{" "}
            <Text style={styles.linkText}>Terms & Condition</Text>
          </Text>
        </View>

        {/* Sign Up */}
        <TouchableOpacity
          style={styles.signInBtn}
          onPress={() => router.replace("/(tabs)/home")}
        >
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>

        {/* Already have account */}
        <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
          <Text style={styles.footerText}>
            Already have an account ?{" "}
            <Text style={styles.linkText}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  logoContainer: {
    alignItems: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    fontSize: 14,
    marginLeft: 10,
  },
  phoneCode: {
    marginLeft: 10,
    fontSize: 14,
    color: "#333",
    marginRight: 5,
  },
  termsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  checkmark: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 18,
    fontWeight: "bold",
  },

  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: "#003B64",
    borderColor: "#003B64",
  },
  termsText: {
    fontSize: 13,
    color: "#333",
  },
  linkText: {
    color: "#03A9F4",
    fontWeight: "500",
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
  footerText: {
    textAlign: "center",
    fontSize: 13,
    marginTop: 20,
  },
});
