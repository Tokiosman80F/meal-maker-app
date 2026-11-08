// import { useTheme } from "../hooks/useTheme";

import { useTheme } from "../hooks/useTheme";
import Button from "./Button";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </Button>
  );
}
