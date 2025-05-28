import React from 'react';
import { useAuth } from '../../context/AuthContext';
import StudentDashboard from './StudentDashboard';
import TeacherDashboard from './TeacherDashboard';
import ParentDashboard from './ParentDashboard';
import AdminDashboard from './AdminDashboard';

const DashboardPage: React.FC = () => {
  const { userRole } = useAuth();
  
  // Render the appropriate dashboard based on user role
  const renderDashboard = () => {
    switch (userRole) {
      case 'student':
        return <StudentDashboard />;
      case 'teacher':
        return <TeacherDashboard />;
      case 'parent':
        return <ParentDashboard />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <div>Unknown role</div>;
    }
  };
  
  return (
    <div className="animate-fade-in">
      {renderDashboard()}
    </div>
  );
};

export default DashboardPage;