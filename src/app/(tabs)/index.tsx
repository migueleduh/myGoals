import { View, StyleSheet } from 'react-native';
import NativeWindText from '../../components/NativeWindText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <NativeWindText className="text-lg font-bold">
        Tela Home - Hábitos do Dia
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