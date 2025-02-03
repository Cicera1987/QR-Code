"use client";

import ThemeToggle from "../themeToggle/ThemeToggle";

interface SettingsPopUpProps {
    onClose: () => void;
    type: "theme" | "link";
    link?: string;
}

export default function SettingsPopUp({ onClose, type, link }: SettingsPopUpProps) {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-lg w-60 flex flex-col gap-2">
                <button
                    onClick={onClose}
                    className="self-end text-xl font-bold text-gray-700 hover:text-gray-900"
                >
                    x
                </button>
                <ThemeToggle /> 
                <div>
                    {link && <a href={link} className="text-blue-600 hover:text-blue-800">configurações</a>}
                </div>
               
            </div>
        </div>
    );
}
