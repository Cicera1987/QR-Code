'use client'

import QRCode from "react-qr-code";
import { useEffect, useState } from 'react';


export default function QRCodeGenerator() {
    const [inputValue, setInputValue] = useState('');
    const [qrCodeData, setQrCodeData] = useState < string | null > (null);
;

    useEffect(() => {
        const savedData = localStorage.getItem('qrCodeData');
        if (savedData) {
            setQrCodeData(savedData);
            setInputValue(savedData);
        }
    }, []);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleGenerateQRCode = () => {
        setQrCodeData(inputValue);
        localStorage.setItem('qrCodeData', inputValue);
    };

    return (
        <div className="container min-h-screen text-foreground flex flex-col justify-center items-center py-10">
            <h1 className="text-3xl font-bold text-primary mb-4">Gerador de QR Code</h1>
            <input
                type="text"
                placeholder="Digite o telefone, e-mail, CPF, CNPJ ou qualquer texto"
                value={inputValue}
                onChange={handleChange}
                className="p-3 w-3/4 md:w-1/2 border border-foreground rounded-lg mb-4"
            />
            <button
                onClick={handleGenerateQRCode}
                className="bg-primary text-white px-6 py-3 rounded-full hover:bg-highlight transition-colors"
            >
                Gerar QR Code
            </button>

            {qrCodeData && (
                <div className="mt-6">
                    <QRCode value={qrCodeData} />
                </div>
            )}
        </div>
    );
}