import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded'
import { Box, Button, Stack, Typography } from '@mui/material'

const CTASection = () => (
  <Box
    sx={{
      mt: 8,
      borderRadius: 4,
      p: { xs: 4, md: 6 },
      background:
        'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(236,72,153,0.25)), linear-gradient(90deg, rgba(24,24,27,0.95), rgba(39,39,42,0.9))',
      color: 'common.white',
    }}
  >
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={4}
      alignItems={{ xs: 'flex-start', md: 'center' }}
      justifyContent="space-between"
    >
      <Stack spacing={1}>
        <Typography variant="h4" fontWeight={800}>
          Ready to lead your next transformation?
        </Typography>
        <Typography variant="body1" color="rgba(255,255,255,0.8)">
          Submit your learning goals and we will match you with a mentor squad in under 24 hours.
        </Typography>
      </Stack>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Button variant="contained" color="secondary" size="large" endIcon={<ArrowOutwardRoundedIcon />}>
          Apply for access
        </Button>
        <Button variant="outlined" color="inherit" size="large">
          Talk to admissions
        </Button>
      </Stack>
    </Stack>
  </Box>
)

export default CTASection
