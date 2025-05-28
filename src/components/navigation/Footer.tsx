import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-4 border-t dark:border-gray-700">
      <div className="mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} EduSuite. All rights reserved.
        </div>
        <div className="mt-2 md:mt-0 flex space-x-4">
          <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
            Terms of Service
          </a>
          <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
            Help Center
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;