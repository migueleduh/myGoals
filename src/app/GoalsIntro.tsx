import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function GoalsIntro() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.content}>
                <Text style={styles.eyebrow}>SEU CAMINHO</Text>
                <View style={styles.accent} />
                <Text style={styles.title}>Minhas metas</Text>
                <Text style={styles.description}>
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
    eyebrow: {
        color: '#B65F48',
        fontSize: 13,
        fontWeight: '700',
    },
    accent: {
        width: 40,
        height: 4,
        marginTop: 14,
        marginBottom: 18,
        backgroundColor: '#D77B5D',
    },
    title: {
        color: '#183B33',
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 38,
    },
    description: {
        maxWidth: 360,
        marginTop: 12,
        color: '#52645E',
        fontSize: 16,
        lineHeight: 24,
    },
});