import type { ReactNode } from "react";
import { StatusBar, type StatusBarStyle } from "expo-status-bar";
import { SafeAreaView, type Edge } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

type ScreenWrapperProps = {
  children: ReactNode;
  className?: string;
  edges?: Edge[];
  statusBarStyle?: StatusBarStyle;
};

export default function ScrollingWrapper({
  children,
  edges = ["top", "right", "bottom", "left"],
  statusBarStyle,
}: ScreenWrapperProps) {
  return (
    <SafeAreaView className="flex-1 bg-zinc-950 p-1" edges={edges} >
      <ScrollView>
      {statusBarStyle ? <StatusBar style={statusBarStyle} /> : null}
      {children}
      </ScrollView>
    </SafeAreaView>
  );
}
