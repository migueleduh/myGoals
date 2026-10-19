import { Tabs } from 'expo-router';
import {router} from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 100,
          backgroundColor: '#18181B',
        },
        tabBarActiveTintColor: '#10B981',
        tabBarInactiveTintColor: '#737373',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarIconStyle: {
          marginBottom: 0,
          width: 60,
          height: 60,
        },

      }}
    >
      <Tabs.Screen 
      
        name="index" 
        options={{ 
          title: 'Hoje',
          headerTitle: 'Minha Rotina Diária',
          tabBarIcon: ({ color, size }) => (
          <Ionicons name="calendar-outline" size={28} color={"#737373"} />
      ),

        }} 
      />

    {/* Botão do Meio (Não renderiza uma tela de aba, dispara o Modal) */}
      <Tabs.Screen 
        name="create-placeholder" 
          options={{ 
        title: 'Criar',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="add-circle" size={55} color={"#10B981"} />
      ),
        }} 
        listeners={{
          tabPress: (e) => {
            e.preventDefault(); // Impede a troca de aba
            router.push('/Modal'); // Manda o Stack Raiz subir o modal por cima!
          },
        }}
      />

      <Tabs.Screen 
        name="Goals" 
        options={{ 
          title: 'Futuro',
          headerTitle: 'Metas Futuras',
          tabBarIcon: ({ color, size }) => (
          <Ionicons name="locate" size={28} color={"#737373"} />
      ),
        }} 
      />

      
    </Tabs>
  );
}