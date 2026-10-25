import { Pressable, Text, View } from "react-native";
import type  Goal  from "../types/Goal";

type GoalCardProps = {
  goal: Goal;
  onUpdate?: (goal: Goal) => void;
};

const categoryLabels: Record<string, string> = {
  "Language Learning": "Idiomas",
  "Personal Development": "Desenvolvimento pessoal",
  "Community Service": "Serviço comunitário",
  "Time Management": "Gestão do tempo",
  "Self-Care": "Autocuidado",
};

function formatDeadline(deadline: string) {
  const date = new Date(`${deadline}T12:00:00`);
  const formatted = new Intl.DateTimeFormat("pt-BR", {
    month: "short",
    year: "numeric",
  }).format(date);

  return formatted.charAt(0).toLocaleUpperCase("pt-BR") + formatted.slice(1);
}

export default function GoalCard({ goal, onUpdate }: GoalCardProps) {
  const progress = Math.min(100, Math.max(0, goal.progress));
  const category = categoryLabels[goal.category] ?? goal.category;

  return (
    <View className="rounded-2xl border border-zinc-800 bg-zinc-900 p-[18px]">
      <View className="flex-row items-center gap-3">
        <View className="h-10 w-10 items-center justify-center rounded-xl bg-zinc-800">
          <Text className="text-lg" accessibilityLabel={category}>
            🌐
          </Text>
        </View>

        <View className="flex-1">
          <Text className="self-start rounded-full bg-zinc-800 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-400">
            {category}
          </Text>
          <Text className="mt-1 text-[13px] font-semibold text-zinc-100">
            {goal.name}
          </Text>
        </View>

        <Text className="text-2xl font-bold text-emerald-500">
          {progress}%
        </Text>
      </View>

      <View
        className="mt-3 h-1.5 overflow-hidden rounded-full bg-zinc-800"
        accessibilityRole="progressbar"
        accessibilityValue={{ min: 0, max: 100, now: progress }}
      >
        <View
          className="h-full rounded-full bg-emerald-500"
          style={{ width: `${progress}%` }}
        />
      </View>

      <View className="mt-3 flex-row items-center justify-between">
        <Text className="text-xs text-neutral-500">
          Até {formatDeadline(goal.deadline)}
        </Text>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Atualizar progresso da meta ${goal.name}`}
          className="rounded-lg border border-emerald-900 px-3 py-1.5 active:bg-emerald-950"
          onPress={() => onUpdate?.(goal)}
        >
          <Text className="text-xs font-medium text-emerald-500">Atualizar</Text>
        </Pressable>
      </View>
    </View>
  );
}
