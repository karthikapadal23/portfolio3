import React from 'react';
import { Award } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  period: string;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      period: "May 2024 – May 2027"
    },
    {
      id: 2,
      title: "Red Hat Certified Enterprise Application Developer",
      issuer: "Red Hat",
      period: "Sep 2024"
    },
    {
      id: 3,
      title: "Salesforce AI Associate",
      issuer: "Salesforce",
      period: "Oct 2024"
    },
    {
      id: 4,
      title: "Fintech Professional Certificate",
      issuer: "Fintech Council of India",
      period: "July 2024"
    },
    {
      id: 5,
      title: "BEC Lingual Skill",
      issuer: "Cambridge English",
      period: "Aug 2023 – Aug 2026"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.id} className="mb-8 bg-white rounded-lg shadow-md p-6 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-gray-600 mb-1">{cert.issuer}</p>
                  <p className="text-sm text-blue-600">{cert.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
