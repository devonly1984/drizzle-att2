import { ThemeProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

import { ReactNode } from "react";

const DarkModeProvider = ({ children, }: ThemeProviderProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default DarkModeProvider;