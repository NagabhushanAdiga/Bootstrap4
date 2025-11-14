import { Chip, Stack, Typography } from '@mui/material'
import type { ReactNode } from 'react'

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  action?: ReactNode
  align?: 'left' | 'center'
}

const SectionHeader = ({
  label,
  title,
  description,
  action,
  align = 'left',
}: SectionHeaderProps) => (
  <Stack
    direction={{ xs: 'column', md: 'row' }}
    justifyContent={align === 'center' ? 'center' : 'space-between'}
    alignItems={align === 'center' ? 'center' : 'flex-start'}
    spacing={2}
    textAlign={align}
  >
    <Stack spacing={1} flex={1} maxWidth={{ md: '65%' }}>
      {label && (
        <Chip
          label={label}
          color="primary"
          variant="outlined"
          sx={{ alignSelf: align === 'center' ? 'center' : 'flex-start' }}
        />
      )}
      <Typography variant="h4" fontWeight={700}>
        {title}
      </Typography>
      {description && (
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      )}
    </Stack>
    {action && <Stack alignItems={align === 'center' ? 'center' : 'flex-end'}>{action}</Stack>}
  </Stack>
)

export default SectionHeader
