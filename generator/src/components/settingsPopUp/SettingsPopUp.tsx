"use client";

import ThemeToggle from "../themeToggle/ThemeToggle";

interface SettingsPopUpProps {
    onClose: () => void;
    type: "theme" | "link";
    link?: string;
}

export default function SettingsPopUp({ onClose, link }: SettingsPopUpProps) {
    return (
        <div className="absolute left-full top-0 ml-2 bg-white shadow-lg rounded-lg p-4 w-60 z-50">
            <button
                onClick={onClose}
                className="absolute top-2 right-2 text-xl font-bold text-gray-700 hover:text-gray-900"
            >
                ×
            </button>
            <ThemeToggle />
            {link && (
                <div className="mt-2">
                    <a href={link} className="text-blue-600 hover:text-blue-800">Configurações</a>
                </div>
            )}
        </div>
    );
}
