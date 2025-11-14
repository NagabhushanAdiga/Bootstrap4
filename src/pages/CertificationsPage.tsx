import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import Grid from '@mui/material/Unstable_Grid2'
import {
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import { certificationTracks } from '../data'
import SectionHeader from '../components/common/SectionHeader'

const CertificationsPage = () => (
  <Stack spacing={4}>
    <SectionHeader
      label="Certification studio"
      title="Industry-recognized credentials anchored in real portfolio work."
      description="Every track maps to cross-functional deliverables, exam-grade reviews, and tailored outcome plans."
    />

    <Grid container spacing={3}>
      {certificationTracks.map((track) => (
        <Grid xs={12} md={4} key={track.id}>
          <Card elevation={0} sx={{ height: '100%', borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
            <CardContent sx={{ p: 4 }}>
              <Stack spacing={2}>
                <Chip label={`${track.durationWeeks} weeks`} color="primary" variant="outlined" />
                <Typography variant="h5" fontWeight={700}>
                  {track.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {track.description}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {track.skillFocus.map((skill) => (
                    <Chip key={skill} label={skill} size="small" />
                  ))}
                </Stack>
                <Typography variant="subtitle2">What you will deliver</Typography>
                <List dense>
                  {track.outcomes.map((outcome) => (
                    <ListItem key={outcome} disableGutters>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleRoundedIcon color="success" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={outcome} />
                    </ListItem>
                  ))}
                </List>
                <Typography variant="body2" fontWeight={600}>
                  Capstone: {track.capstone}
                </Typography>
                <Chip label={track.credential} color="secondary" variant="outlined" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Stack>
)

export default CertificationsPage
