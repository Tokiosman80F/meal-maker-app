// import { useTheme } from "../hooks/useTheme";

import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="cursor-pointer rounded-xl bg-orange-500 px-4 py-2 font-medium text-white hover:bg-orange-600"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
