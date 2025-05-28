import React from 'react';
import { Clock, MapPin, BookOpen } from 'lucide-react';

interface ClassInfo {
  id: number;
  subject: string;
  teacher: string;
  time: string;
  location: string;
  status: 'upcoming' | 'current' | 'completed';
  color: string;
}

const UpcomingClasses: React.FC = () => {
  // Mock data for upcoming classes
  const classes: ClassInfo[] = [
    {
      id: 1,
      subject: 'Mathematics',
      teacher: 'Dr. Alan Smith',
      time: '9:00 AM - 10:30 AM',
      location: 'Room 101',
      status: 'completed',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      subject: 'Physics',
      teacher: 'Ms. Jessica Lee',
      time: '11:00 AM - 12:30 PM',
      location: 'Science Lab',
      status: 'current',
      color: 'bg-green-500'
    },
    {
      id: 3,
      subject: 'Computer Science',
      teacher: 'Mr. Robert Chen',
      time: '1:30 PM - 3:00 PM',
      location: 'Computer Lab',
      status: 'upcoming',
      color: 'bg-purple-500'
    },
    {
      id: 4,
      subject: 'English Literature',
      teacher: 'Mrs. Emily Johnson',
      time: '3:30 PM - 5:00 PM',
      location: 'Room 205',
      status: 'upcoming',
      color: 'bg-orange-500'
    }
  ];
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'current':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">In Progress</span>;
      case 'upcoming':
        return <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Upcoming</span>;
      case 'completed':
        return <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">Completed</span>;
      default:
        return null;
    }
  };
  
  return (
    <div className="space-y-4">
      {classes.map((classInfo) => (
        <div 
          key={classInfo.id} 
          className={`flex items-center p-4 border-l-4 ${classInfo.color} rounded-r-lg bg-white dark:bg-gray-800 shadow-sm transition-all hover:shadow-md`}
        >
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-gray-800 dark:text-white">{classInfo.subject}</h3>
              {getStatusBadge(classInfo.status)}
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{classInfo.teacher}</p>
            <div className="mt-2 flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <Clock size={14} className="mr-1" />
              <span className="mr-3">{classInfo.time}</span>
              <MapPin size={14} className="mr-1" />
              <span>{classInfo.location}</span>
            </div>
          </div>
          <div>
            <button className="p-2 text-primary hover:bg-primary hover:bg-opacity-10 rounded-full">
              <BookOpen size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingClasses;