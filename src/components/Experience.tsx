import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Mastercard',
      logo: '💳',
      position: 'Data Analyst/Scientist',
      location: 'New York, NY',
      period: 'Feb 2024 - Present',
      description: 'Leading data analytics initiatives for payment processing systems, analyzing transaction patterns and fraud detection metrics.',
      achievements: [
        'Developed predictive models that reduced fraudulent transactions by 35%',
        'Built executive dashboards tracking $50B+ in annual transaction volume',
        'Led a team of 3 analysts in implementing automated reporting systems',
        'Optimized data pipelines resulting in 60% faster report generation'
      ],
      technologies: ['Python', 'SQL', 'Tableau', 'AWS', 'Spark']
    },
    {
      company: 'Cognizant',
      logo: '🔷',
      position: 'Data Analyst',
      location: 'Hyderabad, India',
      period: 'Aug 2021 - May 2022',
      description: 'Provided data analytics and business intelligence solutions.',
      achievements: [
        'Designed Power BI dashboards to visualize business metrics, improving stakeholder decision-making speed by 25%',
        'Managed digital analytics projects, tracking website interactions using Google Analytics and Google Tag Manager to improve campaign performance insights',
        'Integrated AWS Glue with Amazon RDS for periodic extraction and transformation of transactional data',
        'Migrated legacy SQL Server reporting pipelines to AWS Redshift, improving query speeds by over 50%'
      ],
      technologies: ['Python', 'R', 'Power BI', 'SQL Server', 'Excel']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Work Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-16"></div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-cyan-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="lg:w-1/2 flex justify-end">
                  <div
                    className={`w-full ${
                      index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-5xl">{exp.logo}</div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-slate-900 mb-1">
                            {exp.position}
                          </h3>
                          <p className="text-xl text-blue-600 font-semibold mb-3">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-slate-600">
                              <span className="text-blue-600 mt-1">•</span>
                              <span className="flex-1">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg z-10">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                </div>

                {index % 2 === 1 && (
                  <div className="lg:w-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
