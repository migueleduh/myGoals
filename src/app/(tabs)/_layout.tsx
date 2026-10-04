import { Tabs } from 'expo-router';
import {router} from 'expo-router';
export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Hoje',
          headerTitle: 'Minha Rotina Diária'
        }} 
      />

    {/* Botão do Meio (Não renderiza uma tela de aba, dispara o Modal) */}
      <Tabs.Screen 
        name="create-placeholder" 
        options={{ 
        title: 'Criar',
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
          headerTitle: 'Metas Futuras'
        }} 
      />

      
    </Tabs>
  );
}