export const getFeedbackEmailHtml = (message: string) => {
  return `
    <p>Feedback: ${message}</p>
  `
}

export const getQuestionEmailHtml = (
  question: {
    questionNumber: number
    questionString: string
  },
  comment: string
) => {
  return `
    <p>Question Number: ${question.questionNumber}</p>
    <p>Question: ${question.questionString}</p>
    <p>Comment: ${comment}</p>
  `
}
