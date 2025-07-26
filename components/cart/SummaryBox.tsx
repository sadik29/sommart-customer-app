import { View, Text, StyleSheet } from "react-native";

type Props = {
  subtotal: number;
  delivery: number;
  total: number;
};

export default function SummaryBox({ subtotal, delivery, total }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment summery</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.amount}>${subtotal}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Delivery Charges</Text>
        <Text style={styles.amount}>${delivery}</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.row}>
        <Text style={[styles.label, styles.totalLabel]}>Total</Text>
        <Text style={[styles.amount, styles.totalLabel]}>${total}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6FDFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    marginHorizontal: 16,
    marginTop: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C1C1C",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: "#757575",
  },
  amount: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1C1C1C",
  },
  totalLabel: {
    fontWeight: "700",
    fontSize: 15,
  },
  separator: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: 4,
  },
});
