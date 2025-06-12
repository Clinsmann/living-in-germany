"use client"

import { useState, useTransition } from "react"
import { BookOpen, BookmarkCheck, AlertCircle, Play, BarChart3 } from "lucide-react"
import { Sidebar } from "@/components/SidebarNavigation"
import { QuestionScreen } from "@/components/QuestionScreen"
import { FeedbackModal } from "@/components/FeedbackModal"
import { useLocalStorage } from "@/hooks/useLocalStorage"

type Screen = "dashboard" | "study" | "bookmarked" | "failed"

interface Stats {
  answered: number
  correct: number
  incorrect: number
  bookmarked: number
}

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [feedbackOpen, setFeedbackOpen] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [stats, setStats] = useLocalStorage<Stats>("germany-test-stats", {
    answered: 0,
    correct: 0,
    incorrect: 0,
    bookmarked: 0,
  })

  const totalQuestions = 310 // 300 federal + 10 state questions
  const progressPercentage = (stats.answered / totalQuestions) * 100

  const handleScreenChange = (screen: Screen) => {
    startTransition(() => {
      setCurrentScreen(screen)
      setSidebarOpen(false)
    })
  }

  const updateStats = (newStats: Partial<Stats>) => {
    setStats((prev) => ({ ...prev, ...newStats }))
  }

  if (currentScreen !== "dashboard") {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Sidebar
          open={sidebarOpen}
          onOpenChange={setSidebarOpen}
          onFeedbackOpen={() => setFeedbackOpen(true)}
          onScreenChange={handleScreenChange}
        />
        <QuestionScreen
          mode={currentScreen}
          onMenuClick={() => setSidebarOpen(true)}
          onStatsUpdate={updateStats}
          stats={stats}
        />
        <FeedbackModal open={feedbackOpen} onOpenChange={setFeedbackOpen} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Sidebar
        open={sidebarOpen}
        onOpenChange={setSidebarOpen}
        onFeedbackOpen={() => setFeedbackOpen(true)}
        onScreenChange={handleScreenChange}
      />

      <main className="container mx-auto px-4 py-6 max-w-md">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="size-16 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
            <BookOpen className="size-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
            Living in Germany Test
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Master your citizenship test preparation</p>
        </header>

        {/* Progress Card */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg mb-6 p-6 border border-gray-100 dark:border-gray-700 transition-colors duration-200">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="size-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Your Progress</h2>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600 dark:text-gray-400">Overall Progress</span>
                <span className="font-medium text-gray-900 dark:text-white tabular-nums">
                  {stats.answered}/{totalQuestions}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 tabular-nums">
                  {stats.correct}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Correct</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500 dark:text-red-400 tabular-nums">{stats.incorrect}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Incorrect</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                  {stats.bookmarked}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Bookmarked</div>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Space */}
        <aside className="bg-orange-50 dark:bg-orange-900/20 rounded-xl shadow-sm mb-6 p-4 text-center border border-orange-100 dark:border-orange-800/30 transition-colors duration-200">
          <div className="text-sm text-gray-600 dark:text-gray-400">Advertisement</div>
          <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Your ad could be here</div>
        </aside>

        {/* Action Buttons */}
        <section className="space-y-3">
          <button
            onClick={() => handleScreenChange("study")}
            disabled={isPending}
            className="group w-full h-14 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50 text-white text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            <Play className="size-5 group-hover:scale-110 transition-transform duration-200" />
            {isPending ? "Loading..." : "Start Studying"}
          </button>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleScreenChange("bookmarked")}
              disabled={isPending}
              className="group h-12 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 active:bg-blue-100 dark:active:bg-blue-900/30 disabled:opacity-50 text-gray-900 dark:text-white rounded-xl transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              <BookmarkCheck className="size-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium">Bookmarked</span>
            </button>

            <button
              onClick={() => handleScreenChange("failed")}
              disabled={isPending}
              className="group h-12 border-2 border-red-200 dark:border-red-800 hover:border-red-300 dark:hover:border-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 active:bg-red-100 dark:active:bg-red-900/30 disabled:opacity-50 text-gray-900 dark:text-white rounded-xl transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              <AlertCircle className="size-4 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-medium">Review Failed</span>
            </button>
          </div>
        </section>

        {/* Menu Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="w-full mt-6 py-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg"
        >
          Settings & More
        </button>
      </main>

      <FeedbackModal open={feedbackOpen} onOpenChange={setFeedbackOpen} />
    </div>
  )
}
