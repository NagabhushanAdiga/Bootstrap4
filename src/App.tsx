import { CssBaseline } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import HomePage from './pages/HomePage'
import CoursesPage from './pages/CoursesPage'
import CertificationsPage from './pages/CertificationsPage'
import DashboardPage from './pages/DashboardPage'
import theme from './theme'
import { ThemeProvider } from '@mui/material/styles'

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  </ThemeProvider>
)

export default App
