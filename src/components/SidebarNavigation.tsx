"use client"

import { useCallback } from "react"
import { MessageSquare, RotateCcw, Moon, Sun, Home, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import germanStates from "@/lib/states"
import { Screen } from "@/app/page"
import { SimpleLabel } from "./SimpleLabel"

interface SidebarProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onFeedbackOpen: () => void
    onScreenChange: (screen: Screen) => void
}

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

    return (
        <>
            {/* Backdrop with smooth fade */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 ease-out ${open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={handleClose}
                aria-hidden="true"
            />

            {/* Bottom Sheet Sidebar */}
            <aside
                className={`fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 z-50 shadow-2xl border-t border-gray-200 dark:border-gray-700 transform transition-all duration-300 ease-out rounded-t-2xl max-h-[85vh] ${open ? "translate-y-0" : "translate-y-full"
                    }`}
            >
                {/* Handle bar for visual indication */}
                <div className="flex justify-center py-3">
                    <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                </div>

                <div className="px-6 pb-6 max-h-[calc(85vh-60px)] overflow-y-auto">
                    {/* Header with staggered animation */}
                    <header
                        className={`flex items-center justify-between mb-6 transform transition-all duration-300 ease-out ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                            }`}
                        style={{ transitionDelay: open ? "100ms" : "0ms" }}
                    >
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Settings</h2>
                        <button
                            onClick={handleClose}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            aria-label="Close sidebar"
                        >
                            <X className="size-5 text-gray-500 dark:text-gray-400" />
                        </button>
                    </header>

                    {/* Content in a responsive grid layout */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {/* Navigation & Actions with staggered animation */}
                        <section
                            className={`transform transition-all duration-300 ease-out ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                                }`}
                            style={{ transitionDelay: open ? "150ms" : "0ms" }}
                        >
                            <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">Navigation & Actions</h3>
                            <nav className="space-y-2">
                                <button
                                    onClick={() => onScreenChange(Screen.DASHBOARD)}
                                    className="w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-600 rounded-lg transition-all duration-200 ease-out hover:translate-x-1 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <Home className="size-4 flex-shrink-0" />
                                    <span className="font-medium">Dashboard</span>
                                </button>

                                <button
                                    onClick={onFeedbackOpen}
                                    className="w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-600 rounded-lg transition-all duration-200 ease-out hover:translate-x-1 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <MessageSquare className="size-4 flex-shrink-0" />
                                    <span className="font-medium">Send Feedback</span>
                                </button>

                                <button
                                    onClick={handleResetProgress}
                                    className="w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-red-50 dark:hover:bg-red-900/20 active:bg-red-100 dark:active:bg-red-900/30 rounded-lg transition-all duration-200 ease-out hover:translate-x-1 text-red-600 dark:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                                >
                                    <RotateCcw className="size-4 flex-shrink-0" />
                                    <span className="font-medium">Reset All Progress</span>
                                </button>
                            </nav>
                        </section>

                        {/* State Selection with staggered animation */}
                        <section
                            className={`transform transition-all duration-300 ease-out ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                                }`}
                            style={{ transitionDelay: open ? "200ms" : "0ms" }}
                        >
                            <label htmlFor="state-select" className="text-sm font-medium mb-3 block text-gray-700 dark:text-gray-300">
                                German State
                            </label>
                            <select
                                id="state-select"
                                value={selectedState}
                                onChange={(e) => setSelectedState(e.target.value)}
                                className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-out hover:border-blue-300 dark:hover:border-blue-500"
                            >
                                {germanStates.map((state) => (
                                    <option key={state} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                            <SimpleLabel label="Includes 10 additional state-specific questions" />
                        </section>

                        {/* Theme Toggle with staggered animation */}
                        <section
                            className={`transform transition-all duration-300 ease-out ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                                }`}
                            style={{ transitionDelay: open ? "250ms" : "0ms" }}
                        >
                            <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">Appearance</h3>
                            <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-600 rounded-lg">
                                <label className="text-sm font-medium flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                    {theme === "dark" ? <Moon className="size-4" /> : <Sun className="size-4" />}
                                    <span>Dark Mode</span>
                                </label>
                                <button
                                    onClick={handleThemeToggle}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-200 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${theme === "dark" ? "bg-blue-600" : "bg-gray-200"
                                        }`}
                                    role="switch"
                                    aria-checked={theme === "dark"}
                                    aria-label="Toggle dark mode"
                                >
                                    <span
                                        className={`inline-block size-4 transform rounded-full bg-white transition-transform duration-200 ease-out ${theme === "dark" ? "translate-x-6" : "translate-x-1"
                                            }`}
                                    />
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </aside>
        </>
    )
}
