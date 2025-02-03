import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Template from "../components/template/Template";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/footer/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gerador de Qr-code",
  description: "Esta é uma aplicação para gerar Qr-code",
  icons:{
    icon:"/public/favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/public/favicon.png" />
      </head>
      <body
        className={`${montserrat.variable} ${montserrat.variable} antialiased bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <Template
          header={<Sidebar />}
          body={children}
          footer={<Footer />}
        />
      </body>
    </html>
  );
}
