import { Routes, Route } from "react-router-dom";

import FacultyLayout from "./FacultyLayout";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";

import StudentList from "./pages/my-students/StudentList";
import SearchStudent from "./pages/my-students/SearchStudent";
import StudentProfile from "./pages/my-students/StudentProfile";

import ViewAcademicRecords from "./pages/academic-info/ViewAcademicRecords";
import SemesterResults from "./pages/academic-info/SemesterResults";
import AcademicPerformance from "./pages/academic-info/AcademicPerformance";

import MarkAttendance from "./pages/attendance/MarkAttendance";
import ViewAttendance from "./pages/attendance/ViewAttendance";
import EditAttendance from "./pages/attendance/EditAttendance";
import LowAttendance from "./pages/attendance/LowAttendance";

import AchievementPending from "./pages/achievement-verification/Pending";
import AchievementApproved from "./pages/achievement-verification/Approved";
import AchievementRejected from "./pages/achievement-verification/Rejected";
import AchievementHistory from "./pages/achievement-verification/History";

import CertificatePending from "./pages/certificate-verification/Pending";
import CertificateVerified from "./pages/certificate-verification/Verified";
import CertificateRejected from "./pages/certificate-verification/Rejected";
import CertificateHistory from "./pages/certificate-verification/History";

import AddRemark from "./pages/student-remarks/AddRemark";
import RemarkHistory from "./pages/student-remarks/RemarkHistory";

import StudentRequests from "./pages/mentoring/StudentRequests";
import GiveRecommendations from "./pages/mentoring/GiveRecommendations";

import PerformanceAcademic from "./pages/student-performance/Academic";
import PerformanceAttendance from "./pages/student-performance/Attendance";
import PerformanceAchievements from "./pages/student-performance/Achievements";
import OverallProgress from "./pages/student-performance/OverallProgress";

export default function FacultyRoutes() {
  return (
    <Routes>
      <Route element={<FacultyLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="notifications" element={<Notifications />} />

        <Route path="my-students/list" element={<StudentList />} />
        <Route path="my-students/search" element={<SearchStudent />} />
        <Route path="my-students/profile" element={<StudentProfile />} />

        <Route path="academic-info/records" element={<ViewAcademicRecords />} />
        <Route path="academic-info/results" element={<SemesterResults />} />
        <Route path="academic-info/performance" element={<AcademicPerformance />} />

        <Route path="attendance/mark" element={<MarkAttendance />} />
        <Route path="attendance/view" element={<ViewAttendance />} />
        <Route path="attendance/edit" element={<EditAttendance />} />
        <Route path="attendance/low" element={<LowAttendance />} />

        <Route path="achievement-verification/pending" element={<AchievementPending />} />
        <Route path="achievement-verification/approved" element={<AchievementApproved />} />
        <Route path="achievement-verification/rejected" element={<AchievementRejected />} />
        <Route path="achievement-verification/history" element={<AchievementHistory />} />

        <Route path="certificate-verification/pending" element={<CertificatePending />} />
        <Route path="certificate-verification/verified" element={<CertificateVerified />} />
        <Route path="certificate-verification/rejected" element={<CertificateRejected />} />
        <Route path="certificate-verification/history" element={<CertificateHistory />} />

        <Route path="student-remarks/add" element={<AddRemark />} />
        <Route path="student-remarks/history" element={<RemarkHistory />} />

        <Route path="mentoring/requests" element={<StudentRequests />} />
        <Route path="mentoring/give" element={<GiveRecommendations />} />

        <Route path="student-performance/academic" element={<PerformanceAcademic />} />
        <Route path="student-performance/attendance" element={<PerformanceAttendance />} />
        <Route path="student-performance/achievements" element={<PerformanceAchievements />} />
        <Route path="student-performance/overall" element={<OverallProgress />} />
      </Route>
    </Routes>
  );
}