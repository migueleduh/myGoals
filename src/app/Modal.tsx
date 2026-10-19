import { View, StyleSheet, Pressable, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import NativeWindText from "../components/NativeWindText";

export default function Modal() {
    const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea }>
      <View style={styles.container} className="bg-zinc-900 rounded-tl-3xl rounded-tr-3xl px-7 mt-96 pt-12 gap-4" >
        <NativeWindText className="font-bold text-white">Criar novo</NativeWindText>
        <View style={styles.form}>
            <NativeWindText className="text-neutral-500 pb-2">Título</NativeWindText>
              <TextInput
                placeholder="Ex: Ler 20 páginas por dia"
                className="border border-neutral-500 rounded-lg px-3 py-2 mb-4 placeholder:text-neutral-500 "
            />


            <NativeWindText className="text-neutral-500 pb-2">Categoria</NativeWindText>
            <TextInput
              placeholder="Ex: Saúde, estudo, finanças" className="border border-neutral-500 rounded-lg px-3 py-2 mb-4 placeholder:text-neutral-500 "
            />

            <NativeWindText className="text-neutral-500 pb-2 ">Tipo</NativeWindText>
          </View>

        
        {/* Botão customizado para fechar/desempilhar o modal */}
        <Pressable className="bg-emerald-500 px-24 py-2 rounded-lg  "
            onPress={() => {
              if (router.canGoBack()) {
                router.back();
              } else {
                router.replace("/");
              }
            }}>
          <NativeWindText className="text-black text-center">Criar Hábito</NativeWindText>
        </Pressable>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
  },
  form: {
    width: '100%',
    marginBottom: 20,
  },
  });