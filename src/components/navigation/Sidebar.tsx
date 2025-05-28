import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, Users, Calendar, BookOpen, FileText, Bell, 
  MessageSquare, Settings, Library, Clock, Award, 
  CreditCard, Bus, Building, Coffee, Package, UserPlus,
  DollarSign, CheckSquare, X
} from 'lucide-react';
import { UserRole } from '../../types/auth';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  userRole: UserRole;
}

interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  roles: UserRole[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, userRole }) => {
  // Navigation items based on user role
  const navItems: NavItem[] = [
    { name: 'Dashboard', path: '/dashboard', icon: <Home size={20} />, roles: ['student', 'teacher', 'parent', 'admin'] },
    { name: 'Student Profile', path: '/student/profile', icon: <Users size={20} />, roles: ['student', 'teacher', 'parent', 'admin'] },
    { name: 'Attendance', path: '/attendance', icon: <CheckSquare size={20} />, roles: ['student', 'teacher', 'parent', 'admin'] },
    { name: 'Timetable', path: '/timetable', icon: <Calendar size={20} />, roles: ['student', 'teacher', 'parent', 'admin'] },
    { name: 'Exams & Assessments', path: '/exams', icon: <FileText size={20} />, roles: ['student', 'teacher', 'parent', 'admin'] },
    { name: 'Library', path: '/library', icon: <Library size={20} />, roles: ['student', 'teacher', 'admin'] },
    { name: 'Fee Management', path: '/fees', icon: <CreditCard size={20} />, roles: ['student', 'parent', 'admin'] },
    { name: 'Communication', path: '/communication', icon: <MessageSquare size={20} />, roles: ['student', 'teacher', 'parent', 'admin'] },
    { name: 'Transport', path: '/transport', icon: <Bus size={20} />, roles: ['student', 'parent', 'admin'] },
    { name: 'Hostel', path: '/hostel', icon: <Building size={20} />, roles: ['student', 'admin'] },
    { name: 'Canteen', path: '/canteen', icon: <Coffee size={20} />, roles: ['student', 'parent', 'admin'] },
    { name: 'HR & Recruitment', path: '/hr', icon: <UserPlus size={20} />, roles: ['admin', 'teacher'] },
    { name: 'Payroll', path: '/payroll', icon: <DollarSign size={20} />, roles: ['admin', 'teacher'] },
    { name: 'Inventory', path: '/inventory', icon: <Package size={20} />, roles: ['admin'] },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} />, roles: ['student', 'teacher', 'parent', 'admin'] },
  ];
  
  // Filter nav items based on user role
  const filteredNavItems = userRole 
    ? navItems.filter(item => item.roles.includes(userRole))
    : [];
  
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo and close button */}
        <div className="flex items-center justify-between h-16 px-6 border-b dark:border-gray-700">
          <div className="flex items-center">
            <span className="text-2xl font-semibold text-primary dark:text-white">EduSuite</span>
          </div>
          <button 
            onClick={toggleSidebar}
            className="p-1 rounded-md lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X size={20} className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>
        
        {/* Navigation items */}
        <div className="py-4 overflow-y-auto">
          <nav className="px-2 space-y-1">
            {filteredNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 rounded-md transition-colors ${
                    isActive 
                      ? 'bg-primary bg-opacity-10 text-primary dark:text-primary-light font-medium' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`
                }
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;