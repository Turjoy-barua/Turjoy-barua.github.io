import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-yellow-50">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            About Me
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="w-full md:w-1/3 flex justify-center">
              <div 
                className="w-64 h-64 rounded-full shadow-lg border-4 border-white hover:transform hover:scale-105 transition-transform"
                style={{
                  backgroundImage: 'url(/IMG_6612.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Bonjour, I'm Turjoy</h2>
              <p className="text-gray-600 mb-4">
                A motivated student chasing his best life and dreaming of a future where he'll help lead the next generation.
              </p>
              <p className="text-gray-600 mb-6">
                Originally from Bangladesh, I now live and study in Paris, France. I'm passionate about computers, 
                programming, and understanding how the world of logic works. My dream is to study at one of the world's 
                top universities and use what I learn to contribute meaningfully to the age of AI and beyond.
              </p>
              <p className="text-gray-600 mb-6">
                What inspires me most is myself. I find motivation in every challenge, and I constantly remind myself 
                not to fear, but to move forward — no matter the situation.
              </p>
              <p className="text-gray-600 mb-6">
                Moving to a new country was not easy: a new language, new culture, new environment, new friends. 
                But I never saw it as a barrier — I saw it as an adventure, a new chapter in my life that I'm determined to make amazing.
              </p>
              <p className="text-gray-600 mb-6">
                In just one year, I went from zero to fluent in French and now study alongside native French students. 
                I'm proud of how far I've come. One important lesson I've learned is the power of connection — without it, you're just alone on the battlefield.
              </p>
              <p className="text-gray-600 mb-6">
                My goal is to grow, to learn, and to become someone my past self would be proud of. I want to lead, 
                give back, and do something meaningful for the communities that shaped me.
              </p>
              <p className="text-gray-600 mb-6">
                If you're here, I hope this page inspires you to keep going — even through the tough times. Because your story matters, too.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full hover:scale-105 transition-transform">
                  Self-motivated
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full hover:scale-105 transition-transform">
                  Inspired to inspire
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full hover:scale-105 transition-transform">
                  Logic and creativity
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full hover:scale-105 transition-transform">
                  Personal growth
                </span>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">My Journey</h2>
            <div className="max-w-2xl mx-auto space-y-8">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary-600 border-4 border-primary-200"></div>
                <h3 className="text-xl font-semibold text-gray-800">Started Learning Coding</h3>
                <p className="text-gray-500 mb-2">2020 - Present</p>
                <p className="text-gray-600">
                  Began with HTML/CSS during lockdown, progressed to JavaScript and Python, building various web projects and developing a passion for problem-solving.
                </p>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary-600 border-4 border-primary-200"></div>
                <h3 className="text-xl font-semibold text-gray-800">Moved to France</h3>
                <p className="text-gray-500 mb-2">2022</p>
                <p className="text-gray-600">
                  Began a new chapter in Paris, France, adapting to a new culture, language, and educational system while maintaining my passion for technology.
                </p>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary-600 border-4 border-primary-200"></div>
                <h3 className="text-xl font-semibold text-gray-800">Started Volunteering</h3>
                <p className="text-gray-500 mb-2">2023</p>
                <p className="text-gray-600">
                  Began volunteering at Emmaüs-Connect, helping elderly and disadvantaged individuals learn computer basics and digital literacy.
                </p>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary-600 border-4 border-primary-200"></div>
                <h3 className="text-xl font-semibold text-gray-800">YouTube Channel Launch</h3>
                <p className="text-gray-500 mb-2">2024</p>
                <p className="text-gray-600">
                  Started creating cinematic travel vlogs, combining my love for storytelling, cinematography, and sharing experiences with others.
                </p>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">My Moments</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Coding session" 
                  className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                />
                <div className="p-4 bg-white">
                  <p className="text-gray-600">Working on a coding project</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Volunteering" 
                  className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                />
                <div className="p-4 bg-white">
                  <p className="text-gray-600">Volunteering at Emmaüs-Connect</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Music performance" 
                  className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                />
                <div className="p-4 bg-white">
                  <p className="text-gray-600">Playing guitar and creating music</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
