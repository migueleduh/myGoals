import "../../global.css";
import { Stack } from "expo-router";

export default function RootLayout(){

  return (
    <Stack>
      {/* Esconde o cabeçalho padrão para o grupo de abas */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Adiciona a o modal a tela */}
      <Stack.Screen 
        name="Modal"
        options={{ presentation: "transparentModal",
                   animation: 'slide_from_bottom',
                   title: "Modal",
                   headerShown: false

         }} 

       />
    </Stack>
  );
}