import { Database, BarChart2, Code, Brain } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: BarChart2,
      title: 'Data Visualization',
      skills: ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn', 'Plotly', 'D3.js'],
      color: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Database,
      title: 'Data Management',
      skills: ['SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Excel', 'Google Sheets'],
      color: 'from-purple-600 to-pink-600',
    },
    {
      icon: Code,
      title: 'Programming',
      skills: ['Python', 'R', 'Pandas', 'NumPy', 'SQL', 'VBA'],
      color: 'from-green-600 to-teal-600',
    },
    {
      icon: Brain,
      title: 'Analytics & ML',
      skills: ['Statistical Analysis', 'Machine Learning', 'Predictive Modeling', 'A/B Testing', 'Regression', 'Classification'],
      color: 'from-orange-600 to-red-600',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Skills & Expertise
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
