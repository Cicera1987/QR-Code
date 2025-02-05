"use client";

import { ChangeEvent, useEffect, useState } from "react";

export default function useGenerateQrCode() {
    const [inputValue, setInputValue] = useState("");
    const [qrCodeData, setQrCodeData] = useState<string | null>(null);

    useEffect(() => {
        const savedData = localStorage.getItem("qrCodeData");
        if (savedData) {
            setQrCodeData(savedData);
            setInputValue(savedData);
        }
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleGenerateQRCode = () => {
        setQrCodeData(inputValue);
        localStorage.setItem("qrCodeData", inputValue);

        const savedHistory = localStorage.getItem("qrHistory");
        const historyArray = savedHistory ? JSON.parse(savedHistory) : [];
        historyArray.push(inputValue);
        localStorage.setItem("qrHistory", JSON.stringify(historyArray));

        setInputValue("");
    };

    const handleClearInput = () => {
        setInputValue("");
        setQrCodeData(null);
        localStorage.removeItem("qrCodeData");
    };
    return {
        inputValue,
        setInputValue,
        qrCodeData,
        setQrCodeData,
        handleChange,
        handleClearInput,
        handleGenerateQRCode
    }

}
