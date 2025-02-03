"use client";

import { Icons } from "@/components/assets";
import { generatePDF } from "@/components/utils/generatePDF";
import useTheme from "@/hooks/useTheme";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

export default function History() {
    const [history, setHistory] = useState < string[] > ([]);
    const { darkMode } = useTheme();

    useEffect(() => {
        const savedHistory = localStorage.getItem("qrHistory");
        if (savedHistory) {
            setHistory(JSON.parse(savedHistory));
        }
    }, []);

    const handleDelete = (index: number) => {
        const updatedHistory = history.filter((_, i) => i !== index);
        setHistory(updatedHistory);
        localStorage.setItem("qrHistory", JSON.stringify(updatedHistory));
    };

    return (
        <div className={`p-4  ${darkMode ? "bg-dark-background text-white" : "bg-background text-gray-900"}`}>
            <h1 className="text-3xl font-bold text-primary mb-6 text-center">Histórico de QR Codes Gerados</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {history.length > 0 ? (
                    history.map((item, index) => (
                        <div
                            key={index}
                            className={`p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${darkMode ? "bg-background text-gray-900" : "bg-dark-background text-white"}`}
                        >
                            <div className={`flex flex-col items-center ${darkMode ? "bg-background text-gray-900" : "bg-dark-background text-white"} `}>
                                <QRCode value={item} size={128} />
                                <p className="mt-4 text-center truncate w-full">
                                    <span className="font-bold">Título:</span> {item}
                                </p>
                            </div>
                            <div className="flex justify-between w-full mt-4">
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <Icons.Delete />
                                </button>
                                <button
                                    onClick={() => generatePDF(item)}
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    <Icons.Save />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Nenhum QR Code gerado ainda.</p>
                )}
            </div>
        </div>
    );
}
