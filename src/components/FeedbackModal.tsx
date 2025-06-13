'use client'

import type React from 'react'
import { useState, useCallback } from 'react'
import { MessageSquare, X } from 'lucide-react'
import { databaseTables, sendFeedbackEmail, supabase } from '@/lib/clients'
import { PrimaryButton } from './dashboard/ActionsButtons'

interface FeedbackModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function FeedbackModal({ open, onOpenChange }: FeedbackModalProps) {
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!message.trim()) return

      setIsSubmitting(true)

      try {
        const { error } = await supabase.from(databaseTables.feedback).insert({
          description: message,
          email: '',
        })

        if (error) throw error

        await sendFeedbackEmail(message)

        setMessage('')
        onOpenChange(false)
        alert('Thank you for your feedback!')
      } catch (error) {
        console.error('Failed to submit feedback:', error)
        alert('Failed to submit feedback. Please try again.')
      } finally {
        setIsSubmitting(false)
      }
    },
    [message, onOpenChange]
  )

  const handleClose = useCallback(() => {
    onOpenChange(false)
  }, [onOpenChange])

  if (!open) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-all duration-300"
        onClick={handleClose}
        aria-hidden="true"
      />

      <div className="fixed inset-0 z-50 flex items-start justify-center p-4">
        <div
          className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md transition-colors duration-200"
          role="dialog"
          aria-labelledby="feedback-title"
          aria-modal="true"
        >
          <header className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <MessageSquare className="size-5 text-blue-600 dark:text-blue-400" />
              <h2
                id="feedback-title"
                className="text-md font-semibold text-gray-900 dark:text-white"
              >
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

          <form onSubmit={handleSubmit} className="p-4 space-y-2">
            <textarea
              id="feedback"
              placeholder="Tell us about your experience, report bugs, or suggest improvements..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg bg-gray-200/70 dark:bg-gray-700/60 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none transition-colors duration-200 focus:outline-none shadow-sm"
              rows={4}
              required
              disabled={isSubmitting}
            />

            <PrimaryButton
              type="submit"
              disabled={!message.trim() || isSubmitting}
              className="flex-1 !h-12 !w-auto !px-8 !text-sm ml-auto"
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send</span>
                </>
              )}
            </PrimaryButton>
          </form>
        </div>
      </div>
    </>
  )
}
