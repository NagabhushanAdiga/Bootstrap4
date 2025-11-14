import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded'
import Grid from '@mui/material/Grid'
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import { featuredCourses, recommendedCourses } from '../data'
import CourseCard from '../components/common/CourseCard'
import SectionHeader from '../components/common/SectionHeader'

const tracks = ['Frontend', 'Backend', 'AI', 'Cloud']
const levels = ['Beginner', 'Intermediate', 'Advanced']

const CoursesPage = () => (
  <Stack spacing={4}>
    <SectionHeader
      label="Course catalog"
      title="Curated curriculum built with hiring partners."
      description="Mix live studios with async missions. Every course ends with a graded artifact you can ship to stakeholders."
    />
    <Card>
      <CardContent>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <TextField fullWidth placeholder="Search courses, skills, or mentors" />
            <Button variant="outlined" startIcon={<FilterListRoundedIcon />}>
              Advanced filters
            </Button>
          </Stack>
          <Divider />
          <Stack spacing={2}>
            <Typography variant="subtitle2">Focus areas</Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {tracks.map((track) => (
                <Chip key={track} label={track} variant="outlined" />
              ))}
            </Stack>
          </Stack>
          <Stack spacing={2}>
            <Typography variant="subtitle2">Level</Typography>
            <ToggleButtonGroup exclusive aria-label="course level" size="small">
              {levels.map((level) => (
                <ToggleButton key={level} value={level}>
                  {level}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Stack>
        </Stack>
      </CardContent>
    </Card>

    <Box>
      <Typography variant="h6" mb={2}>
        Featured cohorts
      </Typography>
      <Grid container spacing={3}>
        {featuredCourses.map((course) => (
          <Grid key={course.id} size={{ xs: 12, md: 4 }}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </Box>

    <Box>
      <Typography variant="h6" mb={2}>
        Recommended for you
      </Typography>
      <Grid container spacing={3}>
        {recommendedCourses.map((course) => (
          <Grid key={course.id} size={{ xs: 12, md: 6 }}>
            <CourseCard course={course} compact />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Stack>
)

export default CoursesPage
