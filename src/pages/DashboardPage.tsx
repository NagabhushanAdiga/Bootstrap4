import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded'
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded'
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded'
import Grid from '@mui/material/Grid'
import {
  Card,
  CardContent,
  Chip,
  Divider,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import { featuredCourses } from '../data'
import CourseCard from '../components/common/CourseCard'
import SectionHeader from '../components/common/SectionHeader'

const DashboardPage = () => (
  <Stack spacing={4}>
    <SectionHeader
      label="Learner dashboard"
      title="Track your momentum and upcoming certification checkpoints."
      description="Live telemetry from your cohorts, capstone milestones, and mentor feedback loops."
    />
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 3 }}>
        <Card>
          <CardContent>
            <Stack spacing={1}>
              <Typography variant="overline" color="text.secondary">
                Learning velocity
              </Typography>
              <Typography variant="h4">87%</Typography>
              <Typography variant="body2" color="text.secondary">
                Goals completed this sprint
              </Typography>
              <LinearProgress variant="determinate" value={87} />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <Card>
          <CardContent>
            <Stack spacing={1}>
              <Typography variant="overline" color="text.secondary">
                Capstone stage
              </Typography>
              <Typography variant="h4">Panel prep</Typography>
              <Typography variant="body2" color="text.secondary">
                Review scheduled Feb 12
              </Typography>
              <Chip label="Next: Dry run" color="secondary" variant="outlined" />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <Card>
          <CardContent>
            <Stack spacing={1}>
              <Typography variant="overline" color="text.secondary">
                Mentor sessions
              </Typography>
              <Typography variant="h4">3</Typography>
              <Typography variant="body2" color="text.secondary">
                Upcoming this week
              </Typography>
              <Chip icon={<ScheduleRoundedIcon />} label="Next: Wed 10:00" variant="outlined" />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <Card>
          <CardContent>
            <Stack spacing={1}>
              <Typography variant="overline" color="text.secondary">
                Career signal
              </Typography>
              <Typography variant="h4">Green</Typography>
              <Typography variant="body2" color="text.secondary">
                Portfolio ready in 2 weeks
              </Typography>
              <Chip icon={<TrendingUpRoundedIcon />} label="+4 recruiter matches" color="success" />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 8 }}>
        <Card>
          <CardContent>
            <Stack spacing={3}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h6">Active cohorts</Typography>
                <Chip label="2 cohorts" />
              </Stack>
              <Grid container spacing={2}>
                {featuredCourses.slice(0, 2).map((course) => (
                  <Grid key={course.id} size={{ xs: 12 }}>
                    <CourseCard course={course} />
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h6">Upcoming checkpoints</Typography>
              <List dense>
                <ListItem>
                  <ListItemAvatar>
                    <Chip icon={<CalendarMonthRoundedIcon />} label="Jan 20" size="small" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="UX heuristics lab review"
                    secondary="Upload artifact & receive feedback"
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Chip icon={<InsightsRoundedIcon />} label="Jan 27" size="small" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Observability deep dive"
                    secondary="Deliver dashboards & incident retro"
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Chip icon={<CalendarMonthRoundedIcon />} label="Feb 12" size="small" />
                  </ListItemAvatar>
                  <ListItemText primary="Capstone panel dry run" secondary="Mentor feedback session" />
                </ListItem>
              </List>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Stack>
)

export default DashboardPage
