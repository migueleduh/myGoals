import { Pressable, Text, View } from "react-native";

export type CardStreakProps = {
  title: string;
  days: number;
  currentStreak: number;
  bestStreak: number;
  onRegisterRelapse?: () => void;
};

export default function CardStreak({
  title,
  days,
  currentStreak,
  bestStreak,
  onRegisterRelapse,
}: CardStreakProps) {
  return (
    <View className="w-[187px] rounded-2xl border border-zinc-800 bg-zinc-900 px-[18px] py-5">
      <Text className="text-[11px] font-medium uppercase tracking-[1px] text-neutral-500">
        {title}
      </Text>
      <Text className="mt-2 text-[46px] font-bold leading-[50px] text-emerald-500">
        {days}
      </Text>
      <Text className="text-[11px] font-medium uppercase tracking-wide text-neutral-500">
        Dias limpos
      </Text>
      <View className="mt-3">
        <Text className="text-[11px] text-neutral-500">
          🔥 Sequência atual: {currentStreak} dias
        </Text>
        <Text className="text-[11px] text-neutral-500">
          Melhor: {bestStreak} dias
        </Text>
      </View>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Registrar recaída: ${title}`}
        className="mt-3 items-center rounded-lg border border-zinc-800 px-2 py-[6px] active:bg-zinc-800"
        onPress={onRegisterRelapse}
      >
        <Text className="text-[11px] text-neutral-500">Registrar recaída</Text>
      </Pressable>
    </View>
  );
}
