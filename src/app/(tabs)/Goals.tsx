import { View, Text, StyleSheet } from 'react-native';

export default function GoalsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Metas Futuras</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});