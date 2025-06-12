import Image from "next/image";
import flag from "../../app/german-flag.svg";
import { Settings } from "lucide-react";

export default function Header({
    toggleSettings,
}: {
    toggleSettings: () => void
}) {
    return (
        <header className="mb-8 flex flex-col items-center gap-4">
            <div className="flex flex-row items-center gap-4 justify-between w-full">
                <div className="rounded-md overflow-hidden shadow-md">
                    <Image src={flag} alt="deutschland flag" width={50} />
                </div>

                <button className="text-gray-900 p-4 rounded-md dark:bg-gray-800 bg-gray-200 dark:text-white shadow-md" onClick={toggleSettings}>
                    <Settings className="size-5" />
                </button>
            </div>

            <h1 className="text-md font-bold text-gray-900 dark:text-white mb-1">
                Einbürgerungstest Deutsch
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Master your citizenship test preparation</p>
        </header>)
}