import React, { useState } from 'react';
import { Clock, Calendar, Filter, ChevronDown, Download } from 'lucide-react';

interface TimeSlot {
  id: number;
  day: string;
  startTime: string;
  endTime: string;
  subject: string;
  teacher: string;
  room: string;
  color: string;
}

const TimetablePage: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'weekly' | 'daily'>('weekly');
  const [selectedDay, setSelectedDay] = useState('Monday');
  
  // Days of the week
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  // Time slots
  const timeSlots = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];
  
  // Mock class data
  const classes: TimeSlot[] = [
    {
      id: 1,
      day: 'Monday',
      startTime: '8:00 AM',
      endTime: '9:30 AM',
      subject: 'Mathematics',
      teacher: 'Dr. Alan Smith',
      room: 'Room 101',
      color: 'bg-blue-100 border-blue-400 text-blue-800'
    },
    {
      id: 2,
      day: 'Monday',
      startTime: '10:00 AM',
      endTime: '11:30 AM',
      subject: 'Physics',
      teacher: 'Ms. Jessica Lee',
      room: 'Science Lab',
      color: 'bg-green-100 border-green-400 text-green-800'
    },
    {
      id: 3,
      day: 'Monday',
      startTime: '1:00 PM',
      endTime: '2:30 PM',
      subject: 'English Literature',
      teacher: 'Mrs. Emily Johnson',
      room: 'Room 205',
      color: 'bg-purple-100 border-purple-400 text-purple-800'
    },
    {
      id: 4,
      day: 'Tuesday',
      startTime: '9:00 AM',
      endTime: '10:30 AM',
      subject: 'Computer Science',
      teacher: 'Mr. Robert Chen',
      room: 'Computer Lab',
      color: 'bg-yellow-100 border-yellow-400 text-yellow-800'
    },
    {
      id: 5,
      day: 'Tuesday',
      startTime: '11:00 AM',
      endTime: '12:30 PM',
      subject: 'History',
      teacher: 'Dr. Michael Brown',
      room: 'Room 302',
      color: 'bg-red-100 border-red-400 text-red-800'
    },
    {
      id: 6,
      day: 'Wednesday',
      startTime: '8:00 AM',
      endTime: '9:30 AM',
      subject: 'Chemistry',
      teacher: 'Dr. Sarah Wilson',
      room: 'Chemistry Lab',
      color: 'bg-indigo-100 border-indigo-400 text-indigo-800'
    },
    {
      id: 7,
      day: 'Wednesday',
      startTime: '10:00 AM',
      endTime: '11:30 AM',
      subject: 'Mathematics',
      teacher: 'Dr. Alan Smith',
      room: 'Room 101',
      color: 'bg-blue-100 border-blue-400 text-blue-800'
    },
    {
      id: 8,
      day: 'Thursday',
      startTime: '1:00 PM',
      endTime: '2:30 PM',
      subject: 'Biology',
      teacher: 'Dr. Lisa Garcia',
      room: 'Biology Lab',
      color: 'bg-green-100 border-green-400 text-green-800'
    },
    {
      id: 9,
      day: 'Friday',
      startTime: '9:00 AM',
      endTime: '10:30 AM',
      subject: 'Physics',
      teacher: 'Ms. Jessica Lee',
      room: 'Science Lab',
      color: 'bg-green-100 border-green-400 text-green-800'
    },
    {
      id: 10,
      day: 'Friday',
      startTime: '11:00 AM',
      endTime: '12:30 PM',
      subject: 'Computer Science',
      teacher: 'Mr. Robert Chen',
      room: 'Computer Lab',
      color: 'bg-yellow-100 border-yellow-400 text-yellow-800'
    }
  ];
  
  // Filter classes by day
  const filteredClasses = selectedView === 'daily' 
    ? classes.filter(c => c.day === selectedDay)
    : classes;
  
  // Function to position class in the timetable grid
  const getClassPosition = (classItem: TimeSlot) => {
    const dayIndex = days.indexOf(classItem.day);
    const startHour = parseInt(classItem.startTime.split(':')[0]);
    const startPeriod = classItem.startTime.includes('PM') && startHour !== 12 ? startHour + 12 : startHour;
    const endHour = parseInt(classItem.endTime.split(':')[0]);
    const endPeriod = classItem.endTime.includes('PM') && endHour !== 12 ? endHour + 12 : endHour;
    
    const startTimeIndex = timeSlots.findIndex(time => {
      const hour = parseInt(time.split(':')[0]);
      const period = time.includes('PM') && hour !== 12 ? hour + 12 : hour;
      return period === startPeriod;
    });
    
    const duration = (endPeriod - startPeriod + (classItem.endTime.includes('30') ? 0.5 : 0));
    
    return {
      gridColumnStart: dayIndex + 2, // +2 because first column is for time labels
      gridRowStart: startTimeIndex + 1,
      gridRowEnd: `span ${duration * 2}` // Multiply by 2 for 30-minute intervals
    };
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Timetable</h1>
        <div className="flex space-x-2">
          <div className="relative">
            <button className="btn-outline flex items-center">
              <Filter size={16} className="mr-2" />
              Filter
              <ChevronDown size={16} className="ml-2" />
            </button>
          </div>
          <button className="btn-outline">
            <Download size={16} className="mr-2" />
            Export
          </button>
        </div>
      </div>
      
      {/* View Switcher */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
          <div className="flex space-x-2">
            <button
              onClick={() => setSelectedView('weekly')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                selectedView === 'weekly'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <Calendar size={16} className="inline mr-2" />
              Weekly View
            </button>
            <button
              onClick={() => setSelectedView('daily')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                selectedView === 'daily'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <Clock size={16} className="inline mr-2" />
              Daily View
            </button>
          </div>
          
          {selectedView === 'daily' && (
            <div>
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                className="input-field"
              >
                {days.map((day) => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
      
      {/* Timetable */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-x-auto">
        {selectedView === 'weekly' ? (
          // Weekly View
          <div className="min-w-max">
            <div className="grid grid-cols-7 gap-0">
              {/* Header Row */}
              <div className="p-4 border-b dark:border-gray-700 border-r dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
                <span className="text-gray-500 dark:text-gray-400 font-medium">Time</span>
              </div>
              {days.map((day) => (
                <div key={day} className="p-4 text-center border-b dark:border-gray-700 border-r dark:border-gray-700 last:border-r-0 bg-gray-50 dark:bg-gray-700">
                  <span className="text-gray-800 dark:text-white font-medium">{day}</span>
                </div>
              ))}
              
              {/* Time Slots */}
              {timeSlots.map((time, index) => (
                <React.Fragment key={time}>
                  <div className="p-3 border-b dark:border-gray-700 border-r dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{time}</span>
                  </div>
                  {days.map((day) => (
                    <div key={`${day}-${time}`} className="border-b dark:border-gray-700 border-r dark:border-gray-700 last:border-r-0 min-h-[60px]"></div>
                  ))}
                </React.Fragment>
              ))}
            </div>
            
            {/* Classes */}
            <div className="relative">
              {filteredClasses.map((classItem) => (
                <div
                  key={classItem.id}
                  className={`absolute p-2 rounded-md border-l-4 ${classItem.color} min-w-[150px] shadow-sm`}
                  style={{
                    top: `${(timeSlots.indexOf(classItem.startTime) + 1) * 60}px`,
                    left: `${(days.indexOf(classItem.day) + 1) * (100 / 7)}%`,
                    height: `${90}px`, // 90 minutes
                    width: `${100 / 7 - 2}%`
                  }}
                >
                  <h4 className="font-medium text-sm">{classItem.subject}</h4>
                  <p className="text-xs">{classItem.teacher}</p>
                  <div className="flex justify-between mt-1 text-xs">
                    <span>{classItem.startTime} - {classItem.endTime}</span>
                    <span>{classItem.room}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Daily View
          <div>
            <h3 className="p-4 text-lg font-semibold text-gray-800 dark:text-white border-b dark:border-gray-700">
              {selectedDay}'s Classes
            </h3>
            
            <div className="divide-y dark:divide-gray-700">
              {filteredClasses.length > 0 ? (
                filteredClasses.map((classItem) => (
                  <div key={classItem.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex items-start">
                        <div className={`w-2 h-12 rounded-full ${classItem.color.split(' ')[0]} mr-4`}></div>
                        <div>
                          <h4 className="font-medium text-gray-800 dark:text-white">{classItem.subject}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{classItem.teacher}</p>
                          <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                            <Clock size={14} className="mr-1" />
                            <span>{classItem.startTime} - {classItem.endTime}</span>
                            <span className="mx-2">•</span>
                            <span>{classItem.room}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-3 md:mt-0 md:ml-4">
                        <button className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                  No classes scheduled for {selectedDay}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimetablePage;