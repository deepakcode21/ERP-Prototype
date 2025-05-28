import React, { useState } from 'react';
import { Calendar, Clock, User, CheckCircle, XCircle } from 'lucide-react';

interface AttendanceRecord {
  date: string;
  status: 'present' | 'absent' | 'late';
  checkInTime?: string;
  checkOutTime?: string;
  duration?: string;
  subject?: string;
  teacher?: string;
}

const AttendancePage: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState('June 2025');
  
  // Mock attendance data
  const attendanceData: AttendanceRecord[] = [
    {
      date: 'June 8, 2025',
      status: 'present',
      checkInTime: '9:15 AM',
      checkOutTime: '4:30 PM',
      duration: '7h 15m',
      subject: 'Multiple Classes',
      teacher: 'Various'
    },
    {
      date: 'June 7, 2025',
      status: 'present',
      checkInTime: '9:00 AM',
      checkOutTime: '4:00 PM',
      duration: '7h 00m',
      subject: 'Multiple Classes',
      teacher: 'Various'
    },
    {
      date: 'June 6, 2025',
      status: 'late',
      checkInTime: '9:45 AM',
      checkOutTime: '4:15 PM',
      duration: '6h 30m',
      subject: 'Multiple Classes',
      teacher: 'Various'
    },
    {
      date: 'June 5, 2025',
      status: 'present',
      checkInTime: '8:55 AM',
      checkOutTime: '4:10 PM',
      duration: '7h 15m',
      subject: 'Multiple Classes',
      teacher: 'Various'
    },
    {
      date: 'June 4, 2025',
      status: 'absent',
      subject: 'All Classes',
      teacher: 'Various'
    },
    {
      date: 'June 3, 2025',
      status: 'present',
      checkInTime: '9:05 AM',
      checkOutTime: '4:00 PM',
      duration: '6h 55m',
      subject: 'Multiple Classes',
      teacher: 'Various'
    },
    {
      date: 'June 2, 2025',
      status: 'present',
      checkInTime: '9:00 AM',
      checkOutTime: '4:05 PM',
      duration: '7h 05m',
      subject: 'Multiple Classes',
      teacher: 'Various'
    },
  ];
  
  // Calculate statistics
  const totalDays = attendanceData.length;
  const presentDays = attendanceData.filter(record => record.status === 'present').length;
  const lateDays = attendanceData.filter(record => record.status === 'late').length;
  const absentDays = attendanceData.filter(record => record.status === 'absent').length;
  
  const attendancePercentage = (presentDays / totalDays) * 100;
  
  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'present':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Present</span>;
      case 'late':
        return <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Late</span>;
      case 'absent':
        return <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Absent</span>;
      default:
        return null;
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Attendance</h1>
        <div className="flex space-x-2">
          <button className="btn-outline">
            <Calendar size={16} className="mr-2" />
            View Calendar
          </button>
          <button className="btn-primary">
            <CheckCircle size={16} className="mr-2" />
            Request Leave
          </button>
        </div>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Present Days</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">{presentDays}</p>
            </div>
            <div className="p-3 rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
              <CheckCircle size={20} />
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Late Days</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">{lateDays}</p>
            </div>
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300">
              <Clock size={20} />
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Absent Days</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">{absentDays}</p>
            </div>
            <div className="p-3 rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300">
              <XCircle size={20} />
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Attendance</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">{attendancePercentage.toFixed(1)}%</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
              <User size={20} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Attendance Progress Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Monthly Attendance</h2>
          <div className="flex items-center">
            <button className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <span className="text-gray-700 dark:text-gray-300 mx-2">{selectedMonth}</span>
            <button className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 mb-2">
          <div className="flex rounded-full h-6 overflow-hidden">
            <div 
              className="bg-green-500 h-full flex items-center justify-center text-xs text-white"
              style={{ width: `${(presentDays / totalDays) * 100}%` }}
            >
              {presentDays > 0 && `${Math.round((presentDays / totalDays) * 100)}%`}
            </div>
            <div 
              className="bg-yellow-500 h-full flex items-center justify-center text-xs text-white"
              style={{ width: `${(lateDays / totalDays) * 100}%` }}
            >
              {lateDays > 0 && `${Math.round((lateDays / totalDays) * 100)}%`}
            </div>
            <div 
              className="bg-red-500 h-full flex items-center justify-center text-xs text-white"
              style={{ width: `${(absentDays / totalDays) * 100}%` }}
            >
              {absentDays > 0 && `${Math.round((absentDays / totalDays) * 100)}%`}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-6 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">Present</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">Late</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">Absent</span>
          </div>
        </div>
      </div>
      
      {/* Attendance Records */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="p-4 border-b dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Attendance Records</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Check In
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Check Out
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Duration
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Subject
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {attendanceData.map((record, index) => (
                <tr key={index} className={record.status === 'absent' ? 'bg-red-50 dark:bg-red-900 dark:bg-opacity-10' : ''}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">
                    {record.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(record.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                    {record.checkInTime || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                    {record.checkOutTime || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                    {record.duration || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                    {record.subject}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t dark:border-gray-700 flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing 1-7 of 30 records
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
              Previous
            </button>
            <button className="px-3 py-1 bg-primary text-white rounded-md hover:bg-primary-dark">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendancePage;