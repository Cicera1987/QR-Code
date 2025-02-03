import { Icons } from "../assets"
import { MenuProps } from "./MenuItems"

export const menuItems: MenuProps[] = [
    {title: "Gerar QR-code", icon: <Icons.QrCode/>, link:"/"},
    {title: "Histórico", icon: <Icons.TimeLine />, link: "/history" },
    {title: "Config", icon: <Icons.Settings />, link: "/" }
]