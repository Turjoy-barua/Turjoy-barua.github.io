import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-200 text-gray-700 py-8 mt-10 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-gray-800">TURJOY</h3>
            <p className="text-gray-500">© {currentYear} All rights reserved</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <i className="fab fa-github fa-lg"></i>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a
              href="https://www.youtube.com/@baruaturjoy"
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube fa-lg"></i>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
