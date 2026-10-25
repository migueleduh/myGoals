import { Pressable, Text, View } from "react-native";

type HabitCardProps = {
  name: string;
  currentStreak: number;
  completed: boolean;
  onToggle?: () => void;
};

export default function HabitCard({
  name,
  currentStreak,
  completed,
  onToggle,
}: HabitCardProps) {
  return (
    <View className="flex-row items-center gap-3 rounded-2xl border border-emerald-900 bg-zinc-900 px-[18px] py-4">
      <View className="h-[38px] w-[38px] items-center justify-center rounded-xl bg-emerald-950">
        <Text className="text-base text-emerald-500">✓</Text>
      </View>
      <View className="flex-1">
        <Text className="text-[13px] font-medium text-zinc-300">{name}</Text>
        <Text className="mt-1 text-[11px] text-neutral-500">
          🔥 {currentStreak} dias
        </Text>
      </View>
      <Pressable
        accessibilityRole="checkbox"
        accessibilityState={{ checked: completed }}
        accessibilityLabel={`${completed ? "Desmarcar" : "Concluir"} hábito: ${name}`}
        className={`h-[26px] w-[26px] items-center justify-center rounded-full ${
          completed ? "bg-emerald-500" : "border border-neutral-500 bg-transparent"
        }`}
        onPress={onToggle}
      >
        {completed ? <Text className="text-[13px] font-bold text-black">✓</Text> : null}
      </Pressable>
    </View>
  );
}
