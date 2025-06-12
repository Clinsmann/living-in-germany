import Image from "next/image";
import flag from "../../app/german-flag.svg";
import { Settings } from "lucide-react";

export default function Header({
    toggleSettings,
}: {
    toggleSettings: () => void
}) {
    return (
        <header className="mb-8 flex flex-row items-center gap-4 justify-between">
            <div className="flex flex-row items-center gap-4">
                <div className="rounded-md overflow-hidden">
                    <Image src={flag} alt="deutschland flag" width={48} />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-md font-bold text-gray-900 dark:text-white mb-1">
                        Einbürgerungstest Deutsch
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Master your citizenship test preparation</p>
                </div>
            </div>
            <div className="flex flex-row gap-2">
                <button className="text-white p-3 rounded-md dark:bg-gray-800" onClick={toggleSettings}>
                    <Settings className="size-5" />
                </button>
            </div>
        </header>)
}