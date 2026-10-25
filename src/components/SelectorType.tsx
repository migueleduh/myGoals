import { EntryType } from "../types";
import { View,Pressable, Text } from "react-native";

type SegmentedControlProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SelectorType({ value, onChange }: SegmentedControlProps) {
  const options: { label: string; value: string }[] = [
    { label: "Hábito", value: "Habit"  },
    { label: "Meta", value: "Goal" },
  ];

  return (
    <View className="flex-row rounded-xl bg-zinc-800 p-1">
      {options.map((option) => {
        const selected = value === option.value;

        return (
          <Pressable
            key={option.value}
            accessibilityRole="button"
            accessibilityState={{ selected }}
            onPress={() => onChange(option.value)}
            className={`min-h-9 flex-1 items-center justify-center rounded-lg ${
              selected ? "bg-emerald-500" : "bg-transparent"
            }`}
          >
            <Text
              className={`text-sm font-semibold ${
                selected ? "text-zinc-950" : "text-zinc-400"
              }`}
            >
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}