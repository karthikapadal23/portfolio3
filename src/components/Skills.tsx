import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'HTML5', level: 95, category: 'frontend' },
    { name: 'CSS3/SCSS', level: 90, category: 'frontend' },
    { name: 'Node.js', level: 80, category: 'backend' },
    { name: 'Express.js', level: 75, category: 'backend' },
    { name: 'MongoDB', level: 70, category: 'backend' },
    { name: 'SQL', level: 75, category: 'backend' },
    { name: 'Docker', level: 90, category: 'devops' },
    { name: 'Jenkins', level: 90, category: 'devops' },
    { name: 'AWS', level: 65, category: 'devops' },
    { name: 'Git/GitHub', level: 90, category: 'devops' },
    { name: 'UI/UX Design', level: 60, category: 'design' },
    { name: 'Figma', level: 75, category: 'design' },
  ];

  const [filter, setFilter] = React.useState<string>('all');

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'devops', name: 'DevOps' },
    { id: 'design', name: 'Design' },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I've developed a diverse set of skills throughout my career. Here's a comprehensive overview 
            of my technical expertise and proficiency levels.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-medium text-gray-900">{skill.name}</h3>
                <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;