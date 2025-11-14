import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded'
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded'
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded'
import Grid from '@mui/material/Unstable_Grid2'
import { Avatar, Box, Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import { heroHighlights } from '../../data'

const HeroSection = () => (
  <Box
    sx={{
      borderRadius: 4,
      p: { xs: 4, md: 6 },
      mb: 8,
      background:
        'radial-gradient(circle at top, rgba(79,70,229,0.18), transparent 55%), linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.85))',
      color: 'common.white',
    }}
  >
    <Grid container spacing={4}>
      <Grid xs={12} md={7}>
        <Stack spacing={3}>
          <Chip
            label="Online learning & certification platform"
            color="primary"
            variant="outlined"
            sx={{ alignSelf: 'flex-start' }}
          />
          <Typography variant="h2" fontWeight={800}>
            Cohort-based learning that ends with a certification interview panel.
          </Typography>
          <Typography variant="h6" color="rgba(255,255,255,0.7)">
            Guided by industry mentors, you will prototype, ship, and defend solutions that mirror
            real executive reviews. Every sprint ends with a measurable artifact.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button variant="contained" size="large" color="secondary">
              Explore cohorts
            </Button>
            <Button variant="outlined" size="large" color="inherit">
              Download syllabus
            </Button>
          </Stack>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} mt={2}>
            {heroHighlights.map((item) => (
              <Stack key={item.label} spacing={0.5}>
                <Typography variant="h5" fontWeight={700}>
                  {item.value}
                </Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.7)">
                  {item.label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Grid>
      <Grid xs={12} md={5}>
        <Stack spacing={3}>
          <Card
            sx={{
              background: 'rgba(15,23,42,0.8)',
              borderRadius: 4,
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'common.white',
            }}
          >
            <CardContent>
              <Stack spacing={3}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    <WorkspacePremiumRoundedIcon />
                  </Avatar>
                  <Stack>
                    <Typography variant="subtitle1">Certification readiness</Typography>
                    <Typography variant="body2" color="rgba(255,255,255,0.7)">
                      Real panel rubrics & on-demand feedback.
                    </Typography>
                  </Stack>
                </Stack>
                <Stack spacing={2}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="h4" fontWeight={700}>
                      10-week journey
                    </Typography>
                    <Chip label="Hybrid" variant="outlined" color="secondary" />
                  </Stack>
                  <Stack spacing={1}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <VerifiedRoundedIcon color="secondary" />
                      <Typography variant="body2">Live mentor studios twice per week</Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <RocketLaunchRoundedIcon color="secondary" />
                      <Typography variant="body2">Portfolio artifacts reviewed in 48 hrs</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
          <Card
            sx={{
              borderRadius: 4,
              background: 'rgba(79,70,229,0.15)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'common.white',
            }}
          >
            <CardContent>
              <Stack spacing={1.5}>
                <Typography variant="subtitle2" color="rgba(255,255,255,0.8)">
                  Flexible pathways
                </Typography>
                <Typography variant="h5" fontWeight={700}>
                  Pair up with a mentor squad aligned to your role.
                </Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.7)">
                  Choose from engineering, product, cloud, and AI leadership tracks.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Grid>
    </Grid>
  </Box>
)

export default HeroSection
