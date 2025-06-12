import { Play, Settings } from "lucide-react"
import { Screen } from "@/app/page"
import { useCallback } from "react"

interface ActionsButtonsProps {
    isPending: boolean
    setSidebarOpen: (open: boolean) => void
    handleScreenChange: (screen: Screen) => void
}

export const ActionsButtons = ({ isPending, handleScreenChange, setSidebarOpen }: ActionsButtonsProps) => {

    const onStartStudying = useCallback(() => {
        handleScreenChange(Screen.STUDY)
    }, [handleScreenChange])

    const onBookmarked = useCallback(() => {
        handleScreenChange(Screen.BOOKMARKED)
    }, [handleScreenChange])

    const onReviewFailed = useCallback(() => {
        handleScreenChange(Screen.FAILED)
    }, [handleScreenChange])

    const onOpenSettings = useCallback(() => {
        setSidebarOpen(true)
    }, [setSidebarOpen])

    return <section className="space-y-3">
        <button
            onClick={onStartStudying}
            disabled={isPending}
            className="group w-full h-14 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
            <Play className="size-5 group-hover:scale-110 transition-transform duration-200" />
            {isPending ? "Loading..." : "Start Studying"}
        </button>

        <div className="grid grid-cols-2 gap-3">
            <button
                onClick={onBookmarked}
                disabled={isPending}
                className="h-12 border-1 dark:bg-gray-900 bg-gray-100  border-gray-300 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-800 text-gray-700 dark:text-white rounded-xl transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1 dark:focus:ring-offset-gray-900 cursor-pointer"
            >
                <span className="text-sm font-medium">Bookmarked</span>
            </button>

            <button
                onClick={onReviewFailed}
                disabled={isPending}
                className="h-12 border-1 dark:bg-gray-900 bg-gray-100 border-gray-300 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-800 text-gray-700 dark:text-white rounded-xl transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1 dark:focus:ring-offset-gray-900 cursor-pointer"
            >
                <span className="text-sm font-medium">Review Failed</span>
            </button>
        </div>

        <div className="flex justify-end items-center">
            <button className="text-gray-900 p-4 rounded-lg dark:bg-gray-800 bg-gray-100 dark:text-white shadow-md cursor-pointer" onClick={onOpenSettings}>
                <Settings className="size-5" />
            </button>
        </div>
    </section>
}