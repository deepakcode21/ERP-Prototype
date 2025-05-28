import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import MainLayout from '../layouts/MainLayout';
import LoadingScreen from '../components/common/LoadingScreen';
import ProtectedRoute from './ProtectedRoute';

// Lazy loaded pages
const LoginPage = lazy(() => import('../pages/auth/LoginPage'));
const DashboardPage = lazy(() => import('../pages/dashboard/DashboardPage'));
const StudentProfilePage = lazy(() => import('../pages/student/StudentProfilePage'));
const AttendancePage = lazy(() => import('../pages/attendance/AttendancePage'));
const TimetablePage = lazy(() => import('../pages/timetable/TimetablePage'));
const ExamPage = lazy(() => import('../pages/exam/ExamPage'));
const CommunicationPage = lazy(() => import('../pages/communication/CommunicationPage'));
const NotFoundPage = lazy(() => import('../pages/error/NotFoundPage'));

const AppRoutes: React.FC = () => {
  const { isAuthenticated, userRole, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {/* Auth Routes */}
        <Route 
          path="/login" 
          element={!isAuthenticated ? <LoginPage /> : <Navigate to="/dashboard\" replace />} 
        />
        
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            {/* Dashboard - Different view based on role */}
            <Route path="/dashboard" element={<DashboardPage />} />
            
            {/* Student Routes */}
            <Route path="/student/profile" element={<StudentProfilePage />} />
            <Route path="/attendance" element={<AttendancePage />} />
            <Route path="/timetable" element={<TimetablePage />} />
            <Route path="/exams" element={<ExamPage />} />
            <Route path="/communication" element={<CommunicationPage />} />
            
            {/* Add more routes for other modules */}
          </Route>
        </Route>
        
        {/* Redirect from root to dashboard or login */}
        <Route 
          path="/" 
          element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />} 
        />
        
        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;