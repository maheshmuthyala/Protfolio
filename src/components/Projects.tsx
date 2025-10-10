import LungCancerPredictor from './LungCancerPredictor';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'PERSON IDENTIFICATION BASED ON TELUGU HANDWRITING USING CNN',
      description: 'The system proposed in this paper is the identification of person based on Telugu handwriting. Handwriting is the parameter used to identify the individual using Convolutional Neural Networks (CNN). The method proposed  has achieved good accuracy of 91% with the dataset taken',
      category: 'Data Analysis',
      technologies: ['Python', 'CNN', 'Pandas', 'Keras' , 'Scikit-learn'],
      image_url: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      hasPredictor: false
    },
    {
      id: 2,
      title: 'Sales Dashboard',
      description: 'Built an interactive sales dashboard tracking KPIs across multiple regions, providing real-time insights that reduced reporting time by 70%.',
      category: 'Visualization',
      technologies: ['Power BI', 'SQL', 'DAX'],
      image_url: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
      hasPredictor: false
    },
    {
      id: 3,
      title: 'EARLY STAGE LUNG CANCER DETECTION USING MACHINE LEARNING ALGORITHMS',
      description: 'The study evaluated different imputation methods and machine learning algorithms. Mean imputation outperformed KNN imputation, yielding slightly better algorithm accuracies. After feature selection and PCA, all algorithms performed well on the Data World dataset. On the UCI dataset, Logistic Regression, Naïve Bayes, and Decision Tree achieved strong accuracy. Overall, Mean imputation combined with Decision Tree produced the best results.',
      category: 'Machine Learning',
      technologies: ['Python', 'sklearn', 'Seaborn', 'TensorFlow', 'SQL'],
      image_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      hasPredictor: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-16"></div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className="space-y-8">
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    {project.image_url ? (
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-80 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                        <span className="text-slate-400 text-6xl">📊</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-4">
                  <div>
                    <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-lg text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-4">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {project.hasPredictor && (
                <div className="mt-8">
                  <LungCancerPredictor />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
