import { BookOpen, ExternalLink, Award } from 'lucide-react';

export default function Publications() {
  const publications = [
    {
      title: 'Early Stage Lung Cancer Detection Using Machine Learning Algorithms',
      authors: 'Mahesh Muthyala, J Sreedevi, M Rama Bai',
      journal: 'Bioscience Biotechnology Research Communications',
      year: '2021',
      volume: 'Vol. 14, Issue 5',
      pages: 'pp. 306-313',
      doi: 'http://dx.doi.org/10.21786/bbrc/14.5/54',
      abstract: 'Lung cancer is an increasing syndrome in India as well as in the world. The international agency for research says that 5.5% of cancer patients in India are sick by lung cancer. Research is going on for predicting lung cancer detection at early stage using Computer Aided Systems. The dataset plays a important role in clinical research. If the data set contains a missed value, then we may get inaccurate results. To fill the missed values there are many number of imputation techniques. In this study Mean Imputer and KNN Imputer were used to impute the missing values. The classifiers compared are Support Vector Machine, Logistic Regression, Naïve Bayes Classifier, K-Nearest Neighbor and Decision Tree Classifier. These classifiers are compared based on accuracy. The confusion matrix is displayed for all five classifiers. At first imputation technique is applied and the accuracy of the classifiers is measured and then feature selection is done. On the selected features Principle Component Analysis (PCA) is used to increase the accuracy of the classifiers and the new accuracy of the classifiers is measured. The best combination of imputation techniques and machine learning classifiers is found to predict lung cancer. When Mean Imputation method is applied algorithms have achieved good accuracy and Decision Tree high accuracy',
      citations: 5,
      link: '',
      impact: 'High Impact Factor: 5.9'
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
      link: 'http://dx.doi.org/10.21786/bbrc/14.5/54',
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
