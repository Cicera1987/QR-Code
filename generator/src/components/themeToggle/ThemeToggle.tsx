"use client";
import { useState, useEffect } from "react";
import { Icons } from "../assets";
import IconButton from "../IconButton/IconButton";



export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        setDarkMode(!darkMode);
    };

    return (
        <IconButton
            text={darkMode ? "Light Mode" : "Dark Mode"}
            icon={darkMode ? <Icons.LigthMode /> : <Icons.DarkMode />}
            onClick={toggleTheme}
            isLightMode={!darkMode}
        />
    )
}