import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material'
import type { Course } from '../../types'

interface CourseCardProps {
  course: Course
  compact?: boolean
}

const CourseCard = ({ course, compact = false }: CourseCardProps) => (
  <Card
    elevation={0}
    sx={{
      height: '100%',
      borderRadius: 3,
      border: '1px solid',
      borderColor: 'divider',
      background:
        'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(236,72,153,0.04))',
    }}
  >
    <CardActionArea sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Stack direction="row" justifyContent="space-between" spacing={2} alignItems="flex-start">
          <Typography variant="overline" color="text.secondary">
            {course.category} • {course.level}
          </Typography>
          <Chip label={course.duration} size="small" color="secondary" variant="outlined" />
        </Stack>
        <Stack spacing={1} mt={1.5}>
          <Typography variant="h5" fontWeight={700}>
            {course.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {course.description}
          </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {course.tags.map((tag) => (
                <Chip key={tag} label={tag} size="small" variant="outlined" color="primary" />
            ))}
          </Stack>
        </Stack>
        {!compact && course.progress !== undefined && (
          <Stack spacing={1} mt={3}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2" color="text.secondary">
                In-flight cohort
              </Typography>
              <Typography variant="body2" fontWeight={600}>
                {course.progress}%
              </Typography>
            </Stack>
            <LinearProgress value={course.progress} variant="determinate" />
          </Stack>
        )}
        <Box
          mt={3}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          rowGap={1}
        >
          <Typography variant="body2" color="text.secondary">
            Next cohort • {course.nextCohort}
          </Typography>
          <Typography variant="body2" fontWeight={600}>
            {course.learners.toLocaleString()} learners · {course.rating.toFixed(1)}★
          </Typography>
        </Box>
      </CardContent>
    </CardActionArea>
  </Card>
)

export default CourseCard
