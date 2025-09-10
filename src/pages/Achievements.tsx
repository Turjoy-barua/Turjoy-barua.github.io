import React from 'react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "French Language Mastery",
      period: "2022-2024",
      description: "Successfully learned French from zero to fluency within one year, now studying alongside native French students in Première Générale."
    },
    {
      title: "Cultural Adaptation Success",
      period: "2022-2024",
      description: "Successfully adapted to French culture, educational system, and built meaningful connections in a new country."
    },
    {
      title: "Volunteering Impact",
      period: "2023-2024",
      description: "Making a positive impact at Emmaüs-Connect by teaching digital literacy to elderly and disadvantaged individuals."
    },
    {
      title: "Programming Journey",
      period: "2020-2024",
      description: "Self-taught programming from HTML/CSS to Python and JavaScript, building various projects and developing problem-solving skills."
    },
    {
      title: "Content Creation",
      period: "2024",
      description: "Launched YouTube channel with cinematic travel vlogs, combining storytelling, cinematography, and technical skills."
    }
  ];

  const badges = [
    {
      title: "French Language Proficiency",
      year: "2024",
      icon: "fas fa-language",
      color: "blue"
    },
    {
      title: "Community Service",
      year: "2023-2024",
      icon: "fas fa-hands-helping",
      color: "green"
    },
    {
      title: "Self-Taught Musician",
      year: "2020-2024",
      icon: "fas fa-music",
      color: "purple"
    },
    {
      title: "Content Creator",
      year: "2024",
      icon: "fas fa-video",
      color: "orange"
    }
  ];

  const getBadgeColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            My Achievements
          </h1>
          
          {/* Timeline Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Academic & Extracurricular Milestones
            </h2>
            <div className="max-w-2xl mx-auto space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary-600 border-4 border-primary-200"></div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-500 mb-2">{achievement.period}</p>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Badges Section */}
          <div>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Certifications & Badges
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {badges.map((badge, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2"
                >
                  <div className={`w-20 h-20 mx-auto mb-4 ${getBadgeColorClasses(badge.color)} rounded-full flex items-center justify-center`}>
                    <i className={`${badge.icon} text-3xl`}></i>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-sm">
                    {badge.title}
                  </h3>
                  <p className="text-xs text-gray-600">{badge.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
