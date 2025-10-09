import { useState } from 'react';
import { Upload, TrendingUp, PieChart, BarChart3, Download } from 'lucide-react';

interface DataStats {
  totalRows: number;
  totalColumns: number;
  columns: string[];
  numericColumns: string[];
  categoricalColumns: string[];
  summary: Record<string, { min?: number; max?: number; avg?: number; count?: number }>;
}

export default function DashboardGenerator() {
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<any[]>([]);
  const [stats, setStats] = useState<DataStats | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (!uploadedFile) return;

    setFile(uploadedFile);
    setLoading(true);

    try {
      const text = await uploadedFile.text();
      const rows = text.split('\n').filter(row => row.trim());
      const headers = rows[0].split(',').map(h => h.trim());

      const parsedData = rows.slice(1).map(row => {
        const values = row.split(',').map(v => v.trim());
        const obj: any = {};
        headers.forEach((header, index) => {
          obj[header] = values[index];
        });
        return obj;
      });

      setData(parsedData);
      analyzeData(parsedData, headers);
    } catch (error) {
      console.error('Error parsing file:', error);
      alert('Error parsing file. Please ensure it is a valid CSV file.');
    } finally {
      setLoading(false);
    }
  };

  const analyzeData = (parsedData: any[], headers: string[]) => {
    const numericCols: string[] = [];
    const categoricalCols: string[] = [];
    const summary: Record<string, any> = {};

    headers.forEach(header => {
      const values = parsedData.map(row => row[header]);
      const numericValues = values.map(v => parseFloat(v)).filter(v => !isNaN(v));

      if (numericValues.length > values.length * 0.5) {
        numericCols.push(header);
        summary[header] = {
          min: Math.min(...numericValues),
          max: Math.max(...numericValues),
          avg: numericValues.reduce((a, b) => a + b, 0) / numericValues.length,
        };
      } else {
        categoricalCols.push(header);
        const counts: Record<string, number> = {};
        values.forEach(v => {
          counts[v] = (counts[v] || 0) + 1;
        });
        summary[header] = { count: Object.keys(counts).length };
      }
    });

    setStats({
      totalRows: parsedData.length,
      totalColumns: headers.length,
      columns: headers,
      numericColumns: numericCols,
      categoricalColumns: categoricalCols,
      summary,
    });
  };

  const getChartData = (column: string) => {
    if (!data.length) return [];

    const values = data.map(row => parseFloat(row[column])).filter(v => !isNaN(v));
    return values.slice(0, 20);
  };

  const getCategoricalDistribution = (column: string) => {
    if (!data.length) return {};

    const counts: Record<string, number> = {};
    data.forEach(row => {
      const value = row[column];
      counts[value] = (counts[value] || 0) + 1;
    });

    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {});
  };

  return (
    <section id="dashboard-generator" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Interactive Dashboard Generator
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"></div>

        <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
          Upload your CSV or Excel file and instantly generate interactive dashboards with
          automated insights, statistical summaries, and visualizations.
        </p>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 mb-8">
          <div className="flex flex-col items-center justify-center">
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-slate-600 rounded-xl hover:border-cyan-500 transition-all duration-300 bg-slate-900/30 hover:bg-slate-900/50"
            >
              <Upload className="w-16 h-16 text-slate-400 mb-4" />
              <p className="text-lg font-semibold text-slate-300 mb-2">
                {file ? file.name : 'Click to upload or drag and drop'}
              </p>
              <p className="text-sm text-slate-500">CSV or Excel files (Max 10MB)</p>
            </label>
            <input
              id="file-upload"
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-slate-300">Analyzing your data...</p>
          </div>
        )}

        {stats && !loading && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">Total Rows</h3>
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                </div>
                <p className="text-3xl font-bold text-blue-400">{stats.totalRows.toLocaleString()}</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">Total Columns</h3>
                  <PieChart className="w-6 h-6 text-cyan-400" />
                </div>
                <p className="text-3xl font-bold text-cyan-400">{stats.totalColumns}</p>
              </div>

              <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">Numeric Fields</h3>
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <p className="text-3xl font-bold text-purple-400">{stats.numericColumns.length}</p>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <BarChart3 className="text-cyan-400" />
                Column Summary
              </h3>

              <div className="space-y-4">
                {stats.numericColumns.map(column => (
                  <div key={column} className="bg-slate-900/50 rounded-lg p-4">
                    <h4 className="font-semibold text-lg mb-3 text-cyan-300">{column}</h4>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-slate-400">Min:</span>
                        <span className="ml-2 font-semibold">{stats.summary[column].min?.toFixed(2)}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Max:</span>
                        <span className="ml-2 font-semibold">{stats.summary[column].max?.toFixed(2)}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Avg:</span>
                        <span className="ml-2 font-semibold">{stats.summary[column].avg?.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-1 h-32 items-end">
                      {getChartData(column).map((value, index) => {
                        const maxVal = Math.max(...getChartData(column));
                        const height = (value / maxVal) * 100;
                        return (
                          <div
                            key={index}
                            className="flex-1 bg-gradient-to-t from-cyan-600 to-blue-600 rounded-t"
                            style={{ height: `${height}%` }}
                            title={`${value.toFixed(2)}`}
                          ></div>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {stats.categoricalColumns.map(column => {
                  const distribution = getCategoricalDistribution(column);
                  const maxCount = Math.max(...Object.values(distribution));

                  return (
                    <div key={column} className="bg-slate-900/50 rounded-lg p-4">
                      <h4 className="font-semibold text-lg mb-3 text-cyan-300">{column}</h4>
                      <p className="text-sm text-slate-400 mb-4">
                        {stats.summary[column].count} unique values
                      </p>
                      <div className="space-y-2">
                        {Object.entries(distribution).map(([key, value]) => (
                          <div key={key} className="flex items-center gap-3">
                            <span className="text-sm text-slate-300 w-32 truncate">{key}</span>
                            <div className="flex-1 bg-slate-800 rounded-full h-6 overflow-hidden">
                              <div
                                className="bg-gradient-to-r from-purple-600 to-pink-600 h-full rounded-full flex items-center justify-end px-2"
                                style={{ width: `${(value / maxCount) * 100}%` }}
                              >
                                <span className="text-xs font-semibold">{value}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Download className="text-cyan-400" />
                Data Preview
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      {stats.columns.map(col => (
                        <th key={col} className="px-4 py-3 text-left font-semibold text-cyan-300">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.slice(0, 10).map((row, index) => (
                      <tr key={index} className="border-b border-slate-800 hover:bg-slate-900/30">
                        {stats.columns.map(col => (
                          <td key={col} className="px-4 py-3 text-slate-300">
                            {row[col]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {data.length > 10 && (
                <p className="text-center text-slate-400 mt-4 text-sm">
                  Showing 10 of {data.length} rows
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
