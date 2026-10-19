import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Modal() {
    const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea }>
      <View  className=" flex-1 bg-zinc-900 rounded-tl-3xl rounded-tr-3xl px-7 mt-96 pt-12 gap-4" >
        <Text className="font-bold text-white text-xl">Criar novo</Text>
        <View style={styles.form}>
            <Text className="text-neutral-500 pb-2">Título</Text>
              <TextInput
                placeholder="Ex: Ler 20 páginas por dia"
                className="bg-zinc-800 border border-neutral-500 rounded-xl px-3 py-3 mb-4 placeholder:text-neutral-500 "
            />


            <Text className="text-neutral-500 pb-2">Categoria</Text>
            <TextInput
              placeholder="Ex: Saúde, estudo, finanças" className="bg-zinc-800 border border-neutral-500 rounded-xl px-3 py-3 mb-4 placeholder:text-neutral-500 "
            />

            <Text className="text-neutral-500 pb-2">Tipo</Text>
          </View>

        
        {/* Botão customizado para fechar/desempilhar o modal */}
        <Pressable className="bg-emerald-500 px-24 py-4 rounded-2xl"
            onPress={() => {
              if (router.canGoBack()) {
                router.back();
              } else {
                router.replace("/");
              }
            }}>
          <Text className="text-black text-center font-semibold">Criar Hábito</Text>
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
  form: {
    width: '100%',
    marginBottom: 20,
  },
  });