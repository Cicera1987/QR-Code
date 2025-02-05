"use client";

import QRCode from "react-qr-code";
import useTheme from "../../hooks/useTheme";
import useTranslation from "../../hooks/useTranslation";
import useGenerateQrCode from "../../hooks/useGenerateQrCode";

export default function QRCodeGenerator() {
    const {
        inputValue,
        qrCodeData,
        handleChange,
        handleGenerateQRCode,
        handleClearInput
     } = useGenerateQrCode()

    const { darkMode } = useTheme();
    const t = useTranslation();

    return (
        <div className={`container min-h-screen flex flex-col justify-center items-center py-10 ${darkMode ? "bg-dark-background text-white" : "bg-background text-gray-900"}`}>
            <h2 className="text-3xl font-bold text-primary mb-4">
                {t.generator?.title}
            </h2>
            <input
                type="text"
                placeholder={t.generator?.placeholder}
                value={inputValue}
                onChange={handleChange}
                className="p-3 w-3/4 md:w-1/2 border border-gray-400 rounded-lg mb-4"
            />
            <div className="flex space-x-4 mb-4">
                <button
                    onClick={handleGenerateQRCode}
                    className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
                >
                    {t.generator?.save}
                </button>
                <button
                    onClick={handleClearInput}
                    className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors"
                >
                    {t.generator?.toClean}
                </button>
            </div>
            {qrCodeData && (
                <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
                    <QRCode value={qrCodeData} size={256} />
                </div>
            )}
        </div>
    );
}
