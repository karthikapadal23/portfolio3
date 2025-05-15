import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

interface Job {
  id: number;
  company: string;
  title: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

const Experience = () => {
  const [activeJob, setActiveJob] = useState<number>(2); // Default to first job

  const jobs: Job[] = [
    {
      id: 2,
      company: "Kognitiv Club",
      title: "Marketing Core",
      period: "2023-2025",
      location: "KL University",
      description: [
        "Blending tech with teamwork, I contribute to organizing AI/ML workshops, engaging events, and creative outreach campaigns.",
        "From curating content to coordinating sessions, I help drive a vibrant tech community that learns, builds, and grows together.",
        "Played a key role in hosting high-impact events like Machine Learning model showcases and recruitment drives.",
        "Collaborated on innovative initiatives to make technical concepts more accessible and exciting for students across disciplines."
      ],
      technologies: ["Python", "AI", "ML", "Marketing Strategies"]
    },
    {
      id: 3,
      company: "AICTE Edu Skills",
      title: "Cloud Virtual Intern",
      period: "Jan 2024 - Mar 2024",
      location: "Virtual",
      description: [
        "Deployed and monitored cloud-based applications using AWS services such as EC2, S3, and Lambda.",
        "Designed CI/CD pipelines with Jenkins and Docker, improving deployment efficiency by 30%.",
        "Optimized resource usage by implementing auto-scaling groups, reducing operational costs."
      ],
      technologies: ["Docker", "Jenkins", "JavaScript", "Java", "CI/CD Pipelines", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Job Selector Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {jobs.map((job) => (
                <button
                  key={job.id}
                  type="button"
                  onClick={() => setActiveJob(job.id)}
                  className={`w-full text-left px-6 py-4 border-l-4 transition ${
                    activeJob === job.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-transparent hover:bg-gray-100'
                  }`}
                >
                  <h3 className="font-medium text-gray-900">{job.company}</h3>
                  <p className="text-sm text-gray-600">{job.title}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Job Details */}
          <div className="lg:col-span-2">
            {jobs.map((job) => (
              <div
                key={job.id}
                className={`bg-white rounded-lg shadow-md p-6 transition-opacity duration-300 ${
                  activeJob === job.id ? 'block opacity-100' : 'hidden opacity-0'
                }`}
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                  <p className="text-xl text-blue-600">{job.company}</p>
                </div>

                <div className="flex items-center gap-4 mb-6 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{job.period}</span>
                  </div>
                  <div className="flex items-center">
                    <span>{job.location}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Responsibilities:</h4>
                  <ul className="space-y-2">
                    {job.description.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3"></span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
