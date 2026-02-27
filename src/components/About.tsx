import { TrendingUp, BarChart3, Lightbulb, GraduationCap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: TrendingUp,
      title: '3 Years',
      description: 'Experience in Data Analytics',
    },
    {
      icon: BarChart3,
      title: 'Data-Driven',
      description: 'Improved reporting efficiency by 30%',
    },
    {
      icon: Lightbulb,
      title: 'Business Insights',
      description: 'Turned complex data into clear decisions',
    },
    {
      icon: GraduationCap,
      title: 'Advanced',
      description: 'Statistical Modeling',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I'm a passionate data analyst with a proven track record of transforming raw data
              into strategic insights that drive business growth. My expertise spans statistical
              analysis, predictive modeling, and creating compelling data visualizations.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I specialize in uncovering hidden patterns, identifying trends, and building
              data-driven solutions that solve complex business problems. My approach combines
              technical expertise with clear communication to make data accessible to all stakeholders.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Whether it's building predictive models, designing interactive dashboards, or
              conducting in-depth analyses, I'm committed to delivering insights that make a
              measurable impact.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-blue-600 mb-3" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
