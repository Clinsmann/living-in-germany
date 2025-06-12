"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { MessageSquare, Send, X } from "lucide-react"

interface FeedbackModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function FeedbackModal({ open, onOpenChange }: FeedbackModalProps) {
    const [message, setMessage] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault()
            if (!message.trim()) return

            setIsSubmitting(true)

            try {
                // Simulate API call
                await new Promise((resolve) => setTimeout(resolve, 1000))

                setMessage("")
                onOpenChange(false)
                alert("Thank you for your feedback!")
            } catch (error) {
                console.error("Failed to submit feedback:", error)
                alert("Failed to submit feedback. Please try again.")
            } finally {
                setIsSubmitting(false)
            }
        },
        [message, onOpenChange],
    )

    const handleClose = useCallback(() => {
        onOpenChange(false)
    }, [onOpenChange])

    if (!open) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-all duration-300"
                onClick={handleClose}
                aria-hidden="true"
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md border border-gray-200 dark:border-gray-700 transition-colors duration-200"
                    role="dialog"
                    aria-labelledby="feedback-title"
                    aria-modal="true"
                >
                    <header className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2">
                            <MessageSquare className="size-5 text-blue-600 dark:text-blue-400" />
                            <h2 id="feedback-title" className="text-lg font-semibold text-gray-900 dark:text-white">
                                Send Feedback
                            </h2>
                        </div>
                        <button
                            onClick={handleClose}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-600 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            aria-label="Close dialog"
                        >
                            <X className="size-5 text-gray-500 dark:text-gray-400" />
                        </button>
                    </header>

                    <form onSubmit={handleSubmit} className="p-6">
                        <div className="mb-4">
                            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Your Message
                            </label>
                            <textarea
                                id="feedback"
                                placeholder="Tell us about your experience, report bugs, or suggest improvements..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors duration-200"
                                rows={4}
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={handleClose}
                                disabled={isSubmitting}
                                className="flex-1 px-4 py-2.5 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 active:bg-gray-100 dark:active:bg-gray-600 disabled:opacity-50 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-gray-500"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={!message.trim() || isSubmitting}
                                className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {isSubmitting ? (
                                    <span>Sending...</span>
                                ) : (
                                    <>
                                        <Send className="size-4" />
                                        <span>Send</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
