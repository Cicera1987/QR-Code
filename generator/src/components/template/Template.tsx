"use client";

import { ReactNode } from "react";
import useTheme from "../../hooks/useTheme";

interface TemplateProps {
    header: ReactNode;
    sidebar: ReactNode;
    body: ReactNode;
    footer: ReactNode;
}

export default function Template({header, sidebar, body, footer }: TemplateProps) {
    const { darkMode } = useTheme();

    return (
        <div>
         <div>{header}</div>
        <div
                className={`flex min-h-screen transition-colors duration-300`}
        >
            {sidebar}
                <main className={`flex-1 flex flex-col ${darkMode ? "bg-dark-background text-white" : "bg-background text-gray-900"}`}>
                <section className="flex-1 p-6 ">{body}</section>
                {footer}
            </main>
        </div>
        </div>
    );
}
