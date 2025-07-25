import { 
  StyleSheet, 
  View 
} from 'react-native';
import Header from '@/components/booking/Header';

export default function BookingScreen() {
  return (
    <View style={styles.container}>
      <Header
      title='Orders'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
});