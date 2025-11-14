export interface Course {
  id: string
  title: string
  description: string
  category: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  lessons: number
  tags: string[]
  nextCohort: string
  progress?: number
  learners: number
  rating: number
  skills: string[]
}

export interface CertificationTrack {
  id: string
  title: string
  description: string
  durationWeeks: number
  credential: string
  skillFocus: string[]
  outcomes: string[]
  capstone: string
}

export interface Milestone {
  title: string
  description: string
  duration: string
  deliverable: string
}

export interface LearningPath {
  id: string
  title: string
  summary: string
  steps: {
    label: string
    description: string
    duration: string
  }[]
  recommendedTracks: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  quote: string
  completedTrack: string
  avatarColor: string
}

export interface PlatformStat {
  label: string
  value: string
  helper: string
}
