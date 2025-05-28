import React, { useState } from 'react';
import { Search, Bell, MessageCircle, Send, User, UserPlus, Settings, MoreHorizontal, Phone, Video, Image, FileText, Smile } from 'lucide-react';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'other';
  timestamp: string;
  read: boolean;
}

interface Contact {
  id: number;
  name: string;
  role: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  online: boolean;
}

const CommunicationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('messages');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [messageInput, setMessageInput] = useState('');
  
  // Mock contacts data
  const contacts: Contact[] = [
    {
      id: 1,
      name: 'Dr. Alan Smith',
      role: 'Mathematics Teacher',
      avatar: 'https://i.pravatar.cc/150?u=teacher1',
      lastMessage: 'Don\'t forget to submit your assignment by tomorrow',
      timestamp: '10:30 AM',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Ms. Jessica Lee',
      role: 'Physics Teacher',
      avatar: 'https://i.pravatar.cc/150?u=teacher2',
      lastMessage: 'Great work on your last test!',
      timestamp: 'Yesterday',
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: 'Mr. Robert Chen',
      role: 'Computer Science Teacher',
      avatar: 'https://i.pravatar.cc/150?u=teacher3',
      lastMessage: 'Please check the course materials I shared',
      timestamp: '2 days ago',
      unread: 0,
      online: true
    },
    {
      id: 4,
      name: 'Science Club',
      role: 'Group',
      avatar: 'https://i.pravatar.cc/150?u=group1',
      lastMessage: 'Meeting scheduled for Friday at 3 PM',
      timestamp: '3 days ago',
      unread: 1,
      online: false
    },
    {
      id: 5,
      name: 'Student Council',
      role: 'Group',
      avatar: 'https://i.pravatar.cc/150?u=group2',
      lastMessage: 'New event proposal needs review',
      timestamp: '1 week ago',
      unread: 0,
      online: false
    }
  ];
  
  // Filter contacts based on search query
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.role.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Mock messages for selected contact
  const messages: Message[] = [
    {
      id: 1,
      content: 'Hello! How can I help you with your Mathematics assignment?',
      sender: 'other',
      timestamp: '10:00 AM',
      read: true
    },
    {
      id: 2,
      content: 'I\'m having trouble with the calculus problems from chapter 5.',
      sender: 'user',
      timestamp: '10:05 AM',
      read: true
    },
    {
      id: 3,
      content: 'Could you please explain how to solve problem #3?',
      sender: 'user',
      timestamp: '10:06 AM',
      read: true
    },
    {
      id: 4,
      content: 'Of course! For problem #3, you need to use the chain rule for differentiation. Here\'s how you approach it...',
      sender: 'other',
      timestamp: '10:15 AM',
      read: true
    },
    {
      id: 5,
      content: 'First, identify the outer and inner functions. Then differentiate the outer function with respect to the inner function, and multiply by the derivative of the inner function.',
      sender: 'other',
      timestamp: '10:16 AM',
      read: true
    },
    {
      id: 6,
      content: 'That makes sense! So if f(x) = sin(x²), then the outer function is sin(u) and the inner function is u = x²?',
      sender: 'user',
      timestamp: '10:20 AM',
      read: true
    },
    {
      id: 7,
      content: 'Exactly! So f\'(x) = cos(x²) · 2x. You\'re getting it! Don\'t forget to submit your assignment by tomorrow.',
      sender: 'other',
      timestamp: '10:30 AM',
      read: false
    }
  ];
  
  // Handle sending a message
  const handleSendMessage = () => {
    if (messageInput.trim() === '') return;
    // In a real app, this would send the message to the backend
    console.log('Sending message:', messageInput);
    setMessageInput('');
  };
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Communication</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="flex h-[calc(80vh-2rem)]">
          {/* Left Sidebar */}
          <div className="w-full md:w-1/3 lg:w-1/4 border-r dark:border-gray-700 flex flex-col">
            {/* Tabs */}
            <div className="flex border-b dark:border-gray-700">
              <button
                onClick={() => setActiveTab('messages')}
                className={`flex-1 px-4 py-3 text-sm font-medium ${
                  activeTab === 'messages'
                    ? 'border-b-2 border-primary text-primary dark:text-primary-light'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                <MessageCircle size={16} className="inline mr-1" />
                Messages
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`flex-1 px-4 py-3 text-sm font-medium ${
                  activeTab === 'notifications'
                    ? 'border-b-2 border-primary text-primary dark:text-primary-light'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                <Bell size={16} className="inline mr-1" />
                Notifications
              </button>
            </div>
            
            {/* Search */}
            <div className="p-3 border-b dark:border-gray-700">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md text-gray-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light"
                />
              </div>
            </div>
            
            {/* Contact List */}
            <div className="flex-1 overflow-y-auto">
              {activeTab === 'messages' && (
                <div className="divide-y dark:divide-gray-700">
                  {filteredContacts.map((contact) => (
                    <div
                      key={contact.id}
                      className={`p-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${
                        selectedContact?.id === contact.id ? 'bg-gray-50 dark:bg-gray-700' : ''
                      }`}
                      onClick={() => setSelectedContact(contact)}
                    >
                      <div className="flex items-start">
                        <div className="relative mr-3">
                          <img
                            src={contact.avatar}
                            alt={contact.name}
                            className="w-10 h-10 rounded-full"
                          />
                          {contact.online && (
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between">
                            <h3 className="text-sm font-medium text-gray-800 dark:text-white truncate">{contact.name}</h3>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{contact.timestamp}</span>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{contact.role}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 truncate">{contact.lastMessage}</p>
                        </div>
                        {contact.unread > 0 && (
                          <span className="ml-2 bg-primary text-white text-xs font-medium px-2 py-0.5 rounded-full">
                            {contact.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'notifications' && (
                <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                  <Bell size={40} className="mx-auto mb-4 text-gray-300 dark:text-gray-600" />
                  <p>No new notifications</p>
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="p-3 border-t dark:border-gray-700">
              <button className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors text-sm flex items-center justify-center">
                <UserPlus size={16} className="mr-2" />
                New Conversation
              </button>
            </div>
          </div>
          
          {/* Chat Area */}
          <div className="hidden md:flex md:w-2/3 lg:w-3/4 flex-col">
            {selectedContact ? (
              <>
                {/* Chat Header */}
                <div className="flex items-center justify-between p-3 border-b dark:border-gray-700">
                  <div className="flex items-center">
                    <img
                      src={selectedContact.avatar}
                      alt={selectedContact.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h3 className="font-medium text-gray-800 dark:text-white">{selectedContact.name}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {selectedContact.online ? 'Online' : 'Offline'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                      <Phone size={18} />
                    </button>
                    <button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                      <Video size={18} />
                    </button>
                    <button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                      <User size={18} />
                    </button>
                    <button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                </div>
                
                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {message.sender === 'other' && (
                          <img
                            src={selectedContact.avatar}
                            alt={selectedContact.name}
                            className="w-8 h-8 rounded-full mr-2 self-end"
                          />
                        )}
                        <div
                          className={`max-w-[70%] p-3 rounded-lg ${
                            message.sender === 'user'
                              ? 'bg-primary text-white'
                              : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <div className={`text-xs mt-1 ${
                            message.sender === 'user'
                              ? 'text-blue-100'
                              : 'text-gray-500 dark:text-gray-400'
                          }`}>
                            {message.timestamp}
                            {message.sender === 'user' && (
                              <span className="ml-1">
                                {message.read ? '✓✓' : '✓'}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Message Input */}
                <div className="p-3 border-t dark:border-gray-700">
                  <div className="flex items-end">
                    <div className="flex space-x-1 mr-2">
                      <button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                        <Image size={18} />
                      </button>
                      <button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                        <FileText size={18} />
                      </button>
                      <button className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                        <Smile size={18} />
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Type a message..."
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1 py-2 px-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={messageInput.trim() === ''}
                      className={`ml-2 p-2 rounded-full ${
                        messageInput.trim() === ''
                          ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                          : 'bg-primary text-white hover:bg-primary-dark'
                      }`}
                    >
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="text-center">
                  <MessageCircle size={48} className="mx-auto mb-4 text-gray-300 dark:text-gray-600" />
                  <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">Your Messages</h3>
                  <p className="text-gray-500 dark:text-gray-400">Select a conversation to start messaging</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationPage;