import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded'
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material'
import Timeline from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import { certificationJourney } from '../../data'
import SectionHeader from '../common/SectionHeader'

const CertificationTimeline = () => (
  <Card
    elevation={0}
    sx={{
      borderRadius: 4,
      border: '1px solid',
      borderColor: 'divider',
      background: 'linear-gradient(180deg, rgba(14,165,233,0.08), transparent)',
      mb: 8,
    }}
  >
    <CardContent sx={{ p: { xs: 3, md: 5 } }}>
      <Stack spacing={4}>
        <SectionHeader
          label="Certification path"
          title="Every learner completes a 4-stage journey with mentor checkpoints."
          description="From onboarding to panel review, you are never alone. We align rubrics, artifacts, and career coaching with your role goals."
        />
        <Timeline position="alternate">
          {certificationJourney.map((step, index) => (
            <TimelineItem key={step.title}>
              <TimelineSeparator>
                <TimelineDot color="primary" variant={index === certificationJourney.length - 1 ? 'filled' : 'outlined'}>
                  <Avatar
                    sx={{
                      bgcolor: index === certificationJourney.length - 1 ? 'primary.main' : 'transparent',
                      width: 32,
                      height: 32,
                    }}
                  >
                    <WorkspacePremiumRoundedIcon fontSize="small" />
                  </Avatar>
                </TimelineDot>
                {index < certificationJourney.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Stack
                  spacing={1}
                  p={3}
                  borderRadius={3}
                  border="1px solid"
                  borderColor="divider"
                  bgcolor="background.paper"
                >
                  <Typography variant="overline" color="text.secondary">
                    {step.duration}
                  </Typography>
                  <Typography variant="h6" fontWeight={600}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                  <Typography variant="body2" fontWeight={600}>
                    Deliverable: {step.deliverable}
                  </Typography>
                </Stack>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Stack>
    </CardContent>
  </Card>
)

export default CertificationTimeline
