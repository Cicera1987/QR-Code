import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export interface MenuProps extends LinkProps {
    title: string;
    icon: ReactNode;
}

export default function MenuItems({ title, icon, ...rest }: MenuProps) {
    return (
        <div className="mb-4">
            <Link {...rest} className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition">
                <span className="text-xl">{icon}</span>
                <span className="text-white">{title}</span>
            </Link>
        </div>
    );
}
