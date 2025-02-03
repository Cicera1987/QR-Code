"use client";
import { ReactNode } from "react";


interface TemplateProps {
    header: ReactNode;
    body: ReactNode;
    footer: ReactNode;
}

export default function Template({ header, body, footer }: TemplateProps) {
    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
            {header}
            <main className="flex-1 flex flex-col">
                <section className="flex-1 p-6">{body}</section>
                {footer}
            </main>
        </div>
    );
}
