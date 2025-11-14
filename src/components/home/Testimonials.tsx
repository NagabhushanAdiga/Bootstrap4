import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded'
import Grid from '@mui/material/Grid'
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material'
import { testimonials } from '../../data'
import SectionHeader from '../common/SectionHeader'

const Testimonials = () => (
  <Stack spacing={4}>
    <SectionHeader
      label="Learner outcomes"
      title="Leaders across engineering, cloud, and AI rely on Learning OS."
      description="Every alumni defends a capstone to a mentor panel and leaves with artifacts they can share with their teams."
    />
    <Grid container spacing={3}>
      {testimonials.map((testimonial) => (
        <Grid key={testimonial.id} size={{ xs: 12, md: 4 }}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
              height: '100%',
              background: 'linear-gradient(180deg, rgba(236,72,153,0.08), transparent)',
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Stack spacing={3}>
                <FormatQuoteRoundedIcon color="secondary" />
                <Typography variant="body1">{testimonial.quote}</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar sx={{ bgcolor: testimonial.avatarColor }}>{testimonial.name.charAt(0)}</Avatar>
                  <Stack spacing={0}>
                    <Typography fontWeight={600}>{testimonial.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.role} • {testimonial.company}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {testimonial.completedTrack}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Stack>
)

export default Testimonials
