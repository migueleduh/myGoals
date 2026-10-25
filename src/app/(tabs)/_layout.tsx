import { Tabs } from 'expo-router';
import {router} from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Octicons from '@expo/vector-icons/Octicons';

export default function TabsLayout() {

  return (
    <Tabs
    
      screenOptions={{
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 100,
          backgroundColor: '#09090B',
        },
        headerShown:false,
        tabBarActiveTintColor: '#10B981',
        tabBarInactiveTintColor: '#737373',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarIconStyle: {
          marginBottom: -12,
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
         <FontAwesome
           name="check-square-o"
           size={22}
           color={typeof color === 'string' ? color : '#737373'}
         />
      ),

        }} 
      />

    {/* Botão do Meio (Não renderiza uma tela de aba, dispara o Modal) */}
      <Tabs.Screen 
        name="create-placeholder" 
          options={{ 
            title: '',
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={65} color={"#10B981"} />
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
          tabBarIcon: ({ color }) => (
          <Octicons name="goal" size={22} color={typeof color === 'string' ? color : '#737373'} />
          
      ),
        }}
      />

      
    </Tabs>
  );
}