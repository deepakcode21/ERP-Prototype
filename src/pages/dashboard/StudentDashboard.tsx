import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Calendar, Clock, Book, FileText, Users, Bell } from 'lucide-react';
import UpcomingClasses from '../../components/dashboard/UpcomingClasses';
import AssignmentList from '../../components/dashboard/AssignmentList';
import AttendanceChart from '../../components/dashboard/AttendanceChart';
import GradesSummary from '../../components/dashboard/GradesSummary';
import AnnouncementList from '../../components/dashboard/AnnouncementList';

const StudentDashboard: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-lg shadow-md text-white">
        <h1 className="text-2xl font-bold">Welcome back, {user?.name}!</h1>
        <p className="mt-1 text-white text-opacity-90">Here's what's happening with your academics today</p>
        <div className="mt-4 flex items-center space-x-2">
          <Clock size={18} />
          <span>Wednesday, June 8, 2025</span>
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Attendance</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">92%</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
              <Users size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-green-500 text-sm">↑ 3%</span>
            <span className="text-gray-400 text-sm ml-2">vs last month</span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Assignments</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">4</p>
            </div>
            <div className="p-3 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300">
              <FileText size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-red-500 text-sm">↑ 2</span>
            <span className="text-gray-400 text-sm ml-2">due this week</span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Upcoming Tests</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">2</p>
            </div>
            <div className="p-3 rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
              <Book size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-gray-400 text-sm">Next: Math (Jun 10)</span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Class Schedule</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">Today</p>
            </div>
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
              <Calendar size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-gray-400 text-sm">5 classes remaining</span>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="p-4 border-b dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Today's Classes</h2>
            </div>
            <div className="p-4">
              <UpcomingClasses />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="p-4 border-b dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Attendance Overview</h2>
              </div>
              <div className="p-4">
                <AttendanceChart />
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="p-4 border-b dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Grades Summary</h2>
              </div>
              <div className="p-4">
                <GradesSummary />
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Pending Assignments</h2>
              <span className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-800">4 Due</span>
            </div>
            <div className="p-4">
              <AssignmentList />
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Announcements</h2>
              <Bell size={18} className="text-gray-500" />
            </div>
            <div className="p-4">
              <AnnouncementList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;