import {View, Text, StyleSheet,Pressable} from "react-native";
import { useRouter } from "expo-router";

export default function Modal() {
    const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Novo Registro</Text>
      
      {/* Botão customizado para fechar/desempilhar o modal */}
      <Pressable style={styles.closeButton} onPress={() => router.back()}>
        <Text style={styles.closeButtonText}>Cancelar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
});