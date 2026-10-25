import { ScrollView, Text, View } from 'react-native';
import { useState } from 'react';
import Header from '../../components/Header';
import ScrollingWrapper from '../../components/ScrollingWrapper';
import CardStreak from '../../components/CardStreak';
import HabitCard from '../../components/HabitCard';
import { mockHabits } from '../../mocks';
import { ScreenContentWrapper } from 'react-native-screens';

export default function HomeScreen() {
  const [streaks, setStreaks] = useState([
    { title: 'Sem apostas', days: 12, currentStreak: 12, bestStreak: 28 },
    {
      title: 'Sem redes sociais excessivas',
      days: 7,
      currentStreak: 7,
      bestStreak: 15,
    },
  ]);
  const [completedHabitIds, setCompletedHabitIds] = useState<string[]>(() => {
    const today = new Date().toISOString().slice(0, 10);
    return mockHabits
      .filter((habit) => habit.completed_dates.includes(today))
      .map((habit) => habit.id);
  });

  function toggleHabit(id: string) {
    setCompletedHabitIds((current) =>
      current.includes(id)
        ? current.filter((habitId) => habitId !== id)
        : [...current, id],
    );
  }

  function registerRelapse(title: string) {
    setStreaks((current) =>
      current.map((streak) =>
        streak.title === title
          ? { ...streak, days: 0, currentStreak: 0 }
          : streak,
      ),
    );
  }

  return (
    <ScrollingWrapper edges={["top", "left", "right"]}>
      <Header name="Miguel" />
    
        <ScrollView
          horizontal
          className="mt-1"
          contentContainerClassName="gap-4 px-[17px] pb-2"
          showsHorizontalScrollIndicator={false}
        >
          {streaks.map((streak) => (
            <CardStreak
              key={streak.title}
              {...streak}
              onRegisterRelapse={() => registerRelapse(streak.title)}
            />
          ))}
        </ScrollView>

        <View className="mt-7 px-4">
          <Text className="text-[15px] font-bold text-zinc-100">
            Rotina de hoje
          </Text>
          <Text className="mt-1 text-[11px] text-zinc-500">
            Pequenos hábitos. Consistência diária.
          </Text>

          <View className="mt-4 gap-3">
            {mockHabits.map((habit) => (
              <HabitCard
                key={habit.id}
                name={habit.name}
                currentStreak={habit.current_streak}
                completed={completedHabitIds.includes(habit.id)}
                onToggle={() => toggleHabit(habit.id)}
              />
            ))}
          </View>
        </View>
      
    </ScrollingWrapper>
  );
}