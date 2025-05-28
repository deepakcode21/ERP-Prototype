import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/navigation/Sidebar';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import { useAuth } from '../context/AuthContext';
import { Bell, MessageSquare } from 'lucide-react';

const MainLayout: React.FC = () => {
  const { userRole } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  // Mock notifications
  const notifications = [
    { id: 1, title: 'New Assignment', message: 'Math assignment due tomorrow', read: false },
    { id: 2, title: 'Exam Schedule', message: 'Final exams start next week', read: true },
  ];
  
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} userRole={userRole} />
      
      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header 
          toggleSidebar={toggleSidebar} 
          notifications={notifications}
          userRole={userRole}
        />
        
        <main className="flex-1 overflow-y-auto px-4 py-8 md:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl animate-fade-in">
            <Outlet />
          </div>
        </main>
        
        <Footer />
      </div>
      
      {/* Fixed Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3">
        <button className="p-3 bg-secondary text-white rounded-full shadow-lg hover:bg-secondary-dark transition-all">
          <MessageSquare size={20} />
        </button>
        <button className="p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all">
          <Bell size={20} />
        </button>
      </div>
    </div>
  );
};

export default MainLayout;