import HeroSection from '../components/home/HeroSection'
import StatsGrid from '../components/home/StatsGrid'
import CourseShowcase from '../components/home/CourseShowcase'
import CertificationTimeline from '../components/home/CertificationTimeline'
import LearningPathPlanner from '../components/home/LearningPathPlanner'
import Testimonials from '../components/home/Testimonials'
import CTASection from '../components/home/CTASection'

const HomePage = () => (
  <>
    <HeroSection />
    <StatsGrid />
    <CourseShowcase />
    <CertificationTimeline />
    <LearningPathPlanner />
    <Testimonials />
    <CTASection />
  </>
)

export default HomePage
