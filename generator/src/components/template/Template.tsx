"use client";

import { ReactNode } from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";
import useTheme from "../../hooks/useTheme";

interface TemplateProps {
    header: ReactNode;
    body: ReactNode;
    footer: ReactNode;
}

export default function Template({ header, body, footer }: TemplateProps) {
    const { darkMode } = useTheme();

    return (
        <div
            className={`flex min-h-screen transition-colors duration-300  ${darkMode ? "bg-dark-background text-white" : "bg-background text-gray-900"}`}
        >
            {header}
            <main className="flex-1 flex flex-col">
                <section className="flex-1 p-6">{body}</section>
                {footer}
            </main>
        </div>
    );
}
