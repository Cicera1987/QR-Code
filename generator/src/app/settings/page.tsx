"use client"

import useTheme from "../../hooks/useTheme"

export default function Settings(){
    const {darkMode}=useTheme()

    return(
        <div className={`p-4 w-full ${darkMode ? "bg-dark-background text-white" : "bg-background text-gray-900"}`}>
            <><h2>Configuração</h2></>
        </div>
        
    )
}