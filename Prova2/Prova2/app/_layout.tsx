import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007bff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Início', 
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="dia" 
        options={{ title: 'Compromissos de Hoje' }} 
      />
      <Stack.Screen 
        name="semana" 
        options={{ title: 'Compromissos da Semana' }}
      />
    </Stack>
  );
}