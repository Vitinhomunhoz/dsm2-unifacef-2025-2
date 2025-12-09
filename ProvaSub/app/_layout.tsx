import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffffff',
        },
        headerTintColor: '#000000ff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Início', 
          headerShown: true
        }} 
      />
      <Stack.Screen 
        name="dia" 
        options={{ title: 'Compromissos do dia' }} 
      />
      <Stack.Screen 
        name="semana" 
        options={{ title: 'Compromissos da Semana' }}
      />
    </Stack>
  );
}