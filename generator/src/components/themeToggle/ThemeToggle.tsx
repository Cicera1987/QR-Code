"use client";
import useTheme from "../../hooks/useTheme";
import { Icons } from "../assets";
import IconButton from "../IconButton/IconButton";

export default function ThemeToggle() {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <IconButton
            text={darkMode ? "Light Mode" : "Dark Mode"}
            icon={darkMode ? <Icons.LigthMode /> : <Icons.DarkMode />}
            onClick={toggleTheme}
            isLightMode={!darkMode}
        />
    );
}
