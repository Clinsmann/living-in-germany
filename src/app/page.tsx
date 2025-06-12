"use client"

import { useState, useTransition, useMemo } from "react"
import { Sidebar } from "@/components/SidebarNavigation"
import { QuestionScreen } from "@/components/QuestionScreen"
import { FeedbackModal } from "@/components/FeedbackModal"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import Header from "@/components/dashboard/Header"
import { ProgressCard } from "../components/ProgressCard"
import { AdSpace } from "@/components/AdSpace"
import { ActionsButtons } from "@/components/dashboard/ActionsButtons"
import { BackgroundPattern } from "@/components/BackgroundPattern"

export enum Screen {
  DASHBOARD = "dashboard",
  STUDY = "study",
  BOOKMARKED = "bookmarked",
  FAILED = "failed",
}

interface Stats {
  answered: number
  correct: number
  incorrect: number
  bookmarked: number
}

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.DASHBOARD)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [feedbackOpen, setFeedbackOpen] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [stats, setStats] = useLocalStorage<Stats>("germany-test-stats", {
    answered: 0,
    correct: 0,
    incorrect: 0,
    bookmarked: 0,
  })

  const totalQuestions = 310
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

  const sideNavigation = useMemo(() => {
    return (
      <Sidebar
        open={sidebarOpen}
        onOpenChange={setSidebarOpen}
        onFeedbackOpen={() => setFeedbackOpen(true)}
        onScreenChange={handleScreenChange}
      />
    )
  }, [sidebarOpen, setSidebarOpen, handleScreenChange, feedbackOpen])

  if (currentScreen !== Screen.DASHBOARD) {
    return (
      <PageWrapper sideNavigation={sideNavigation} feedbackOpen={feedbackOpen} setFeedbackOpen={setFeedbackOpen}>
        <QuestionScreen
          mode={currentScreen}
          onMenuClick={() => setSidebarOpen(true)}
          onStatsUpdate={updateStats}
          stats={stats}
        />
      </PageWrapper>
    )
  }

  return (
    <PageWrapper sideNavigation={sideNavigation} feedbackOpen={feedbackOpen} setFeedbackOpen={setFeedbackOpen}>
      <main className="container mx-auto px-4 py-6 max-w-md">
        <Header toggleSettings={() => setSidebarOpen(true)} />
        <ProgressCard stats={stats} totalQuestions={totalQuestions} progressPercentage={progressPercentage} />
        <AdSpace />
        <ActionsButtons isPending={isPending} handleScreenChange={handleScreenChange} setSidebarOpen={setSidebarOpen} />
      </main>
    </PageWrapper>
  )
}


const PageWrapper = ({ children, sideNavigation, feedbackOpen, setFeedbackOpen }: { children: React.ReactNode, sideNavigation: React.ReactNode, feedbackOpen: boolean, setFeedbackOpen: (open: boolean) => void }) => {
  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <BackgroundPattern />
      <div className="relative z-10">
        {sideNavigation}
        {children}
        <FeedbackModal open={feedbackOpen} onOpenChange={setFeedbackOpen} />
      </div>
    </div>
  )
}