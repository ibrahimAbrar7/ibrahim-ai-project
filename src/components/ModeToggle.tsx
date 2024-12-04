"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure this component renders only after mounting to avoid SSR mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Prevent rendering until mounted
  if (!mounted) return null;

  return (
    <Button
      variant="outline"
      size="xl"
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-12 h-12"
    >
      {/* Sun Icon for Light Mode */}
      <Sun
        className={`h-6 w-6 transition-transform duration-300 ${
          theme === "light" ? "scale-150" : "scale-0"
        }`}
      />
      {/* Moon Icon for Dark Mode */}
      <Moon
        className={`absolute h-6 w-6 transition-transform duration-300 ${
          theme === "dark" ? "scale-150" : "scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
