import React, { useState } from 'react';
import { Calendar, FileText, Clock, CheckCircle, AlertTriangle, BarChart } from 'lucide-react';

interface Exam {
  id: number;
  title: string;
  subject: string;
  date: string;
  time: string;
  duration: string;
  venue: string;
  status: 'upcoming' | 'completed' | 'missed';
  score?: number;
  totalMarks: number;
  passMarks: number;
}

const ExamPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  // Mock exam data
  const exams: Exam[] = [
    {
      id: 1,
      title: 'Mid-Term Examination',
      subject: 'Mathematics',
      date: 'June 15, 2025',
      time: '10:00 AM',
      duration: '2 hours',
      venue: 'Main Hall',
      status: 'upcoming',
      totalMarks: 100,
      passMarks: 40
    },
    {
      id: 2,
      title: 'Mid-Term Examination',
      subject: 'Physics',
      date: 'June 17, 2025',
      time: '2:00 PM',
      duration: '2 hours',
      venue: 'Science Block',
      status: 'upcoming',
      totalMarks: 100,
      passMarks: 40
    },
    {
      id: 3,
      title: 'Mid-Term Examination',
      subject: 'Computer Science',
      date: 'June 20, 2025',
      time: '9:00 AM',
      duration: '2 hours',
      venue: 'Computer Lab',
      status: 'upcoming',
      totalMarks: 100,
      passMarks: 40
    },
    {
      id: 4,
      title: 'Weekly Test',
      subject: 'English Literature',
      date: 'June 3, 2025',
      time: '11:00 AM',
      duration: '1 hour',
      venue: 'Room 205',
      status: 'completed',
      score: 85,
      totalMarks: 100,
      passMarks: 40
    },
    {
      id: 5,
      title: 'Weekly Test',
      subject: 'History',
      date: 'May 27, 2025',
      time: '1:00 PM',
      duration: '1 hour',
      venue: 'Room 302',
      status: 'completed',
      score: 78,
      totalMarks: 100,
      passMarks: 40
    },
    {
      id: 6,
      title: 'Quiz',
      subject: 'Chemistry',
      date: 'May 20, 2025',
      time: '9:00 AM',
      duration: '30 minutes',
      venue: 'Chemistry Lab',
      status: 'missed',
      totalMarks: 30,
      passMarks: 12
    }
  ];
  
  const filteredExams = exams.filter(exam => {
    if (activeTab === 'upcoming') return exam.status === 'upcoming';
    if (activeTab === 'completed') return exam.status === 'completed';
    if (activeTab === 'missed') return exam.status === 'missed';
    return true;
  });
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Upcoming</span>;
      case 'completed':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Completed</span>;
      case 'missed':
        return <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Missed</span>;
      default:
        return null;
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Exams & Assessments</h1>
        <div className="flex space-x-2">
          <button className="btn-outline">
            <FileText size={16} className="mr-2" />
            Past Results
          </button>
          <button className="btn-primary">
            <Calendar size={16} className="mr-2" />
            Exam Schedule
          </button>
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Upcoming Exams</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {exams.filter(e => e.status === 'upcoming').length}
              </p>
            </div>
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
              <Calendar size={20} />
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Next: {exams.find(e => e.status === 'upcoming')?.subject} on {exams.find(e => e.status === 'upcoming')?.date}
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Average Score</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {Math.round(exams.filter(e => e.status === 'completed' && e.score).reduce((acc, curr) => acc + (curr.score || 0), 0) / exams.filter(e => e.status === 'completed' && e.score).length)}%
              </p>
            </div>
            <div className="p-3 rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
              <BarChart size={20} />
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Based on {exams.filter(e => e.status === 'completed').length} completed exams
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Exam Alerts</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">1</p>
            </div>
            <div className="p-3 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300">
              <AlertTriangle size={20} />
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Mathematics exam is in 7 days
          </p>
        </div>
      </div>
      
      {/* Exam Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex border-b dark:border-gray-700">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-4 py-3 text-sm font-medium border-b-2 ${
              activeTab === 'upcoming'
                ? 'border-primary text-primary dark:text-primary-light'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            Upcoming Exams
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-4 py-3 text-sm font-medium border-b-2 ${
              activeTab === 'completed'
                ? 'border-primary text-primary dark:text-primary-light'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            Completed Exams
          </button>
          <button
            onClick={() => setActiveTab('missed')}
            className={`px-4 py-3 text-sm font-medium border-b-2 ${
              activeTab === 'missed'
                ? 'border-primary text-primary dark:text-primary-light'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            Missed Exams
          </button>
        </div>
        
        <div className="p-6">
          {filteredExams.length > 0 ? (
            <div className="space-y-4">
              {filteredExams.map((exam) => (
                <div key={exam.id} className="border dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="flex items-center mb-2">
                        <h3 className="font-semibold text-gray-800 dark:text-white">{exam.subject}</h3>
                        <span className="ml-3">{getStatusBadge(exam.status)}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{exam.title}</p>
                      
                      <div className="flex flex-wrap gap-x-4 mt-2">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar size={14} className="mr-1" />
                          <span>{exam.date}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Clock size={14} className="mr-1" />
                          <span>{exam.time} ({exam.duration})</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin mr-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                          <span>{exam.venue}</span>
                        </div>
                      </div>
                      
                      {exam.status === 'completed' && exam.score !== undefined && (
                        <div className="mt-3">
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div 
                              className={`h-2.5 rounded-full ${exam.score >= exam.passMarks ? 'bg-green-500' : 'bg-red-500'}`}
                              style={{ width: `${(exam.score / exam.totalMarks) * 100}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between mt-1">
                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                              Score: {exam.score}/{exam.totalMarks} ({Math.round((exam.score / exam.totalMarks) * 100)}%)
                            </span>
                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                              Pass Mark: {exam.passMarks} ({Math.round((exam.passMarks / exam.totalMarks) * 100)}%)
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 md:mt-0">
                      {exam.status === 'upcoming' && (
                        <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors text-sm">
                          View Details
                        </button>
                      )}
                      {exam.status === 'completed' && (
                        <button className="px-4 py-2 bg-green-100 text-green-800 dark:bg-green-900 dark:bg-opacity-30 dark:text-green-300 rounded-md hover:bg-green-200 dark:hover:bg-green-900 dark:hover:bg-opacity-50 transition-colors text-sm">
                          <CheckCircle size={14} className="inline mr-1" />
                          View Results
                        </button>
                      )}
                      {exam.status === 'missed' && (
                        <button className="px-4 py-2 bg-red-100 text-red-800 dark:bg-red-900 dark:bg-opacity-30 dark:text-red-300 rounded-md hover:bg-red-200 dark:hover:bg-red-900 dark:hover:bg-opacity-50 transition-colors text-sm">
                          <AlertTriangle size={14} className="inline mr-1" />
                          Request Review
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400">No {activeTab} exams found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamPage;