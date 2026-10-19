import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Link} from "expo-router" 

export default function IndexIntro() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.content}>
                <Text className="text-[#B65F48] text-[13px] font-bold">
                    MYGOALS
                </Text>
                <View style={styles.accent} />
                <Text className="max-w-[340px] text-[#183B33] text-[38px] font-bold leading-[44px]">
                    Bem-vindo ao MyGoals
                </Text>
                <Text className="mt-[18px] max-w-[360px] text-[#52645E] text-[17px] leading-[26px]">
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
    accent: {
        width: 44,
        height: 4,
        marginTop: 18,
        marginBottom: 22,
        backgroundColor: "#D77B5D",
    },
});