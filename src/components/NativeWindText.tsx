import type { ComponentType } from "react";
import { Text, type TextProps } from "react-native";

type NativeWindTextProps = Omit<TextProps, "className"> & {
  className?: string;
};

const NativeWindText = Text as ComponentType<NativeWindTextProps>;

export default NativeWindText;
