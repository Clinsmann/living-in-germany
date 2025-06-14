'use client'

import { useState, useCallback, useMemo, forwardRef } from 'react'
import { Bookmark, BookmarkCheck, Flag, Languages, ChevronRight, ChevronLeft } from 'lucide-react'
import { ReportModal } from '@/components/ReportModal'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { generalQuestions } from '@/lib/generalQuestions'
import { stateSpecificQuestions } from '../lib/stateQuestions'
import { twMerge } from 'tailwind-merge'

const QuestionButton = ({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void
  disabled: boolean
  children: React.ReactNode
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  )
}

const ButtonIcon = forwardRef<
  HTMLButtonElement,
  { children?: React.ReactNode; onClick?: () => void; className?: string }
>(({ children, onClick, className, ...props }, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      onClick={onClick}
      className={twMerge(
        `flex items-center p-2.5 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-full active:bg-gray-200 dark:active:bg-gray-600`,
        className
      )}
    >
      {children}
    </button>
  )
})

ButtonIcon.displayName = 'ButtonIcon'

interface QuestionScreenProps {
  mode: 'study' | 'bookmarked' | 'failed'
  onMenuClick: () => void
  onStatsUpdate: (stats: {
    answered: number
    correct: number
    incorrect: number
    bookmarked: number
  }) => void
  stats: {
    answered: number
    correct: number
    incorrect: number
    bookmarked: number
  }
}

const useGetQuestions = () => {
  const [selectedState] = useLocalStorage('selected-state', '')
  const stateQuestions = stateSpecificQuestions[selectedState]

  // const bookmarkedQuestions = useLocalStorage<number[]>('bookmarked-questions', [])
  // const failedQuestions = useLocalStorage<number[]>('failed-questions', [])

  // if (mode === 'bookmarked') {
  //   return bookmarkedQuestions.map(id => generalQuestions.find(q => q.id === id) || stateQuestions.find(q => q.id === id))
  // }

  // if (mode === 'failed') {
  //   return failedQuestions.map(id => generalQuestions.find(q => q.id === id) || stateQuestions.find(q => q.id === id))
  // }

  return [...generalQuestions, ...(stateQuestions || [])]
}

