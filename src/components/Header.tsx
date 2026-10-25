import { Text, View } from "react-native";

type HeaderProps = {
  name?: string;
  title?:string;
  subtitle?: string;
  avatarEmoji?: string;
  date?: Date;
  isHome?:boolean;
};

function getGreeting(date: Date) {
  const hour = date.getHours();

  if (hour < 12) return "Bom dia";
  if (hour < 18) return "Boa tarde";
  return "Boa noite";
}

function formatDate(date: Date) {
  const formatted = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);

  return formatted.charAt(0).toLocaleUpperCase("pt-BR") + formatted.slice(1);
}

export default function Header({
  name,
  subtitle = "Mais um dia para construir seu futuro.",
  avatarEmoji = "🙋",
  date = new Date(),
  isHome = true,
  title,
}: HeaderProps) {
  return (   
      <View className="flex-row items-center justify-between gap-3 px-5 pt-3 pb-8">
        <View className="flex-1 gap-1">
          <Text className="text-zinc-100 text-[22px] font-bold">
            {isHome ? getGreeting(date) + ', ' + name : title }  
          </Text>
          <Text className="text-zinc-400 text-[13px]">{formatDate(date)}</Text>
          <Text className="mt-1 text-zinc-500 text-[11px]">{subtitle}</Text>
        </View>
        <View
          className="h-11 w-11 items-center justify-center rounded-full bg-zinc-800"
          accessibilityLabel="Avatar do perfil"
        >
          <Text className="text-xl">{avatarEmoji}</Text>
        </View>
      </View>
  );
}