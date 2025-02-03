"use client";

import { useRouter } from "next/navigation";
import SettingsPopUp from "../settingsPopUp/SettingsPopUp";
import { menuItems } from "../MenuItems/DataMenu";
import MenuItems from "../MenuItems/MenuItems";
import { useState, useEffect } from "react";
import useTheme from "@/hooks/useTheme";

export default function Sidebar() {
    const [showSettings, setShowSettings] = useState(false);
    const [popUpType, setPopUpType] = useState < "theme" | "link" > ("theme");
    const router = useRouter();
    const { darkMode } = useTheme();

    const [sidebarDarkMode, setSidebarDarkMode] = useState(true);

    useEffect(() => {
        setSidebarDarkMode(darkMode);
    }, [darkMode]);

    const openSettings = (type: "theme" | "link") => {
        setPopUpType(type);   // Define o tipo de pop-up
        setShowSettings(true); // Exibe o pop-up
    };

    const closeSettings = () => {
        setShowSettings(false); // Fecha o pop-up
    };

    const handleNavigation = (link: string) => {
        router.push(link); // Navega para o link
    };

    return (
        <nav
            className={`w-64 p-4 transition-colors duration-300 ${sidebarDarkMode ? "bg-background text-gray-900" : "bg-dark-background text-white"}`}
        >
            <ul>
                {menuItems.map((item) => (
                    <MenuItems
                        key={item.title}
                        title={item.title}
                        icon={item.icon}
                        href={item.href}
                        onClick={() => {
                            if (item.title === "Config") {
                                openSettings("link");
                            } else {
                                handleNavigation(item.href);
                            }
                        }}
                        darkMode={sidebarDarkMode}
                    />
                ))}
            </ul>

            {showSettings && (
                <SettingsPopUp
                    onClose={closeSettings}
                    type={popUpType}
                    link="/settings"
                />
            )}
        </nav>
    );
}
