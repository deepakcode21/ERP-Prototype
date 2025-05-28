import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Users, DollarSign, Building, BookOpen, Bell, Server, UserPlus, Package } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-400 p-6 rounded-lg shadow-md text-white">
        <h1 className="text-2xl font-bold">Welcome, {user?.name}!</h1>
        <p className="mt-1 text-white text-opacity-90">Institution management dashboard</p>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Total Students</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">1,248</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
              <Users size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-green-500 text-sm">↑ 5%</span>
            <span className="text-gray-400 text-sm ml-2">vs last year</span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Staff Members</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">86</p>
            </div>
            <div className="p-3 rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
              <UserPlus size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-green-500 text-sm">↑ 2</span>
            <span className="text-gray-400 text-sm ml-2">new hires</span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Monthly Revenue</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">$98,350</p>
            </div>
            <div className="p-3 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300">
              <DollarSign size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-green-500 text-sm">↑ 8%</span>
            <span className="text-gray-400 text-sm ml-2">vs last month</span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">System Status</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">Healthy</p>
            </div>
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
              <Server size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-gray-400 text-sm">All systems operational</span>
          </div>
        </div>
      </div>
      
      {/* Module Quick Access */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="p-3 mr-4 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
              <Users size={24} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Admissions</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">12 new applications</p>
            </div>
          </div>
          <button className="mt-4 w-full py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm">
            Manage Admissions
          </button>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="p-3 mr-4 rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
              <BookOpen size={24} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Academics</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Exam week preparation</p>
            </div>
          </div>
          <button className="mt-4 w-full py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm">
            Manage Academics
          </button>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="p-3 mr-4 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300">
              <DollarSign size={24} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Finance</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Monthly reports ready</p>
            </div>
          </div>
          <button className="mt-4 w-full py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm">
            Manage Finance
          </button>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="p-3 mr-4 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
              <UserPlus size={24} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">HR & Staff</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">3 positions open</p>
            </div>
          </div>
          <button className="mt-4 w-full py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm">
            Manage HR
          </button>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="p-3 mr-4 rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300">
              <Building size={24} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Facilities</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Maintenance scheduled</p>
            </div>
          </div>
          <button className="mt-4 w-full py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm">
            Manage Facilities
          </button>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="p-3 mr-4 rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300">
              <Package size={24} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Inventory</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">5 items low stock</p>
            </div>
          </div>
          <button className="mt-4 w-full py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm">
            Manage Inventory
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;