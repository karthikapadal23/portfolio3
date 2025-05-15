import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
}

const Education = () => {
  const educationList: Education[] = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Engineering",
      institution: "KL University",
      location: "Vaddeswaram",
      period: "2022-2026",
      description:
        "Strong focus on software development fundamentals, algorithms, and data structures. Specialized in Software Engineering and DevOps.",
      achievements: ["CGPA: 9.3", "Marketing Core of the Kognitiv Club"]
    },
    {
      id: 2,
      degree: "Higher Secondary Education",
      institution: "Sri Chaitanya Junior College",
      location: "Repalle, Andhra Pradesh",
      period: "2020-2022",
      description: `Secured an outstanding 90% in Mathematics and Science, reflecting both analytical strength and academic dedication.
Served as Class Representative, demonstrating leadership, communication, and organizational skills.
Actively participated in cultural events, balancing academic excellence with a passion for creativity and community involvement.`
    },
    {
      id: 3,
      degree: "Secondary School (10th Grade)",
      institution: "A Little Flower The Leader",
      location: "Koduru, Andhra Pradesh",
      period: "2019-2020",
      description: `Completed foundational coursework in Mathematics, Social Sciences, and Languages, building a well-rounded academic base.
Actively engaged in school-level science exhibitions and quiz competitions, fostering curiosity and critical thinking from an early age.
Consistently recognized for academic excellence, disciplined work ethic, and a commitment to continuous learning.`
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

            {educationList.map((item, index) => (
              <div key={item.id} className="relative mb-12">
                <div className="flex flex-col md:flex-row items-start">
                  <div
                    className={`mb-6 md:mb-0 md:w-1/2 ${
                      index % 2 === 0
                        ? "md:pr-12"
                        : "md:order-2 md:pl-12 md:text-right"
                    }`}
                  >
                    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600 relative z-10">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {item.degree}
                      </h3>
                      <h4 className="text-lg text-blue-600 mb-2">
                        {item.institution}
                      </h4>

                      <div className="flex items-center text-gray-600 mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{item.period}</span>
                      </div>

                      <p className="text-gray-700 mb-4">{item.description}</p>

                      {item.achievements && (
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">Achievements:</h5>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <Award className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                                <span className="text-gray-700">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Timeline dot and icon */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center z-20">
                      <GraduationCap className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 1 ? "md:pr-12" : "md:order-1 md:pl-12"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
