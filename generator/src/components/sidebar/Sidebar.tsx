"use client";

import { useRouter } from "next/navigation";
import SettingsPopUp from "../settingsPopUp/SettingsPopUp";
import { menuItems } from "../MenuItems/DataMenu";
import MenuItems from "../MenuItems/MenuItems";
import { useState } from "react";

export default function Sidebar() {
    const [showSettings, setShowSettings] = useState(false);
    const [popUpType, setPopUpType] = useState < "theme" | "link" > ("theme");
    const router = useRouter();

    const openSettings = (type: "theme" | "link") => {
        setPopUpType(type);
        setShowSettings(true);
    };

    const closeSettings = () => {
        setShowSettings(false);
    };

    const handleNavigation = (link: string) => {
        router.push(link);
    };

    return (
        
        <nav className="w-64 bg-gray-800 text-white p-4">
            <ul>
                {menuItems.map((item) =>
                    item.title === "Config" ? (
                        <li key={item.title} className="relative">
                            <button
                                onClick={() => openSettings("link")}
                                className="flex items-center p-2 hover:bg-gray-700 rounded w-full"
                            >
                                {item.icon}
                                <span className="ml-2">{item.title}</span>
                            </button>
                            {showSettings && <SettingsPopUp onClose={closeSettings} type={popUpType} link="/settings" />}
                        </li>
                    ) : (
                        <MenuItems
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                            href={item.link}
                            onClick={() => handleNavigation(item.link)}
                        />
                    )
                )}
            </ul>
        </nav>
    );
}
