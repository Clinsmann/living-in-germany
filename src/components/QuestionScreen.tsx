'use client'

import { useState, useCallback, useMemo } from 'react'
import {
  Home,
  Bookmark,
  BookmarkCheck,
  Flag,
  Languages,
  Check,
  X,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react'
import { ReportModal } from '@/components/ReportModal'
import { useLocalStorage } from '@/hooks/useLocalStorage'

interface Question {
  id: number
  question: string
  questionEn: string
  options: string[]
  optionsEn: string[]
  correct: number
}

interface QuestionScreenProps {
  mode: 'study' | 'bookmarked' | 'failed'
  onMenuClick: () => void
  onStatsUpdate: (stats: any) => void
  stats: any
}

// Mock questions data
const mockQuestions: Question[] = [
  {
    id: 1,
    question: 'Wann ist die Bundesrepublik Deutschland gegründet worden?',
    questionEn: 'When was the Federal Republic of Germany founded?',
    options: ['1947', '1948', '1949', '1950'],
    optionsEn: ['1947', '1948', '1949', '1950'],
    correct: 2,
  },
  {
    id: 2,
    question: 'Welche Farben hat die deutsche Flagge?',
    questionEn: 'What colors does the German flag have?',
    options: ['schwarz-rot-gold', 'rot-weiß-schwarz', 'schwarz-gelb-rot', 'grün-weiß-rot'],
    optionsEn: ['black-red-gold', 'red-white-black', 'black-yellow-red', 'green-white-red'],
    correct: 0,
  },
]

export function QuestionScreen({ mode, onMenuClick, onStatsUpdate, stats }: QuestionScreenProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
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

  const currentQuestion = mockQuestions[currentQuestionIndex]
  const isBookmarked = bookmarkedQuestions.includes(currentQuestion.id)
  const totalQuestions = mockQuestions.length
  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100

  const handleAnswerSelect = useCallback(
    (answerIndex: number) => {
      if (showAnswer) return

      setSelectedAnswer(answerIndex)
      setShowAnswer(true)

      const isCorrect = answerIndex === currentQuestion.correct
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
      currentQuestion.correct,
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10 transition-colors duration-200">
        <div className="container mx-auto px-4 py-4 max-w-md">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={onMenuClick}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-600 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Open menu"
            >
              <Home className="size-5 text-gray-600 dark:text-gray-400" />
            </button>

            <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
              {screenTitle}
            </span>

            <div className="flex gap-1">
              <button
                onClick={() => setShowEnglish(!showEnglish)}
                className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-600 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  showEnglish ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                }`}
                aria-label="Toggle English translation"
                aria-pressed={showEnglish}
              >
                <Languages className="size-4 text-blue-600 dark:text-blue-400" />
              </button>
              <button
                onClick={handleBookmark}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-600 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
                aria-pressed={isBookmarked}
              >
                {isBookmarked ? (
                  <BookmarkCheck className="size-4 text-yellow-600 dark:text-yellow-400" />
                ) : (
                  <Bookmark className="size-4 text-gray-400 dark:text-gray-500" />
                )}
              </button>
              <button
                onClick={() => setReportOpen(true)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-600 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label="Report question issue"
              >
                <Flag className="size-4 text-gray-400 hover:text-red-600 dark:text-gray-500 dark:hover:text-red-400 transition-colors duration-200" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span className="tabular-nums">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-1 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </header>

      {/* Question Content */}
      <main className="container mx-auto px-4 py-6 max-w-md">
        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md mb-6 p-5 border border-gray-100 dark:border-gray-700 transition-colors duration-200">
          <div className="mb-4">
            <h1 className="text-base font-medium text-gray-900 dark:text-white leading-relaxed">
              {currentQuestion.question}
            </h1>
            {showEnglish && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 italic leading-relaxed">
                {currentQuestion.questionEn}
              </p>
            )}
          </div>

          <div className="space-y-3" role="radiogroup" aria-label="Answer options">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = index === currentQuestion.correct
              const showResult = showAnswer && (isSelected || isCorrect)

              let buttonClass =
                'w-full p-3 text-left border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 '

              if (showAnswer) {
                if (isCorrect) {
                  buttonClass +=
                    'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200'
                } else if (isSelected && !isCorrect) {
                  buttonClass +=
                    'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200'
                } else {
                  buttonClass +=
                    'border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400'
                }
              } else {
                buttonClass +=
                  'border-gray-200 dark:border-gray-600 hover:border-blue-300 hover:bg-blue-50 dark:hover:border-blue-500 dark:hover:bg-blue-900/20 text-gray-900 dark:text-white active:bg-blue-100 dark:active:bg-blue-900/30'
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={buttonClass}
                  disabled={showAnswer}
                  role="radio"
                  aria-checked={isSelected}
                  aria-label={`Option ${String.fromCharCode(65 + index)}: ${option}`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <div className="size-6 rounded border border-gray-300 dark:border-gray-500 flex items-center justify-center text-xs font-medium flex-shrink-0">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium break-words">{option}</div>
                        {showEnglish && (
                          <div className="text-sm opacity-70 mt-1 break-words">
                            {currentQuestion.optionsEn[index]}
                          </div>
                        )}
                      </div>
                    </div>
                    {showResult && (
                      <div className="ml-2 flex-shrink-0">
                        {isCorrect ? (
                          <Check className="size-5 text-green-600 dark:text-green-400" />
                        ) : isSelected ? (
                          <X className="size-5 text-red-600 dark:text-red-400" />
                        ) : null}
                      </div>
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          <nav className="flex gap-3 mt-6">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="flex-1 px-4 py-2.5 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 active:bg-gray-100 dark:active:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <ChevronLeft className="size-4" />
              <span className="font-medium">Previous</span>
            </button>
            <button
              onClick={handleNext}
              disabled={currentQuestionIndex === totalQuestions - 1}
              className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span className="font-medium">Next</span>
              <ChevronRight className="size-4" />
            </button>
          </nav>
        </article>

        {/* Ad Banner */}
        <aside className="bg-orange-50 dark:bg-orange-900/20 rounded-xl shadow-sm p-4 text-center border border-orange-100 dark:border-orange-800/30 transition-colors duration-200">
          <div className="text-sm text-gray-600 dark:text-gray-400">Advertisement</div>
          <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Banner ad space</div>
        </aside>
      </main>

      <ReportModal open={reportOpen} onOpenChange={setReportOpen} questionId={currentQuestion.id} />
    </div>
  )
}
