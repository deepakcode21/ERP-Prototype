import React from 'react';

interface SubjectGrade {
  subject: string;
  grade: string;
  percentage: number;
  color: string;
}

const GradesSummary: React.FC = () => {
  // Mock data for grades
  const grades: SubjectGrade[] = [
    {
      subject: 'Mathematics',
      grade: 'A',
      percentage: 92,
      color: 'bg-blue-500'
    },
    {
      subject: 'Physics',
      grade: 'A-',
      percentage: 89,
      color: 'bg-green-500'
    },
    {
      subject: 'Computer Science',
      grade: 'A+',
      percentage: 96,
      color: 'bg-purple-500'
    },
    {
      subject: 'English',
      grade: 'B+',
      percentage: 87,
      color: 'bg-orange-500'
    }
  ];
  
  // Calculate GPA
  const gpa = 3.8;
  
  return (
    <div>
      <div className="mb-4 text-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm">Current GPA</p>
        <p className="text-3xl font-bold text-gray-800 dark:text-white">{gpa.toFixed(1)}</p>
      </div>
      
      <div className="space-y-3">
        {grades.map((grade) => (
          <div key={grade.subject}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-700 dark:text-gray-300">{grade.subject}</span>
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-800 dark:text-white">{grade.grade}</span>
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">{grade.percentage}%</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className={`${grade.color} h-2 rounded-full`}
                style={{ width: `${grade.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <button className="text-primary hover:text-primary-dark text-sm font-medium">
          View detailed performance
        </button>
      </div>
    </div>
  );
};

export default GradesSummary;