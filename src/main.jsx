import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import AttendanceReports from './pages/Attendance/AttendanceReports'
import View from './pages/Attendance/View'
import MarkAttendance from './pages/Attendance/MarkAttendance'
import HiringApplications from './pages/Hiring/HiringApplications'
import PostHiring from './pages/Hiring/PostHiring'
import ProfileSettings from './pages/Profile/ProfileSettings'
import ProfileLogout from './pages/Profile/ProfileLogout'
import HelpPage from './pages/HelpPage'
import Layout from './Layout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path='' element = {<App />} />
          <Route path="/attendance">
            <Route path="reports" element={<AttendanceReports />} />
            <Route path="view" element={<View />} />
            <Route path="mark" element={<MarkAttendance />} />
          </Route>
          <Route path="/hiring">
            <Route path="applications" element={<HiringApplications />} />
            <Route path="post" element={<PostHiring />} />
          </Route>
          <Route path="/profile">
            <Route path="settings" element={<ProfileSettings />} />
            <Route path="logout" element={<ProfileLogout />} />
          </Route>
          <Route path="/help" element={<HelpPage />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
)
