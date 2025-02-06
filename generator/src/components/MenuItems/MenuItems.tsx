import { ReactNode } from "react";

export interface MenuProps {
    title: string;
    icon: ReactNode;
    href: string;
    onClick?: () => void;
    darkMode?: boolean;
}

export default function MenuItems({ title, icon, onClick, darkMode, href }: MenuProps) {
    const buttonClasses = darkMode
        ? "bg-bgSidebar"
        : "bg-bgSidebar";

    return (
        <div className="mb-4">
            <Link href={href}>
            <div
                className={`flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition ${buttonClasses}`}
                onClick={onClick}
            >
                <span className="text-xl">{icon}</span>
                <span className="text-white">{title}</span>
            </div>
            </Link>
        </div>
    );
}
