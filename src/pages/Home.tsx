import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-start text-center px-4 pt-20"
        style={{
          backgroundImage: 'url(/IMG_6358.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="bg-white/30 p-8 rounded-xl max-w-2xl backdrop-blur-sm shadow-lg ml-4 sm:ml-12 lg:ml-24 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Hi, I'm Turjoy
          </h1>
          <p className="text-xl text-gray-800 mb-4">Student • Developer • Creator</p>
          <p className="text-lg text-gray-700 mb-8">
            Turning dreams into action, one step at a time. From Bangladesh to Paris, 
            pursuing excellence in technology and beyond.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/about"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Learn More
            </Link>
            <Link
              to="/projects"
              className="px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A motivated student from Bangladesh, now studying in Paris, France. 
              Passionate about programming, technology, and making a positive impact 
              through innovation and creativity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-code text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Programming</h3>
              <p className="text-gray-600">
                Python, JavaScript, HTML/CSS with a passion for problem-solving and building innovative solutions.
              </p>
            </div>
            <div className="text-center p-6 hover:transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-graduation-cap text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Education</h3>
              <p className="text-gray-600">
                Currently pursuing studies in France, mastering French language and adapting to new cultural experiences.
              </p>
            </div>
            <div className="text-center p-6 hover:transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Volunteering</h3>
              <p className="text-gray-600">
                Helping others learn technology at Emmaüs-Connect, making digital literacy accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What I Do</h2>
            <p className="text-lg text-gray-600">From coding to content creation, here's what keeps me busy</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all hover:transform hover:-translate-y-2">
              <i className="fas fa-laptop-code text-blue-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-gray-800 mb-2">Web Development</h3>
              <p className="text-gray-600 text-sm">Building responsive websites and web applications</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all hover:transform hover:-translate-y-2">
              <i className="fas fa-video text-red-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-gray-800 mb-2">Content Creation</h3>
              <p className="text-gray-600 text-sm">Cinematic travel vlogs and YouTube content</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all hover:transform hover:-translate-y-2">
              <i className="fas fa-music text-green-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-gray-800 mb-2">Music</h3>
              <p className="text-gray-600 text-sm">Guitar playing and musical composition</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all hover:transform hover:-translate-y-2">
              <i className="fas fa-hands-helping text-purple-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-gray-800 mb-2">Volunteering</h3>
              <p className="text-gray-600 text-sm">Teaching technology to those in need</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
