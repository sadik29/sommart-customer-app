import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Header from '@/components/booking/Header';

export default function BookingScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header
      title='Profile'
      />
    </View>
  );
}

const styles = StyleSheet.create({
});
