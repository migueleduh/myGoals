import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Link} from "expo-router" 
import NativeWindText from "../components/NativeWindText";

export default function IndexIntro() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.content}>
                <NativeWindText className="text-[#B65F48] text-[13px] font-bold">
                    MYGOALS
                </NativeWindText>
                <View style={styles.accent} />
                <NativeWindText className="max-w-[340px] text-[#183B33] text-[38px] font-bold leading-[44px]">
                    Bem-vindo ao MyGoals
                </NativeWindText>
                <NativeWindText className="mt-[18px] max-w-[360px] text-[#52645E] text-[17px] leading-[26px]">
                    Suas metas começam com um passo. Defina o que importa e acompanhe seu
                    progresso, um dia de cada vez.
                </NativeWindText>

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