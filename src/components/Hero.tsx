import { BarChart3, Download, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl">
            <BarChart3 size={64} className="text-white" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Data Analyst
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
        Mahesh Muthyala
        </h2>

        <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light">
          Transforming Data into Actionable Insights
        </p>

        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Specialized in statistical analysis, data visualization, and predictive modeling.
          Turning complex datasets into clear, compelling stories that drive business decisions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View My Work
          </button>

          <button
            onClick={() => scrollToSection('dashboard-generator')}
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-lg font-semibold transition-all duration-300 border border-slate-700 hover:border-cyan-500"
          >
            Try Dashboard Generator
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-transparent hover:bg-slate-800 rounded-lg font-semibold transition-all duration-300 border border-slate-600 hover:border-slate-500 flex items-center gap-2"
          >
            <Mail size={20} />
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
