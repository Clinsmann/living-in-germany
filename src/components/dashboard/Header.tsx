import Image from "next/image";
import flag from "../../app/german-flag.svg";

export default function Header({
    toggleSettings,
}: {
    toggleSettings: () => void
}) {
    return (
        <header className="mb-10 gap-4 text-center flex flex-col items-center">
            <div className="rounded-md overflow-hidden shadow-md">
                <Image src={flag} alt="deutschland flag" width={50} />
            </div>

            <h1 className="text-xl font-bold text-gray-900 dark:text-white my-0">
                Einbürgerungstest Deutsch
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm -my-2">Master your citizenship test preparation</p>
        </header>)
}