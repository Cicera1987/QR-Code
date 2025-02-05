"use client";

import useLogic from "../../hooks/useLogic";

export default function LanguageSwitcher() {

    const { language, handleChangeLanguage } = useLogic()

    return (
        <div className="flex justify-end w-full">
            <select
                value={language}
                onChange={handleChangeLanguage}
                className="px-4 py-1 bg-white border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg transition-all ease-in-out duration-200 hover:bg-gray-100"
            >
                <option value="pt">🇧🇷 PT</option>
                <option value="en">🇺🇸 EN</option>
            </select>

        </div>
    );
}
