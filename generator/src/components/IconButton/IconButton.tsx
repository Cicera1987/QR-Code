"use client";
import { ReactNode } from "react";

interface IconButtonProps {
    text: string;
    icon: ReactNode;
    onClick: () => void;
    isLightMode?: boolean;
}

export default function IconButton({ text, icon, onClick, isLightMode }: IconButtonProps) {
    return (
        <button
            className={`p-2 flex items-center gap-2 rounded-md transition duration-300 
            ${isLightMode ? "text-[#1F2937]" : "text-[#E8EAED] "} dark:bg-highlight`}
            onClick={onClick}
        >
            <span>{text}</span>
            <span>{icon}</span>
        </button>
    );
}
