import { BookOpen, ExternalLink, Award } from 'lucide-react';

export default function Publications() {
  const publications = [
    {
      title: 'Early Stage Lung Cancer Detection Using Machine Learning Algorithms',
      authors: 'Your Name, Dr. John Smith, Dr. Sarah Johnson',
      journal: 'International Journal of Medical Informatics',
      year: '2023',
      volume: 'Vol. 45, Issue 3',
      pages: 'pp. 234-248',
      doi: '10.1016/j.ijmedinf.2023.104567',
      abstract: 'This research presents a comprehensive machine learning approach for early detection of lung cancer using CT scan images. We developed and compared multiple algorithms including Random Forest, SVM, and Deep Neural Networks, achieving 94.2% accuracy in detecting early-stage lung cancer.',
      citations: 28,
      link: '#',
      impact: 'High Impact Factor: 4.8'
    },
    {
      title: 'Predictive Analytics in Healthcare: A Data-Driven Approach to Patient Risk Assessment',
      authors: 'Your Name, Dr. Emily Chen, Dr. Michael Brown',
      journal: 'Journal of Healthcare Analytics',
      year: '2022',
      volume: 'Vol. 12, Issue 2',
      pages: 'pp. 145-162',
      doi: '10.1177/jhca.2022.345678',
      abstract: 'An innovative framework for patient risk assessment using predictive analytics and machine learning. The study demonstrates how big data analytics can improve clinical decision-making and reduce hospital readmission rates by 31%.',
      citations: 42,
      link: '#',
      impact: 'Impact Factor: 3.9'
    },
    {
      title: 'Advanced Statistical Methods for Financial Fraud Detection in Real-Time Payment Systems',
      authors: 'Your Name, Dr. Robert Wilson',
      journal: 'IEEE Transactions on Computational Finance',
      year: '2021',
      volume: 'Vol. 28, Issue 4',
      pages: 'pp. 892-907',
      doi: '10.1109/tcf.2021.789456',
      abstract: 'This paper introduces novel statistical methods for detecting fraudulent transactions in real-time payment systems. Our approach combines anomaly detection with behavioral analytics, achieving 99.1% fraud detection rate with minimal false positives.',
      citations: 67,
      link: '#',
      impact: 'Impact Factor: 5.2'
    }
  ];

  return (
    <section id="publications" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Publications
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4"></div>
        <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
          Research contributions published in peer-reviewed journals and conferences
        </p>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">
                    {pub.title}
                  </h3>
                  <p className="text-slate-600 mb-2">{pub.authors}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-slate-600 mb-3">
                    <span className="font-semibold text-blue-600">{pub.journal}</span>
                    <span>•</span>
                    <span>{pub.year}</span>
                    <span>•</span>
                    <span>{pub.volume}</span>
                    <span>•</span>
                    <span>{pub.pages}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 items-center mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      <Award className="w-4 h-4" />
                      {pub.impact}
                    </span>
                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                      {pub.citations} Citations
                    </span>
                  </div>
                </div>
              </div>

              <div className="ml-16">
                <p className="text-slate-700 mb-4 leading-relaxed">
                  {pub.abstract}
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <span className="text-sm text-slate-500">DOI: {pub.doi}</span>
                  <a
                    href={pub.link}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Publication
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-100">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-1">{publications.length}</div>
              <div className="text-slate-600 font-medium">Publications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-1">
                {publications.reduce((sum, pub) => sum + pub.citations, 0)}
              </div>
              <div className="text-slate-600 font-medium">Total Citations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-1">4.6</div>
              <div className="text-slate-600 font-medium">Avg Impact Factor</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
