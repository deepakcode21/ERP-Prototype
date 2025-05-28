import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Users, Calendar, FileText, CreditCard } from 'lucide-react';

const ParentDashboard: React.FC = () => {
  const { user } = useAuth();
  
  // Mock data for children
  const children = [
    { id: 1, name: 'Emma Johnson', grade: '10th Grade', section: 'A' },
    { id: 2, name: 'Noah Johnson', grade: '7th Grade', section: 'B' }
  ];
  
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-green-600 to-green-400 p-6 rounded-lg shadow-md text-white">
        <h1 className="text-2xl font-bold">Welcome, {user?.name}!</h1>
        <p className="mt-1 text-white text-opacity-90">Stay connected with your children's education</p>
      </div>
      
      {/* Children Selection */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Your Children</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {children.map((child) => (
            <div 
              key={child.id}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary dark:hover:border-primary cursor-pointer transition-colors"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-4">
                  {child.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">{child.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{child.grade}, Section {child.section}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Attendance</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">95%</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
              <Users size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-green-500 text-sm">↑ 2%</span>
            <span className="text-gray-400 text-sm ml-2">this month</span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Upcoming Events</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">3</p>
            </div>
            <div className="p-3 rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
              <Calendar size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-gray-400 text-sm">Next: Parent-Teacher Meeting</span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Homework Status</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">5/7</p>
            </div>
            <div className="p-3 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300">
              <FileText size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-red-500 text-sm">2</span>
            <span className="text-gray-400 text-sm ml-2">pending assignments</span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Fee Status</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">Paid</p>
            </div>
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
              <CreditCard size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-gray-400 text-sm">Next due: Aug 15, 2025</span>
          </div>
        </div>
      </div>
      
      {/* Parent-specific content would go here */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-center">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Parent Dashboard</h2>
        <p className="text-gray-600 dark:text-gray-400">The parent-specific dashboard is under development.</p>
        <p className="text-gray-600 dark:text-gray-400 mt-2">It will include academic progress tracking, fee management, and communication with teachers.</p>
      </div>
    </div>
  );
};

export default ParentDashboard;