import { jsPDF } from "jspdf";
import QRCode from "qrcode";

export const generatePDF = (qrValue: string) => {
    const doc = new jsPDF(); 
    doc.text("QR Code Gerado", 20, 20); 

    const canvas = document.createElement("canvas");

    QRCode.toCanvas(canvas, qrValue, function (error) {
        if (error) {
            console.error(error);
            return;
        }
        doc.addImage(canvas.toDataURL(), "PNG", 20, 30, 180, 180);
        doc.save("QRCode.pdf");
    });
};
