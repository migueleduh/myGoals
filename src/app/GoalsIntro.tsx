import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function GoalsIntro() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.content}>
                <Text className="text-[#B65F48] text-[13px] font-bold">
                    SEU CAMINHO
                </Text>
                <View style={styles.accent} />
                <Text className="text-[#183B33] text-[32px] font-bold leading-[38px]">
                    Minhas metas
                </Text>
                <Text className="mt-3 max-w-[360px] text-[#52645E] text-base leading-6">
                    Objetivos importantes merecem atenção. Acompanhe aqui cada passo do
                    seu progresso.
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F2F5EF',
    },
    content: {
        flex: 1,
        paddingHorizontal: 28,
        paddingTop: 48,
    },
    accent: {
        width: 40,
        height: 4,
        marginTop: 14,
        marginBottom: 18,
        backgroundColor: '#D77B5D',
    },
});