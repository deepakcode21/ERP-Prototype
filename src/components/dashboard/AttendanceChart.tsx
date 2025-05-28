import React from 'react';

const AttendanceChart: React.FC = () => {
  // Mock data for attendance percentages by month
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const attendanceData = [88, 92, 85, 90, 95, 92];
  
  // Find the max value for scaling
  const maxAttendance = Math.max(...attendanceData);
  
  return (
    <div className="h-64">
      <div className="flex items-end h-48 space-x-2">
        {months.map((month, index) => {
          const height = (attendanceData[index] / 100) * 100;
          
          return (
            <div key={month} className="flex-1 flex flex-col items-center">
              <div className="relative w-full">
                <div 
                  className="bg-primary bg-opacity-70 rounded-t-sm w-full"
                  style={{ height: `${height}%` }}
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-700 dark:text-gray-300">
                    {attendanceData[index]}%
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-2">{month}</div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 flex justify-between text-sm text-gray-600 dark:text-gray-400">
        <div>
          <span className="font-medium text-green-500">↑ 2%</span> vs last semester
        </div>
        <div className="text-right">
          <span className="font-medium">92%</span> overall
        </div>
      </div>
    </div>
  );
};

export default AttendanceChart;