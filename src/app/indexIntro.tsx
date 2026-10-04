import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Link} from "expo-router" 

export default function IndexIntro() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.content}>
                <Text style={styles.eyebrow}>MYGOALS</Text>
                <View style={styles.accent} />
                <Text style={styles.title}>Bem-vindo ao MyGoals</Text>
                <Text style={styles.description}>
                    Suas metas começam com um passo. Defina o que importa e acompanhe seu
                    progresso, um dia de cada vez.
                </Text>

                <Link href={"/Goals"}>Ir para HOme</Link>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#F2F5EF",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 28,
    },
    eyebrow: {
        color: "#B65F48",
        fontSize: 13,
        fontWeight: "700",
    },
    accent: {
        width: 44,
        height: 4,
        marginTop: 18,
        marginBottom: 22,
        backgroundColor: "#D77B5D",
    },
    title: {
        maxWidth: 340,
        color: "#183B33",
        fontSize: 38,
        fontWeight: "700",
        lineHeight: 44,
    },
    description: {
        maxWidth: 360,
        marginTop: 18,
        color: "#52645E",
        fontSize: 17,
        lineHeight: 26,
    },
});