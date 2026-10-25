import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import SelectorType from "../components/SelectorType";

export default function Modal() {
  const router = useRouter();
  const [valueSelector, setValue] = useState('Habit')

  return (
    <View className="flex-1 justify-end">
      <Pressable 
        className="absolute inset-0 bg-black/60 " 
        onPress={ () => { router.canGoBack() ? router.back() : router.replace('/')}}
      />
      <View className="gap-4 rounded-tl-3xl rounded-tr-3xl bg-zinc-900 px-7 pb-8 pt-12">
        <Text className="font-bold text-white text-xl">Criar novo</Text>
        <View style={styles.form}>
          <Text className="pb-2 text-neutral-500">Título</Text>
          <TextInput
            placeholder="Ex: Ler 20 páginas por dia"
            className="mb-4 rounded-xl border border-neutral-500 bg-zinc-800 px-3 py-3 placeholder:text-neutral-500"
          />

          <Text className="pb-2 text-neutral-500">Categoria</Text>
          <TextInput
            placeholder="Ex: Saúde, estudo, finanças"
            className="mb-4 rounded-xl border border-neutral-500 bg-zinc-800 px-3 py-3 placeholder:text-neutral-500"
          />

          <Text className="pb-2 text-neutral-500">Tipo</Text>
          <SelectorType value={valueSelector} onChange={() => valueSelector === 'Habit' ? setValue('Goal') : setValue('Habit')} >
           </SelectorType>
        </View>

        <Pressable
          className="rounded-2xl bg-emerald-500 px-24 py-4"
          onPress={() => {
            if (router.canGoBack()) {
              router.back();
            } else {
              router.replace("/");
            }
          }}
        >
          <Text className="text-black text-center font-semibold">Criar Hábito</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
    marginBottom: 20,
  },
});