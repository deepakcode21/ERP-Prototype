import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Clock, Users, BookOpen, CheckSquare, Bell } from 'lucide-react';

const TeacherDashboard: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 rounded-lg shadow-md text-white">
        <h1 className="text-2xl font-bold">Welcome, {user?.name}!</h1>
        <p className="mt-1 text-white text-opacity-90">Track your classes and student performance</p>
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
              <p className="text-gray-500 dark:text-gray-400 text-sm">Total Students</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">124</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
              <Users size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-green-500 text-sm">↑ 4</span>
            <span className="text-gray-400 text-sm ml-2">new this semester</span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Classes Today</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">5</p>
            </div>
            <div className="p-3 rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
              <BookOpen size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-gray-400 text-sm">Next: Physics at 11:00 AM</span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Assignments to Grade</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">12</p>
            </div>
            <div className="p-3 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300">
              <CheckSquare size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-red-500 text-sm">↑ 3</span>
            <span className="text-gray-400 text-sm ml-2">since yesterday</span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Notifications</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">7</p>
            </div>
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
              <Bell size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-gray-400 text-sm">3 require attention</span>
          </div>
        </div>
      </div>
      
      {/* Teacher-specific content would go here */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-center">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Teacher Dashboard</h2>
        <p className="text-gray-600 dark:text-gray-400">The teacher-specific dashboard is under development.</p>
        <p className="text-gray-600 dark:text-gray-400 mt-2">It will include class management, grade books, lesson planning, and student performance tracking.</p>
      </div>
    </div>
  );
};

export default TeacherDashboard;