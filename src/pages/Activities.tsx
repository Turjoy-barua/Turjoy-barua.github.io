import React from 'react';

const Activities: React.FC = () => {
  const activities = [
    {
      title: "Volunteering – Emmaüs-Connect (Paris, France)",
      description: "At Emmaüs, I volunteered to help individuals—especially elderly or disadvantaged people—learn the basics of computer use. I guided them through tasks like typing, sending emails, navigating websites, and handling official administrative work online (such as CAF, Ameli, or job portals). I explained each step clearly, adapted to their pace, and encouraged them to become confident and independent in using technology. This experience strengthened my communication and teaching skills while allowing me to make a real difference in people's daily lives.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      link: "https://emmaus-connect.org/",
      linkText: "Emmaüs-Connect"
    },
    {
      title: "Cinematic Travel Vlogs – YouTube Channel",
      description: "A YouTube channel which offers an immersive experience through cinematic travel vlogs, capturing the beauty of natural landscapes and hidden urban architecture. Every video is meticulously crafted to blend artful storytelling with cinematic visuals, designed to transport viewers to places beyond the ordinary. Inspired by creators like Life of Riza, my videos blend vlog-style narration with cinematic techniques, capturing serene lakes, lush jungles, and vibrant cityscapes beyond the typical tourist paths. My goal is to transport viewers into these moments, allowing them to experience the journey alongside me, 'one frame at a time!'",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Music Journey",
      description: "Music has always been a meaningful part of my life and remains a cherished hobby. My journey began with five years of formal training, during which I performed in over six competitions in primary school. After taking a break, my passion for music was reignited in 2025, prompting me to return to creating and learning music. One of the most rewarding aspects of my journey has been teaching myself acoustic guitar through online resources. This self-taught approach has allowed me to explore new musical expressions, combining my formal training with the freedom of learning independently. Music continues to be a source of personal growth and enjoyment, and I look forward to evolving as a musician.",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Python Programming Journey",
      description: "My programming journey began in 2020 during the lockdown when I first encountered coding through Khan Academy. I started with HTML and CSS, learning the basics of web development before exploring JavaScript. However, it was when I discovered Python that my fascination truly took off. The simplicity yet power of Python captivated me, sparking a deep interest in understanding how logic works in programming, how commands control computers, and how applications are built. Since then, my journey has been one of continuous learning, where I've developed various intermediate-level projects. This passion for Python has only grown, and I now actively apply it in my NSI specialty, pushing my knowledge further and continuing to explore its potential in the world of technology.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Education and Adaptation Journey in France",
      description: "Arriving in France marked the beginning of a challenging yet rewarding journey. The French language, with its unique accent, was the biggest obstacle, along with adapting to a completely new culture. Despite the difficulties, I faced them with determination, eager to learn and integrate. My journey began in UPE2A, where I built the foundation of my French skills with the support of dedicated teachers and new friendships. The transition to Première Générale was made possible not only through my efforts but also thanks to the encouragement of my professors especially my French teacher, who always pushed me to move forward. My parents' words, reminding me that 'there's a reason for every action,' kept me focused and resilient. Looking back, I'm proud of how far I've come—not just in mastering the language but in understanding the culture and building lasting connections. This experience taught me the value of perseverance and the importance of stepping out of my comfort zone.",
      image: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">My Activities</h1>
          <p className="text-gray-500 mb-12 text-center text-lg">
            Beyond academics and coding, here are some of the activities that I'm actively involved in or passionate about:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="mb-4 h-48 overflow-hidden rounded-lg">
                  <img 
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {activity.title.includes('Emmaüs') ? (
                    <>
                      Volunteering – <a 
                        href={activity.link} 
                        className="text-green-600 hover:text-primary-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {activity.linkText}
                      </a> (Paris, France)
                    </>
                  ) : (
                    activity.title
                  )}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
