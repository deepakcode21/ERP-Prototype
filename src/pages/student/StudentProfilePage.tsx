import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/Tabs';
import { User, Phone, Mail, MapPin, Users, Book, FileText, Award } from 'lucide-react';

const StudentProfilePage: React.FC = () => {
  // Mock student data
  const student = {
    id: '2023ST001',
    name: 'Student User',
    email: 'student@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Campus Drive, University City, CA 94102',
    dateOfBirth: 'January 15, 2003',
    gender: 'Male',
    bloodGroup: 'O+',
    admissionDate: 'August 12, 2021',
    program: 'Computer Science',
    batch: '2021-2025',
    currentSemester: '4th Semester',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?u=student',
    parents: [
      {
        name: 'John Doe',
        relation: 'Father',
        phone: '+1 (555) 987-6543',
        email: 'john.doe@example.com',
        occupation: 'Engineer'
      },
      {
        name: 'Jane Doe',
        relation: 'Mother',
        phone: '+1 (555) 765-4321',
        email: 'jane.doe@example.com',
        occupation: 'Doctor'
      }
    ],
    academics: {
      gpa: 3.8,
      credits: {
        completed: 65,
        total: 120
      },
      courses: [
        { code: 'CS201', name: 'Data Structures', grade: 'A', credits: 4 },
        { code: 'CS202', name: 'Algorithms', grade: 'A-', credits: 4 },
        { code: 'CS301', name: 'Database Systems', grade: 'B+', credits: 3 },
        { code: 'MTH201', name: 'Discrete Mathematics', grade: 'A', credits: 3 }
      ]
    }
  };
  
  const [activeImage, setActiveImage] = useState(student.avatar);
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Student Profile</h1>
      
      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-6">
        <div className="flex flex-col md:flex-row">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <img 
              src={activeImage} 
              alt={student.name} 
              className="w-32 h-32 rounded-lg object-cover border-4 border-white dark:border-gray-700 shadow-sm"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">{student.name}</h2>
                <p className="text-gray-600 dark:text-gray-400">Student ID: {student.id}</p>
                <p className="text-primary font-medium">{student.program} • {student.batch}</p>
                
                <div className="mt-4 flex flex-wrap gap-y-2 gap-x-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Mail size={16} className="mr-2" />
                    <span>{student.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Phone size={16} className="mr-2" />
                    <span>{student.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin size={16} className="mr-2" />
                    <span>{student.address}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:bg-opacity-30 dark:text-green-300">
                  {student.status}
                </span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm text-gray-500 dark:text-gray-400">Current Semester</p>
                <p className="font-medium text-gray-800 dark:text-white">{student.currentSemester}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm text-gray-500 dark:text-gray-400">GPA</p>
                <p className="font-medium text-gray-800 dark:text-white">{student.academics.gpa.toFixed(1)}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                <p className="text-sm text-gray-500 dark:text-gray-400">Credits Completed</p>
                <p className="font-medium text-gray-800 dark:text-white">
                  {student.academics.credits.completed}/{student.academics.credits.total}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <Tabs defaultValue="personal">
        <TabsList className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg p-1 mb-6">
          <TabsTrigger value="personal">
            <User size={16} className="mr-2" />
            Personal
          </TabsTrigger>
          <TabsTrigger value="academic">
            <Book size={16} className="mr-2" />
            Academic
          </TabsTrigger>
          <TabsTrigger value="family">
            <Users size={16} className="mr-2" />
            Family
          </TabsTrigger>
          <TabsTrigger value="documents">
            <FileText size={16} className="mr-2" />
            Documents
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="personal" className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Full Name</p>
                <p className="font-medium text-gray-800 dark:text-white">{student.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <p className="font-medium text-gray-800 dark:text-white">{student.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                <p className="font-medium text-gray-800 dark:text-white">{student.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Date of Birth</p>
                <p className="font-medium text-gray-800 dark:text-white">{student.dateOfBirth}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Gender</p>
                <p className="font-medium text-gray-800 dark:text-white">{student.gender}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Blood Group</p>
                <p className="font-medium text-gray-800 dark:text-white">{student.bloodGroup}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Address</p>
                <p className="font-medium text-gray-800 dark:text-white">{student.address}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Admission Date</p>
                <p className="font-medium text-gray-800 dark:text-white">{student.admissionDate}</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="academic" className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Academic Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                <p className="text-sm text-gray-500 dark:text-gray-400">Program</p>
                <p className="font-medium text-gray-800 dark:text-white">{student.program}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                <p className="text-sm text-gray-500 dark:text-gray-400">Batch</p>
                <p className="font-medium text-gray-800 dark:text-white">{student.batch}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                <p className="text-sm text-gray-500 dark:text-gray-400">Current Semester</p>
                <p className="font-medium text-gray-800 dark:text-white">{student.currentSemester}</p>
              </div>
            </div>
            
            <h4 className="text-md font-semibold text-gray-800 dark:text-white mb-4">Current Courses</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Course Code
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Course Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Credits
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Grade
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {student.academics.courses.map((course) => (
                    <tr key={course.code}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">
                        {course.code}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                        {course.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                        {course.credits}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:bg-opacity-30 dark:text-green-300">
                          {course.grade}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="family" className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Family Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {student.parents.map((parent, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-4">
                      {parent.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">{parent.name}</h4>
                      <p className="text-sm text-primary">{parent.relation}</p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Mail size={14} className="mr-2" />
                          <span>{parent.email}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Phone size={14} className="mr-2" />
                          <span>{parent.phone}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <User size={14} className="mr-2" />
                          <span>{parent.occupation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="documents" className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Documents</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4 hover:border-primary dark:hover:border-primary transition-colors">
                <div className="flex items-center">
                  <Award size={24} className="text-primary mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">High School Diploma</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Uploaded on May 15, 2021</p>
                  </div>
                </div>
                <button className="mt-3 w-full py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  View Document
                </button>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4 hover:border-primary dark:hover:border-primary transition-colors">
                <div className="flex items-center">
                  <Award size={24} className="text-primary mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">Birth Certificate</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Uploaded on May 15, 2021</p>
                  </div>
                </div>
                <button className="mt-3 w-full py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  View Document
                </button>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4 hover:border-primary dark:hover:border-primary transition-colors">
                <div className="flex items-center">
                  <Award size={24} className="text-primary mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">Passport</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Uploaded on May 15, 2021</p>
                  </div>
                </div>
                <button className="mt-3 w-full py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  View Document
                </button>
              </div>
            </div>
            
            <div className="mt-6">
              <button className="flex items-center justify-center w-full py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md text-gray-600 dark:text-gray-400 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-colors">
                <FileText size={18} className="mr-2" />
                Upload New Document
              </button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentProfilePage;