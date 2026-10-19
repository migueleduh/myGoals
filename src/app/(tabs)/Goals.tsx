import { View, StyleSheet } from 'react-native';
import NativeWindText from '../../components/NativeWindText';

export default function GoalsScreen() {
  return (
    <View style={styles.container}>
      <NativeWindText className="text-lg font-bold">
        Tela de Metas Futuras
      </NativeWindText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});