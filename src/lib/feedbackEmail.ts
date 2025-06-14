import { EmailQuestion } from './clients'

export const getFeedbackEmailHtml = (message: string) => {
  return `
    <p>Feedback: ${message}</p>
  `
}

export const getQuestionEmailHtml = (question: EmailQuestion) => {
  return `
    <p>Question Number: ${question.questionNumber}</p>
    <p>Question: ${question.questionString}</p>
    <p>Comment: ${question.comment}</p>
  `
}
