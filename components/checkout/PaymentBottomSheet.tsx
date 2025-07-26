import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import { forwardRef, useMemo, useState } from "react";

type Props = {
  onConfirm: (phone: string) => void;
};

const PaymentBottomSheet = forwardRef<BottomSheetModal, Props>(
  ({ onConfirm }, ref) => {
    const snapPoints = useMemo(() => ["40%"], []);
    const [phone, setPhone] = useState("");

    return (
      <BottomSheetModal
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={BottomSheetBackdrop}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Payment</Text>

          <View style={styles.inputWrapper}>
            <Ionicons
              name="phone-portrait-outline"
              size={18}
              color="#777"
              style={{ marginRight: 8 }}
            />
            <TextInput
              placeholder="Enter Phone : 61 / 77"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              style={styles.input}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => onConfirm(phone)}
          >
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </BottomSheetModal>
    );
  }
);
PaymentBottomSheet.displayName = "PaymentBottomSheet";
export default PaymentBottomSheet;

const styles = StyleSheet.create({
  content: {
    padding: 20,
    backgroundColor: "#F9FCFF",
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    textAlign: "center",
    marginBottom: 16,
  },
  inputWrapper: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#90CAF9",
    borderRadius: 12,
    paddingHorizontal: 12,
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 14,
    color: "#333",
  },
  button: {
    backgroundColor: "#004B6B",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
