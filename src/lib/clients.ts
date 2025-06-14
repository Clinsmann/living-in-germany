import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

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
