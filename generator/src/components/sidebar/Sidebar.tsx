"use client";

import { useRouter } from "next/navigation";
import SettingsPopUp from "../settingsPopUp/SettingsPopUp";
import { menuItems } from "../MenuItems/DataMenu";
import MenuItems from "../MenuItems/MenuItems";
import { useState } from "react";

export default function Sidebar() {
    const [showSettings, setShowSettings] = useState(false);
    const [popUpType, setPopUpType] = useState < "theme" | "link" > ("theme");
    const router = useRouter(); // 🔹 Instância do useRouter

    const openSettings = (type: "theme" | "link") => {
        setPopUpType(type);
        setShowSettings(true);
    };

    const closeSettings = () => {
        setShowSettings(false);
    };

    const handleNavigation = (link: string) => {
        router.push(link); // 🔹 Navega para a rota especificada
    };

    return (
        <nav className="w-64 bg-gray-800 text-white p-4">
            <ul>
                {menuItems.map((item) => (
                    <MenuItems
                        key={item.title}
                        title={item.title}
                        icon={item.icon}
                        href={item.link}
                        onClick={
                            item.title === "Config"
                                ? () => openSettings("link")
                                : () => handleNavigation(item.link)
                        }
                    />
                ))}
            </ul>
            {showSettings && (
                <SettingsPopUp
                    onClose={closeSettings}
                    type={popUpType}
                    link={popUpType === "link" ? "/settings" : undefined}
                />
            )}
        </nav>
    );
}
