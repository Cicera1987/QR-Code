import { Icons } from "../assets";
import { MenuProps } from "./MenuItems";

export const menuItems: MenuProps[] = [
    { title: "Gerar QR-code", icon: <Icons.QrCode />, href: "/" },
    { title: "Histórico", icon: <Icons.TimeLine />, href: "/history" },
    { title: "Config", icon: <Icons.Settings />, href: "/config" },
    { title: "Contato", icon: <Icons.Settings />, href: "/contact" }
];
