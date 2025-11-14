import Grid from '@mui/material/Unstable_Grid2'
import { Button, Stack } from '@mui/material'
import { featuredCourses } from '../../data'
import CourseCard from '../common/CourseCard'
import SectionHeader from '../common/SectionHeader'

const CourseShowcase = () => (
  <Stack spacing={4} mb={8}>
    <SectionHeader
      label="Cohort spotlight"
      title="Build production-grade skills with curated mentor squads."
      description="Every cohort pairs async missions with live mentor studios, design reviews, and exam-grade rubrics."
      action={
        <Button variant="outlined" size="large">
          View all courses
        </Button>
      }
    />
    <Grid container spacing={3}>
      {featuredCourses.map((course) => (
        <Grid xs={12} md={4} key={course.id}>
          <CourseCard course={course} />
        </Grid>
      ))}
    </Grid>
  </Stack>
)

export default CourseShowcase
