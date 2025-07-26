import { Stack } from 'expo-router';

export default function BookingLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="productsScreen" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="categoriesScreen" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="productDetails" 
        options={{ headerShown: false }} 
      />
    </Stack>
  );
}