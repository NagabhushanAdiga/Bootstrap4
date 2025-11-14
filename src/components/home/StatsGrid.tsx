import Grid from '@mui/material/Grid'
import { Card, CardContent, Stack, Typography } from '@mui/material'
import { platformStats } from '../../data'

const StatsGrid = () => (
  <Grid container spacing={3} mb={8}>
    {platformStats.map((stat) => (
      <Grid size={{ xs: 12, sm: 6, md: 3 }} key={stat.label}>
        <Card
          elevation={0}
          sx={{
            height: '100%',
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            background: 'linear-gradient(180deg, rgba(79,70,229,0.05), transparent)',
          }}
        >
          <CardContent>
            <Stack spacing={1}>
              <Typography variant="h4" fontWeight={700}>
                {stat.value}
              </Typography>
              <Typography variant="subtitle2">{stat.label}</Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.helper}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
)

export default StatsGrid
