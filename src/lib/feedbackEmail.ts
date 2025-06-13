import { Question } from './clients'

export const getFeedbackEmailHtml = (message: string) => {
  return `
    <p>Feedback: ${message}</p>
  `
}

export const getQuestionEmailHtml = (question: Question, comment: string) => {
  return `
    <p>Question: ${question.question}</p>
    <p>Options: ${question.options}</p>
    <p>Correct Answer: ${question.correctAnswer}</p>
    <p>Comment: ${comment}</p>
  `
}
