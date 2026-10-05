import {View, Text, StyleSheet,Pressable,TextInput} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import statusBar from "expo-status-bar";

export default function Modal() {
    const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea }>
      <View style={styles.container}>
        <Text style={styles.title}>Criar Novo Registro</Text>
        <View style={styles.form}>
            <Text style={styles.label}>Título</Text>
            <TextInput
              placeholder="Ex: Ler 20 páginas por dia"
              style={styles.input}
              placeholderTextColor="#8ca08c"
            />


            <Text style={styles.label}>Categoria</Text>
            <TextInput
              placeholder="Ex: Saúde, estudo, finanças"
              style={styles.input}
              placeholderTextColor="#8ca08c"
            />
          </View>

        
        {/* Botão customizado para fechar/desempilhar o modal */}
        <Pressable style={styles.closeButton} onPress={() => router.back()}>
          <Text style={styles.closeButtonText}>Cancelar</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'gray',
    marginTop: "100%",
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    opacity: 0.3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
  }})    