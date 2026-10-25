import { useState } from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import ScreenWrapper from '../../components/ScrollingWrapper';
import GoalCard from '../../components/GoalCard';
import { mockGoals } from '../../mocks';
import type { Goal } from '../../types/Goal';

export default function GoalsScreen() {
  const [goals, setGoals] = useState(mockGoals);

  function updateGoalProgress(goal: Goal) {
    setGoals((currentGoals) =>
      currentGoals.map((currentGoal) =>
        currentGoal.id === goal.id
        ? { ...currentGoal, progress: Math.min(currentGoal.progress + 10, 100) }
        : currentGoal,
      ),
    );
  }

  return (
    <ScreenWrapper edges={["top", "left", "right"]}>
      <Header  subtitle="Pequenos Passos, Grandes mudanças" isHome={false} title='Suas Metas' />
      <View className="flex-1 gap-8 px-4 pb-6">
        {goals.map((goal) => (
        <GoalCard
          key={goal.id}
          goal={goal}
          onUpdate={updateGoalProgress}
        />
        ))}
        {goals.length === 0 ? (
        <Text className="text-center text-sm text-neutral-500">
          Você ainda não tem metas cadastradas.
        </Text>
        ) : null}
      </View>
    </ScreenWrapper>
  );
}