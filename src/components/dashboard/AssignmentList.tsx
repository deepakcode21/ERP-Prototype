import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';

interface Assignment {
  id: number;
  title: string;
  subject: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'late';
}

const AssignmentList: React.FC = () => {
  // Mock data for assignments
  const assignments: Assignment[] = [
    {
      id: 1,
      title: 'Linear Algebra Problem Set',
      subject: 'Mathematics',
      dueDate: 'Jun 10, 2025',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Research Paper Draft',
      subject: 'English Literature',
      dueDate: 'Jun 12, 2025',
      status: 'pending'
    },
    {
      id: 3,
      title: 'Circuit Design Project',
      subject: 'Physics',
      dueDate: 'Jun 15, 2025',
      status: 'pending'
    },
    {
      id: 4,
      title: 'Database Normalization',
      subject: 'Computer Science',
      dueDate: 'Jun 18, 2025',
      status: 'pending'
    }
  ];
  
  return (
    <div className="space-y-4">
      {assignments.map((assignment) => (
        <div key={assignment.id} className="flex items-center p-3 border-b dark:border-gray-700 last:border-0">
          <div className="flex-1">
            <h3 className="font-medium text-gray-800 dark:text-white">{assignment.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{assignment.subject}</p>
            <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
              <Calendar size={14} className="mr-1" />
              <span>Due: {assignment.dueDate}</span>
            </div>
          </div>
          <button className="p-2 text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors">
            <CheckCircle size={20} />
          </button>
        </div>
      ))}
      <div className="pt-3 text-center">
        <button className="text-primary hover:text-primary-dark text-sm font-medium">
          View all assignments
        </button>
      </div>
    </div>
  );
};

export default AssignmentList;