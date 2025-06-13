import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { getFeedbackEmailHtml, getQuestionEmailHtml } from './feedbackEmail'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export const databaseTables = {
  questions: 'questions',
  feedback: 'feedback',
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

export const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export const sendFeedbackEmail = async (message: string) =>
  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'ibeanuhillary@gmail.com',
    subject: 'A new feedback was submitted',
    html: getFeedbackEmailHtml(message),
  })

export const sendQuestionEmail = async (question: Question, comment: string) =>
  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'ibeanuhillary@gmail.com',
    subject: 'A new question was added',
    html: getQuestionEmailHtml(question, comment),
  })
