"use client";

import { useEffect, useState } from "react";

export default function useHistory() {
    const [history, setHistory] = useState<string[]>([]);

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

    return {
        history,
        setHistory,
        handleDelete
    }

}
