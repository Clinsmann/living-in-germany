'use server'

import { Resend } from 'resend'
import { EmailQuestion } from './clients'

export const sendFeedbackEmail = async (message: string) => {
  const resend = new Resend(process.env.RESEND_API_KEY)
  return resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'ibeanuhillary@gmail.com',
    subject: 'A new feedback was submitted',
    html: `
    <p>Feedback: ${message}</p>
  `,
  })
}
export const sendQuestionEmail = async (question: EmailQuestion) => {
  const resend = new Resend(process.env.RESEND_API_KEY)
  return resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'ibeanuhillary@gmail.com',
    subject: 'A new question was reported',
    html: `
    <p>Question Number: ${question.questionNumber}</p>
    <p>Question: ${question.questionString}</p>
    <p>Comment: ${question.comment}</p>
  `,
  })
}
