import { SimpleLabel, SimpleTitle } from './SimpleLabel';

interface ProgressCardProps {
  stats: { answered: number; correct: number; incorrect: number; bookmarked: number }
  totalQuestions: number
  progressPercentage: number
}

export const ProgressCard = ({
  stats,
  totalQuestions,
  progressPercentage,
}: ProgressCardProps) => {
  return (
    <section className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg mb-6 p-6 border border-gray-100 dark:border-gray-800 transition-colors duration-200">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Your Progress</h2>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <SimpleTitle title="Overall Progress" />
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
            <SimpleLabel label="Correct" />
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500 dark:text-red-400 tabular-nums">
              {stats.incorrect}
            </div>
            <SimpleLabel label="Incorrect" />
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 tabular-nums">
              {stats.bookmarked}
            </div>
            <SimpleLabel label="Bookmarked" />
          </div>
        </div>
      </div>
    </section>
  )
}
