"use client"

import { useCallback } from "react"
import { MessageSquare, RotateCcw, Moon, Sun, Home, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useLocalStorage } from "@/hooks/useLocalStorage"

interface SidebarProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onFeedbackOpen: () => void
    onScreenChange: (screen: "dashboard" | "study" | "bookmarked" | "failed") => void
}

const germanStates = [
    "Baden-Württemberg",
    "Bayern",
    "Berlin",
    "Brandenburg",
    "Bremen",
    "Hamburg",
    "Hessen",
    "Mecklenburg-Vorpommern",
    "Niedersachsen",
    "Nordrhein-Westfalen",
    "Rheinland-Pfalz",
    "Saarland",
    "Sachsen",
    "Sachsen-Anhalt",
    "Schleswig-Holstein",
    "Thüringen",
] as const

export function Sidebar({ open, onOpenChange, onFeedbackOpen, onScreenChange }: SidebarProps) {
    const { theme, setTheme } = useTheme()
    const [selectedState, setSelectedState] = useLocalStorage("selected-state", "Bayern")

    const handleResetProgress = useCallback(() => {
        if (confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
            localStorage.removeItem("germany-test-stats")
            localStorage.removeItem("question-progress")
            localStorage.removeItem("bookmarked-questions")
            window.location.reload()
        }
    }, [])

    const handleClose = useCallback(() => {
        onOpenChange(false)
    }, [onOpenChange])

    const handleThemeToggle = useCallback(() => {
        setTheme(theme === "dark" ? "light" : "dark")
    }, [theme, setTheme])

    if (!open) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300"
                onClick={handleClose}
                aria-hidden="true"
            />

            {/* Sidebar */}
            <aside className="fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-800 z-50 shadow-2xl transform transition-transform duration-300 border-r border-gray-200 dark:border-gray-700">
                <div className="p-6 h-full overflow-y-auto">
                    {/* Header */}
                    <header className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Settings</h2>
                        <button
                            onClick={handleClose}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            aria-label="Close sidebar"
                        >
                            <X className="size-5 text-gray-500 dark:text-gray-400" />
                        </button>
                    </header>

                    <div className="space-y-6">
                        {/* Navigation & Actions */}
                        <section>
                            <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">Navigation & Actions</h3>
                            <nav className="space-y-2">
                                <button
                                    onClick={() => onScreenChange("dashboard")}
                                    className="w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-600 rounded-lg transition-colors duration-200 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <Home className="size-4 flex-shrink-0" />
                                    <span className="font-medium">Dashboard</span>
                                </button>

                                <button
                                    onClick={onFeedbackOpen}
                                    className="w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-600 rounded-lg transition-colors duration-200 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <MessageSquare className="size-4 flex-shrink-0" />
                                    <span className="font-medium">Send Feedback</span>
                                </button>

                                <button
                                    onClick={handleResetProgress}
                                    className="w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-red-50 dark:hover:bg-red-900/20 active:bg-red-100 dark:active:bg-red-900/30 rounded-lg transition-colors duration-200 text-red-600 dark:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                                >
                                    <RotateCcw className="size-4 flex-shrink-0" />
                                    <span className="font-medium">Reset All Progress</span>
                                </button>
                            </nav>
                        </section>

                        {/* Separator */}
                        <hr className="border-gray-200 dark:border-gray-700" />

                        {/* State Selection */}
                        <section>
                            <label htmlFor="state-select" className="text-sm font-medium mb-3 block text-gray-700 dark:text-gray-300">
                                German State
                            </label>
                            <select
                                id="state-select"
                                value={selectedState}
                                onChange={(e) => setSelectedState(e.target.value)}
                                className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                            >
                                {germanStates.map((state) => (
                                    <option key={state} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                Includes 10 additional state-specific questions
                            </p>
                        </section>

                        {/* Separator */}
                        <hr className="border-gray-200 dark:border-gray-700" />

                        {/* Theme Toggle */}
                        <section className="flex items-center justify-between">
                            <label className="text-sm font-medium flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                {theme === "dark" ? <Moon className="size-4" /> : <Sun className="size-4" />}
                                <span>Dark Mode</span>
                            </label>
                            <button
                                onClick={handleThemeToggle}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${theme === "dark" ? "bg-blue-600" : "bg-gray-200"
                                    }`}
                                role="switch"
                                aria-checked={theme === "dark"}
                                aria-label="Toggle dark mode"
                            >
                                <span
                                    className={`inline-block size-4 transform rounded-full bg-white transition-transform duration-200 ${theme === "dark" ? "translate-x-6" : "translate-x-1"
                                        }`}
                                />
                            </button>
                        </section>
                    </div>
                </div>
            </aside>
        </>
    )
}
