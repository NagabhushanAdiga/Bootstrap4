import Grid from '@mui/material/Unstable_Grid2'
import {
  Card,
  CardContent,
  Chip,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material'
import { learningPaths } from '../../data'
import SectionHeader from '../common/SectionHeader'

const LearningPathPlanner = () => (
  <Stack spacing={4} mb={8}>
    <SectionHeader
      label="Learning plans"
      title="Mix and match curated pathways to fit your role goals."
      description="Select a pathway, align a mentor squad, and unlock certification tracks that match your aspirations."
    />
    <Grid container spacing={3}>
      {learningPaths.map((path) => (
        <Grid xs={12} md={6} key={path.id}>
          <Card elevation={0} sx={{ borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
            <CardContent sx={{ p: 4 }}>
              <Stack spacing={3}>
                <Stack spacing={1}>
                  <Typography variant="h5" fontWeight={700}>
                    {path.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {path.summary}
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    {path.recommendedTracks.map((track) => (
                      <Chip key={track} label={track} size="small" />
                    ))}
                  </Stack>
                </Stack>
                <Stepper orientation="vertical" activeStep={path.steps.length} connector={null}>
                  {path.steps.map((step) => (
                    <Step key={step.label}>
                      <StepLabel>
                        <Stack spacing={0.5}>
                          <Typography variant="subtitle1" fontWeight={600}>
                            {step.label}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {step.description}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {step.duration}
                          </Typography>
                        </Stack>
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Stack>
)

export default LearningPathPlanner
