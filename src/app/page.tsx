'use client'

import { useState, useTransition, useMemo, useEffect, useCallback } from 'react'
import { Sidebar } from '@/components/SidebarNavigation'
import { QuestionScreen } from '@/components/QuestionScreen'
import { FeedbackModal } from '@/components/FeedbackModal'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import Header from '@/components/dashboard/Header'
import { ProgressCard } from '../components/ProgressCard'
import { ActionsButtons } from '@/components/dashboard/ActionsButtons'
import { BackgroundPattern } from '@/components/BackgroundPattern'
import { Screen } from '@/components/SidebarNavigation'
import { DevelopedBy } from '../components/DevelopedBy'
import { GermanyTestStats, LocalStorageKeys } from '@/lib/clients'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [currentScreen, setCurrentScreen] = useLocalStorage<Screen>(
    LocalStorageKeys.CurrentScreen,
    Screen.DASHBOARD
  )
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [feedbackOpen, setFeedbackOpen] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [stats, setStats] = useLocalStorage<GermanyTestStats>(LocalStorageKeys.GermanyTestStats, {
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

  const updateStats = (newStats: Partial<GermanyTestStats>) => {
    setStats(prev => ({ ...prev, ...newStats }))
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

  const openDashboard = useCallback(() => {
    setCurrentScreen(Screen.DASHBOARD)
    setSidebarOpen(false)
  }, [setCurrentScreen, setSidebarOpen])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (currentScreen !== Screen.DASHBOARD) {
    return (
      <PageWrapper
        sideNavigation={sideNavigation}
        feedbackOpen={feedbackOpen}
        setFeedbackOpen={setFeedbackOpen}
      >
        <QuestionScreen
          mode={currentScreen}
          onMenuClick={openDashboard}
          onStatsUpdate={updateStats}
          stats={stats}
        />
        <DevelopedBy />
      </PageWrapper>
    )
  }

  return (
    <PageWrapper
      sideNavigation={sideNavigation}
      feedbackOpen={feedbackOpen}
      setFeedbackOpen={setFeedbackOpen}
    >
      <main className="container mx-auto px-4 py-6 max-w-md">
        <Header />
        <ProgressCard
          stats={stats}
          totalQuestions={totalQuestions}
          progressPercentage={progressPercentage}
        />
        {/* <AdSpace /> */}
        <ActionsButtons
          isPending={isPending}
          handleScreenChange={handleScreenChange}
          setSidebarOpen={setSidebarOpen}
        />
        <DevelopedBy />
      </main>
    </PageWrapper>
  )
}

const PageWrapper = ({
  children,
  sideNavigation,
  feedbackOpen,
  setFeedbackOpen,
}: {
  children: React.ReactNode
  sideNavigation: React.ReactNode
  feedbackOpen: boolean
  setFeedbackOpen: (open: boolean) => void
}) => {
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
