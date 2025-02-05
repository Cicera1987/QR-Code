
import path from "path";
import fs from "fs/promises"

export async function getTranslation(lang:string){
    
    const filePath = path.join(process.cwd(), "public/locales", `${lang}.json`);
    const file = await fs.readFile(filePath, "utf-8");

    return JSON.parse(file)
}