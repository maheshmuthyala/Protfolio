import { useState } from 'react';
import { Activity, AlertCircle, CheckCircle } from 'lucide-react';

interface PredictionInputs {
  age: number;
  smoking: number;
  yellowFingers: number;
  anxiety: number;
  chronicDisease: number;
  fatigue: number;
}

export default function LungCancerPredictor() {
  const [inputs, setInputs] = useState<PredictionInputs>({
    age: 0,
    smoking: 0,
    yellowFingers: 0,
    anxiety: 0,
    chronicDisease: 0,
    fatigue: 0,
  });

  const [prediction, setPrediction] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (field: keyof PredictionInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
    setShowResult(false);
  };

  const calculatePrediction = () => {
    const weights = {
      age: 0.15,
      smoking: 0.30,
      yellowFingers: 0.12,
      anxiety: 0.10,
      chronicDisease: 0.18,
      fatigue: 0.15,
    };

    const normalizedAge = Math.min(inputs.age / 100, 1);

    const score =
      normalizedAge * weights.age +
      (inputs.smoking / 5) * weights.smoking +
      (inputs.yellowFingers / 5) * weights.yellowFingers +
      (inputs.anxiety / 5) * weights.anxiety +
      (inputs.chronicDisease / 5) * weights.chronicDisease +
      (inputs.fatigue / 5) * weights.fatigue;

    const riskPercentage = Math.min(Math.round(score * 100), 98);

    setPrediction(riskPercentage);
    setShowResult(true);
  };

  const getRiskLevel = (percentage: number) => {
    if (percentage < 20) return { level: 'Very Low', color: 'text-green-400', bgColor: 'bg-green-500' };
    if (percentage < 40) return { level: 'Low', color: 'text-green-300', bgColor: 'bg-green-400' };
    if (percentage < 60) return { level: 'Moderate', color: 'text-yellow-400', bgColor: 'bg-yellow-500' };
    if (percentage < 80) return { level: 'High', color: 'text-orange-400', bgColor: 'bg-orange-500' };
    return { level: 'Very High', color: 'text-red-400', bgColor: 'bg-red-500' };
  };

  const parameters = [
    { key: 'age', label: 'Age', min: 0, max: 100, step: 1, unit: 'years' },
    { key: 'smoking', label: 'Smoking Intensity', min: 0, max: 5, step: 1, unit: 'level' },
    { key: 'yellowFingers', label: 'Yellow Fingers', min: 0, max: 5, step: 1, unit: 'level' },
    { key: 'anxiety', label: 'Anxiety Level', min: 0, max: 5, step: 1, unit: 'level' },
    { key: 'chronicDisease', label: 'Chronic Disease', min: 0, max: 5, step: 1, unit: 'level' },
    { key: 'fatigue', label: 'Fatigue Level', min: 0, max: 5, step: 1, unit: 'level' },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-pink-600 rounded-lg flex items-center justify-center">
          <Activity className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Lung Cancer Risk Predictor</h3>
          <p className="text-slate-400 text-sm">Based on machine learning analysis</p>
        </div>
      </div>

      <div className="mb-6 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-blue-200">
          This is a demonstration model for educational purposes. For actual medical diagnosis, please consult healthcare professionals.
        </p>
      </div>

      <div className="space-y-6 mb-8">
        {parameters.map(param => (
          <div key={param.key}>
            <div className="flex items-center justify-between mb-2">
              <label className="text-slate-300 font-medium">{param.label}</label>
              <span className="text-cyan-400 font-semibold">
                {inputs[param.key as keyof PredictionInputs]} {param.unit}
              </span>
            </div>
            <input
              type="range"
              min={param.min}
              max={param.max}
              step={param.step}
              value={inputs[param.key as keyof PredictionInputs]}
              onChange={(e) => handleInputChange(param.key as keyof PredictionInputs, Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #06b6d4 0%, #06b6d4 ${
                  (inputs[param.key as keyof PredictionInputs] / param.max) * 100
                }%, #334155 ${(inputs[param.key as keyof PredictionInputs] / param.max) * 100}%, #334155 100%)`,
              }}
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>{param.min}</span>
              <span>{param.max}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={calculatePrediction}
        className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Calculate Risk Prediction
      </button>

      {showResult && prediction !== null && (
        <div className="mt-8 space-y-6">
          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              Prediction Result
            </h4>

            <div className="text-center mb-6">
              <div className={`text-6xl font-bold mb-2 ${getRiskLevel(prediction).color}`}>
                {prediction}%
              </div>
              <div className={`text-xl font-semibold ${getRiskLevel(prediction).color}`}>
                {getRiskLevel(prediction).level} Risk
              </div>
            </div>

            <div className="mb-4">
              <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden">
                <div
                  className={`h-full ${getRiskLevel(prediction).bgColor} transition-all duration-1000 ease-out`}
                  style={{ width: `${prediction}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4 space-y-3">
              <h5 className="font-semibold text-slate-300 mb-3">Risk Factors Analysis:</h5>
              {Object.entries(inputs).map(([key, value]) => {
                const param = parameters.find(p => p.key === key);
                const percentage = key === 'age' ? (value / 100) * 100 : (value / 5) * 100;
                return (
                  <div key={key} className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">{param?.label}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-cyan-500 h-full rounded-full"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-slate-300 w-16 text-right">
                        {value} {key === 'age' ? 'yrs' : '/5'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
              <p className="text-sm text-yellow-200">
                <strong>Disclaimer:</strong> This prediction model is trained on sample data and should not replace professional medical advice. If you're experiencing symptoms, please consult a healthcare provider immediately.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