export function QuestionScreen({ mode, onMenuClick, onStatsUpdate, stats }: QuestionScreenProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useLocalStorage(
    'current-question-index',
    0
  )
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [showEnglish, setShowEnglish] = useState(false)
  const [reportOpen, setReportOpen] = useState(false)

  const [bookmarkedQuestions, setBookmarkedQuestions] = useLocalStorage<number[]>(
    'bookmarked-questions',
    []
  )
  const [answeredQuestions, setAnsweredQuestions] = useLocalStorage<Record<number, boolean>>(
    'question-progress',
    {}
  )

  const questions = useGetQuestions()

  const totalQuestions = questions.length
  const currentQuestion = questions[currentQuestionIndex as number]
  const isBookmarked = bookmarkedQuestions.includes(currentQuestion.id)
  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100

  const handleAnswerSelect = useCallback(
    (answerKey: string) => {
      if (showAnswer) return

      setSelectedAnswer(answerKey)
      setShowAnswer(true)

      const isCorrect = answerKey === currentQuestion.correctAnswer
      const wasAnswered = answeredQuestions[currentQuestion.id]

      // Update stats
      const newStats = { ...stats }
      if (!wasAnswered) {
        newStats.answered += 1
      }
      if (isCorrect) {
        newStats.correct += wasAnswered && !answeredQuestions[currentQuestion.id] ? 0 : 1
      } else {
        newStats.incorrect += wasAnswered && answeredQuestions[currentQuestion.id] ? 0 : 1
      }

      onStatsUpdate(newStats)
      setAnsweredQuestions(prev => ({ ...prev, [currentQuestion.id]: isCorrect }))
    },
    [
      showAnswer,
      currentQuestion.correctAnswer,
      currentQuestion.id,
      answeredQuestions,
      stats,
      onStatsUpdate,
      setAnsweredQuestions,
    ]
  )

  const handlePrevious = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
      setSelectedAnswer(null)
      setShowAnswer(false)
      setShowEnglish(false)
    }
  }, [currentQuestionIndex])

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowAnswer(false)
      setShowEnglish(false)
    }
  }, [currentQuestionIndex, totalQuestions])

  const handleBookmark = useCallback(() => {
    if (isBookmarked) {
      setBookmarkedQuestions(prev => prev.filter(id => id !== currentQuestion.id))
      onStatsUpdate({ ...stats, bookmarked: stats.bookmarked - 1 })
    } else {
      setBookmarkedQuestions(prev => [...prev, currentQuestion.id])
      onStatsUpdate({ ...stats, bookmarked: stats.bookmarked + 1 })
    }
  }, [isBookmarked, setBookmarkedQuestions, currentQuestion.id, onStatsUpdate, stats])

  const screenTitle = useMemo(() => {
    switch (mode) {
      case 'bookmarked':
        return 'Bookmarked Questions'
      case 'failed':
        return 'Review Failed Questions'
      default:
        return 'Study Mode'
    }
  }, [mode])

  const getQuestionText = useMemo(() => {
    const [german, english] = currentQuestion.question.split(' :: ')
    return {
      german,
      english,
    }
  }, [currentQuestion.question])

  return (
    <>
      <header className="bg-white dark:bg-gray-800 sticky top-0 z-10 transition-colors duration-200">
        <div className="container mx-auto px-4 py-4 max-w-md">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <button
                onClick={onMenuClick}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-600 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Open menu"
              >
                <ChevronLeft className="size-6 text-gray-600 dark:text-gray-400" />
              </button>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {screenTitle}
              </span>
            </div>

            <div className="flex gap-1">
              <ButtonIcon
                onClick={() => setShowEnglish(!showEnglish)}
                className={showEnglish ? 'bg-blue-50 dark:bg-gray-700/50' : ''}
                aria-pressed={showEnglish}
                aria-label="Toggle English translation"
              >
                <Languages
                  className={twMerge(
                    'size-4 text-blue-600',
                    showEnglish ? 'dark:text-blue-400' : 'dark:text-gray-500'
                  )}
                />
              </ButtonIcon>

              <ButtonIcon
                onClick={handleBookmark}
                className={twMerge(isBookmarked ? 'bg-yellow-50 dark:bg-yellow-900/20' : '')}
                aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
                aria-pressed={isBookmarked}
              >
                {isBookmarked ? (
                  <BookmarkCheck className="size-4 text-yellow-600 dark:text-yellow-400" />
                ) : (
                  <Bookmark className="size-4 text-gray-400 dark:text-gray-500" />
                )}
              </ButtonIcon>

              <ButtonIcon
                onClick={() => setReportOpen(true)}
                aria-label="Report question issue"
                className="hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                aria-pressed={reportOpen}
              >
                <Flag className="size-4 text-gray-400 hover:text-red-600 dark:text-gray-500 dark:hover:text-red-400" />
              </ButtonIcon>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span className="tabular-nums">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
            <span className="tabular-nums">{Math.round(progressPercentage)}%</span>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
            <div
              className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 mb-4">
          <h4 className="text-md font-medium text-gray-900 dark:text-white mb-6">
            {getQuestionText.german}
            {showEnglish && (
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {' '}
                {getQuestionText.english}
              </span>
            )}
          </h4>

          <div className="space-y-3">
            {Object.entries(currentQuestion.options).map(([key, option]) => {
              const isSelected = selectedAnswer === key
              const isCorrect = key === currentQuestion.correctAnswer
              const showCorrect = showAnswer && isCorrect
              const showIncorrect = showAnswer && isSelected && !isCorrect

              const [german, english] = option.split(' :: ')
              return (
                <button
                  key={key}
                  onClick={() => handleAnswerSelect(key)}
                  disabled={showAnswer}
                  className={`w-full px-3 py-3 text-left rounded-xl border transition-all duration-200 ${
                    showAnswer
                      ? showCorrect
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                        : showIncorrect
                          ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                          : 'bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600'
                      : isSelected
                        ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-sm font-light ${
                        showAnswer
                          ? showCorrect
                            ? 'bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100'
                            : showIncorrect
                              ? 'bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                          : isSelected
                            ? 'bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      {key}
                    </span>
                    <span
                      className={`text-sm ${
                        showAnswer
                          ? showCorrect
                            ? 'text-green-800 dark:text-green-100'
                            : showIncorrect
                              ? 'text-red-800 dark:text-red-100'
                              : 'text-gray-600 dark:text-gray-300'
                          : isSelected
                            ? 'text-blue-800 dark:text-blue-100'
                            : 'text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      {german}
                      {showEnglish && (
                        <span className="text-gray-500 dark:text-gray-400 text-sm"> {english}</span>
                      )}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <QuestionButton onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
            <ChevronLeft className="size-4" />
            Previous
          </QuestionButton>

          <QuestionButton
            onClick={handleNext}
            disabled={currentQuestionIndex === totalQuestions - 1}
          >
            Next
            <ChevronRight className="size-4" />
          </QuestionButton>
        </div>

        {/* <AdSpace /> */}
      </main>

      <ReportModal
        open={reportOpen}
        onOpenChange={setReportOpen}
        questionId={currentQuestion.id}
        questionString={currentQuestion.question}
      />
    </>
  )
}
