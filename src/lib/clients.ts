import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { getFeedbackEmailHtml, getQuestionEmailHtml } from './feedbackEmail'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export const sendFeedbackEmail = async (message: string) =>
  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'ibeanuhillary@gmail.com',
    subject: 'A new feedback was submitted',
    html: getFeedbackEmailHtml(message),
  })

export const sendQuestionEmail = async (question: EmailQuestion) =>
  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'ibeanuhillary@gmail.com',
    subject: 'A new question was reported',
    html: getQuestionEmailHtml(question),
  })

export const databaseTables = {
  questions: 'questions',
  feedback: 'feedback',
}

export interface EmailQuestion {
  questionNumber: number
  questionString: string
  comment: string
}

export interface Question {
  id: number
  question: string
  options: {
    A: string
    B: string
    C: string
    D: string
  }
  correctAnswer: string
}

export interface GermanyTestStats {
  answered: number
  correct: number
  incorrect: number
  bookmarked: number
}

export enum LocalStorageKeys {
  BookmarkedQuestions = 'bookmarked-questions',
  FailedQuestions = 'failed-questions',
  QuestionProgress = 'question-progress',
  ShowEnglish = 'show-english',
  SelectedState = 'selected-state',
  CurrentScreen = 'current-screen',
  GermanyTestStats = 'germany-test-stats',
  CurrentQuestionIndex = 'current-question-index',
}

export enum QuestionMode {
  Study = 'study',
  Bookmarked = 'bookmarked',
  Failed = 'failed',
}
