import Link from "next/link";
import { ReactNode } from "react";

export interface MenuProps {
    title: string;
    icon: ReactNode;
    href: string;
    onClick?:() => void
}

export default function MenuItems({ title, icon, href, onClick }: MenuProps) {
    return (
        <div className="mb-4">
            <Link href={href} className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition">
                <span className="text-xl">{icon}</span>
                <span className="text-white">{title}</span>
            </Link>
        </div>
    );
}
