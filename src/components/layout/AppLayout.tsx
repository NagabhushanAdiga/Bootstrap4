import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface AppLayoutProps {
  children: React.ReactNode
}

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Courses', path: '/courses' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Dashboard', path: '/dashboard' },
]

const AppLayout = ({ children }: AppLayoutProps) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const handleNavigate = (path: string) => {
    navigate(path)
    setOpen(false)
  }

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column" sx={{ backgroundColor: 'grey.50' }}>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          borderBottom: '1px solid',
          borderColor: 'divider',
          backdropFilter: 'blur(12px)',
        }}
      >
        <Toolbar sx={{ py: 1 }}>
          <Stack direction="row" spacing={2} alignItems="center" flex={1}>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ cursor: 'pointer' }}
              onClick={() => handleNavigate('/')}
            >
              Learning OS
            </Typography>
            <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />
            <Typography variant="body2" color="text.secondary" sx={{ display: { xs: 'none', md: 'block' } }}>
              Online learning & certification platform
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  color={location.pathname === item.path ? 'primary' : 'inherit'}
                  onClick={() => handleNavigate(item.path)}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
            <Button variant="contained" sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
              Join Cohort
            </Button>
            <IconButton
              edge="end"
              sx={{ display: { md: 'none' } }}
              onClick={() => setOpen((prev) => !prev)}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, p: 2 }}>
          <Typography variant="subtitle1" fontWeight={600} mb={2}>
            Navigate
          </Typography>
          <List>
            {navItems.map((item) => (
              <ListItemButton key={item.path} onClick={() => handleNavigate(item.path)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
          <Button variant="contained" fullWidth onClick={() => handleNavigate('/dashboard')}>
            Join Cohort
          </Button>
        </Box>
      </Drawer>

      <Container component="main" sx={{ py: { xs: 6, md: 10 }, flex: 1, width: '100%' }}>
        {children}
      </Container>

      <Box component="footer" py={6} sx={{ borderTop: '1px solid', borderColor: 'divider', mt: 'auto' }}>
        <Container>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            spacing={2}
            alignItems={{ xs: 'flex-start', md: 'center' }}
          >
            <Stack spacing={1}>
              <Typography fontWeight={600}>Learning OS</Typography>
              <Typography variant="body2" color="text.secondary">
                Cohort-based learning and certification with industry mentors.
              </Typography>
            </Stack>
            <Stack direction="row" spacing={3} flexWrap="wrap">
              <Typography variant="body2">Privacy</Typography>
              <Typography variant="body2">Accessibility</Typography>
              <Typography variant="body2">Support</Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default AppLayout
