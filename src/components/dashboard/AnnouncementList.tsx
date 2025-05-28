import React from 'react';
import { FileText, User, Globe } from 'lucide-react';

interface Announcement {
  id: number;
  title: string;
  from: string;
  date: string;
  type: 'admin' | 'teacher' | 'school';
  icon: React.ReactNode;
}

const AnnouncementList: React.FC = () => {
  // Mock data for announcements
  const announcements: Announcement[] = [
    {
      id: 1,
      title: 'End of Semester Exam Schedule Posted',
      from: 'Academic Department',
      date: '2 hours ago',
      type: 'admin',
      icon: <FileText size={16} />
    },
    {
      id: 2,
      title: 'Parent-Teacher Conference Next Week',
      from: 'Principal\'s Office',
      date: '1 day ago',
      type: 'school',
      icon: <Globe size={16} />
    },
    {
      id: 3,
      title: 'Physics Lab Equipment Update',
      from: 'Ms. Jessica Lee',
      date: '2 days ago',
      type: 'teacher',
      icon: <User size={16} />
    }
  ];
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'admin': return 'text-purple-500 bg-purple-100 dark:bg-purple-900 dark:bg-opacity-30';
      case 'teacher': return 'text-blue-500 bg-blue-100 dark:bg-blue-900 dark:bg-opacity-30';
      case 'school': return 'text-orange-500 bg-orange-100 dark:bg-orange-900 dark:bg-opacity-30';
      default: return 'text-gray-500 bg-gray-100 dark:bg-gray-700';
    }
  };
  
  return (
    <div className="space-y-4">
      {announcements.map((announcement) => (
        <div key={announcement.id} className="flex items-start p-3 border-b dark:border-gray-700 last:border-0">
          <div className={`p-2 rounded-full mr-3 ${getTypeColor(announcement.type)}`}>
            {announcement.icon}
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-800 dark:text-white text-sm">{announcement.title}</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">{announcement.from}</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{announcement.date}</p>
          </div>
        </div>
      ))}
      <div className="pt-2 text-center">
        <button className="text-primary hover:text-primary-dark text-sm font-medium">
          View all announcements
        </button>
      </div>
    </div>
  );
};

export default AnnouncementList;