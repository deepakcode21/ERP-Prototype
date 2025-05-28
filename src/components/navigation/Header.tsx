import React, { useState } from 'react';
import { Bell, Search, Menu, Sun, Moon, ChevronDown, LogOut, User, Settings } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { UserRole } from '../../types/auth';

interface Notification {
  id: number;
  title: string;
  message: string;
  read: boolean;
}

interface HeaderProps {
  toggleSidebar: () => void;
  notifications: Notification[];
  userRole: UserRole;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, notifications, userRole }) => {
  const { user, logout } = useAuth();
  const { theme, setTheme, isDark } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  // Role-based colors
  const getRoleBadgeColor = () => {
    switch(userRole) {
      case 'admin': return 'bg-purple-100 text-purple-800';
      case 'teacher': return 'bg-blue-100 text-blue-800';
      case 'parent': return 'bg-green-100 text-green-800';
      case 'student': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };
  
  return (
    <header className="z-10 py-4 bg-white dark:bg-gray-800 shadow-sm">
      <div className="flex items-center justify-between px-6">
        {/* Left section */}
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-1 mr-4 rounded-md lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Menu size={24} className="text-gray-600 dark:text-gray-300" />
          </button>
          
          {/* Search */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search size={18} className="text-gray-400" />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="py-2 pl-10 pr-4 w-full md:w-72 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
        
        {/* Right section */}
        <div className="flex items-center space-x-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {isDark ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-600" />
            )}
          </button>
          
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative"
            >
              <Bell size={20} className="text-gray-600 dark:text-gray-300" />
              {unreadCount > 0 && (
                <span className="absolute top-0 right-0 inline-block w-4 h-4 text-xs text-white bg-red-500 rounded-full">
                  {unreadCount}
                </span>
              )}
            </button>
            
            {/* Notifications dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border dark:border-gray-700">
                <div className="px-4 py-2 border-b dark:border-gray-700">
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Notifications</h3>
                </div>
                {notifications.length > 0 ? (
                  <div>
                    {notifications.map(notification => (
                      <div 
                        key={notification.id}
                        className={`px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 ${!notification.read ? 'bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20' : ''}`}
                      >
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{notification.title}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300">{notification.message}</p>
                      </div>
                    ))}
                    <a
                      href="#"
                      className="block text-center text-sm text-primary dark:text-primary-light hover:underline py-2"
                    >
                      View all notifications
                    </a>
                  </div>
                ) : (
                  <div className="px-4 py-6 text-center text-gray-500 dark:text-gray-400">
                    <p>No notifications yet</p>
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* User menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-1"
            >
              <img
                src={user?.avatar || 'https://i.pravatar.cc/150'}
                alt={user?.name || 'User'}
                className="w-8 h-8 rounded-full"
              />
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-800 dark:text-white">{user?.name || 'User'}</p>
                <div className={`text-xs px-1.5 py-0.5 rounded-full ${getRoleBadgeColor()}`}>
                  {userRole ? userRole.charAt(0).toUpperCase() + userRole.slice(1) : 'Guest'}
                </div>
              </div>
              <ChevronDown size={16} className="hidden md:block text-gray-500" />
            </button>
            
            {/* User dropdown */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border dark:border-gray-700">
                <div className="px-4 py-2 border-b dark:border-gray-700">
                  <p className="text-sm font-medium text-gray-800 dark:text-white">{user?.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{user?.email}</p>
                </div>
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <User size={16} className="inline mr-2" /> Profile
                </a>
                <a
                  href="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Settings size={16} className="inline mr-2" /> Settings
                </a>
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <LogOut size={16} className="inline mr-2" /> Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;