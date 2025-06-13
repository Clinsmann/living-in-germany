import { useCallback } from 'react'
import { twMerge } from 'tailwind-merge'
import { Play, Settings } from 'lucide-react'
import { Screen } from '@/app/page'

const Button = ({ children, onClick, disabled, className }: { children: React.ReactNode, onClick: () => void, disabled?: boolean, className?: string }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={twMerge(className, "h-12 border-1 dark:bg-gray-900 bg-gray-100 border-gray-300 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-white rounded-xl transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1 dark:focus:ring-offset-gray-900 cursor-pointer")}>
      {children}
    </button>
  )
}

interface ActionsButtonsProps {
  isPending: boolean
  setSidebarOpen: (open: boolean) => void
  handleScreenChange: (screen: Screen) => void
}

export const ActionsButtons = ({
  isPending,
  handleScreenChange,
  setSidebarOpen,
}: ActionsButtonsProps) => {
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

  return (
    <section className="space-y-3">
      <button
        onClick={onStartStudying}
        disabled={isPending}
        className="group w-full h-14 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      >
        <Play className="size-5 group-hover:scale-110 transition-transform duration-200" />
        {isPending ? 'Loading...' : 'Start Studying'}
      </button>

      <div className="grid grid-cols-2 gap-3">
        <Button
          onClick={onBookmarked}
          disabled={isPending}
        >
          <span className="text-sm font-medium">Bookmarked</span>
        </Button>

        <Button
          onClick={onReviewFailed}
          disabled={isPending}
        >
          <span className="text-sm font-medium">Review Failed</span>
        </Button>
      </div>

      <div className="flex justify-end items-center">
        <Button
          className="px-4"
          onClick={onOpenSettings}
        >
          <Settings className="size-5" />
        </Button>
      </div>
    </section>
  )
}
