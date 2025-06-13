'use client'

import { useCallback } from 'react'
import { MessageSquare, RotateCcw, Moon, Sun, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import germanStates from '@/lib/states'
import { Screen } from '@/app/page'
import { SimpleLabel } from './SimpleLabel'
import { twMerge } from 'tailwind-merge'
import { Select } from './AutoComplete'

interface SidebarProps {
  open: boolean
  onFeedbackOpen: () => void
  onOpenChange: (open: boolean) => void
  onScreenChange: (screen: Screen) => void
}

const CheckButton = ({
  onClick,
  checked,
  className,
}: {
  onClick: () => void
  checked: boolean
  className?: string
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        'relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-200 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800',
        checked ? 'bg-blue-700/70' : 'bg-gray-300',
        className
      )}
      role="switch"
      aria-checked={checked}
      aria-label="Toggle dark mode"
    >
      <span
        className={twMerge(
          'inline-block size-4 transform rounded-full bg-white transition-transform duration-200 ease-out',
          checked ? 'translate-x-6' : 'translate-x-1'
        )}
      />
    </button>
  )
}

export function Sidebar({ open, onOpenChange, onFeedbackOpen, onScreenChange }: SidebarProps) {
  const { theme, setTheme } = useTheme()
  const [selectedState, setSelectedState] = useLocalStorage('selected-state', '')

  const isChecked = theme === 'dark'

  const handleResetProgress = useCallback(() => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      localStorage.removeItem('germany-test-stats')
      localStorage.removeItem('question-progress')
      localStorage.removeItem('bookmarked-questions')
      window.location.reload()
    }
  }, [])

  const handleClose = useCallback(() => {
    onOpenChange(false)
  }, [onOpenChange])

  const handleThemeToggle = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  return (
    <>
      <div
        className={twMerge(
          'fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 ease-out',
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
        onClick={handleClose}
        aria-hidden="true"
      />

      <aside
        className={twMerge(
          'fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 z-50 shadow-2xl border-t border-gray-200 dark:border-gray-700 transform transition-all duration-300 ease-out rounded-t-2xl max-h-[85vh] pb-15',
          open ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        <div className="flex justify-center py-3">
          <button
            className="w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full"
            onClick={handleClose}
            aria-label="Close sidebar"
          />
        </div>

        <div className="px-6 pb-6 max-h-[calc(85vh-60px)] overflow-y-auto">
          <header
            className={twMerge(
              'flex items-center justify-between mb-6 transform transition-all duration-300 ease-out',
              open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            )}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Settings</h3>
            <button
              onClick={handleClose}
              aria-label="Close sidebar"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-700/50 rounded-lg transition-all duration-200 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <X className="size-5 text-gray-500 dark:text-gray-400" />
            </button>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div
              className={twMerge(
                'p-5 bg-gray-100 dark:bg-gray-900/50 rounded-2xl gap-2 flex-col z-10',
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              )}
            >
              <label htmlFor="state-select" className="font-light text-gray-700 dark:text-gray-300">
                German State
              </label>
              <SimpleLabel
                label="Includes 10 additional state-specific questions"
                className="mt-1 mb-3"
              />
              <Select
                options={germanStates.map(state => ({ value: state, label: state }))}
                placeholder="Select a state..."
                value={selectedState}
                onChange={setSelectedState}
              />
            </div>

            <section
              className={twMerge(
                'transform transition-all duration-200 ease-out gap-1 flex flex-col z-5',
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              )}
            >
              <div className="flex items-center justify-between py-5 px-5 bg-gray-200/60 dark:bg-gray-900/50 rounded-t-2xl">
                <label className="flex items-center gap-3">
                  {isChecked ? <Moon className="size-4" /> : <Sun className="size-4" />}
                  <span className="font-light text-gray-700 dark:text-gray-300">
                    {isChecked ? 'Dark' : 'Light'} Mode
                  </span>
                </label>
                <CheckButton onClick={handleThemeToggle} checked={isChecked} />
              </div>

              <button
                className="flex items-center gap-3 py-5 px-5 bg-gray-200/60 dark:bg-gray-900/50 hover:bg-gray-50 dark:hover:bg-gray-700/60 active:bg-gray-100 dark:active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer hover:shadow-sm"
                onClick={onFeedbackOpen}
              >
                <MessageSquare className="size-4 flex-shrink-0" />
                <span className="font-light text-gray-700 dark:text-gray-300">Send Feedback</span>
              </button>

              <button
                className="flex items-center gap-3 py-5 px-5 bg-gray-200/60 dark:bg-gray-900/50 rounded-b-2xl text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 active:bg-red-100 dark:active:bg-red-900/30 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer hover:shadow-sm"
                onClick={handleResetProgress}
              >
                <RotateCcw className="size-4 flex-shrink-0" />
                <span className="font-light">Reset All Progress</span>
              </button>
            </section>
          </div>
        </div>
      </aside>
    </>
  )
}
