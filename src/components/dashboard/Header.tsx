import Image from "next/image";
import flag from "@/public/germany-flag";

export default function Header() {
    return (
        <header className="mb-8 flex flex-row">
            <div className="size-16 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Image src={flag} alt="logo" width={64} height={64} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                Living in Germany Test
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Master your citizenship test preparation</p>
        </header>)
}