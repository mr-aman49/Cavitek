import React, { useState, useEffect } from 'react';
import { Calendar, Clock, AlertCircle } from 'lucide-react';

interface CycleData {
  lastPeriod: string;
  cycleLength: number;
  periodLength: number;
}

interface PeriodInfo {
  startDate: Date;
  endDate: Date;
  nextStartDate: Date;
  nextEndDate: Date;
}

export default function PeriodTracker() {
  const [cycleData, setCycleData] = useState<CycleData>(() => {
    const saved = localStorage.getItem('periodTrackerData');
    return saved ? JSON.parse(saved) : {
      lastPeriod: '',
      cycleLength: 28,
      periodLength: 5
    };
  });

  const [periodInfo, setPeriodInfo] = useState<PeriodInfo | null>(null);
  const [fertileDays, setFertileDays] = useState<string[]>([]);

  useEffect(() => {
    localStorage.setItem('periodTrackerData', JSON.stringify(cycleData));
    calculatePeriodInfo();
  }, [cycleData]);

  const calculatePeriodInfo = () => {
    if (!cycleData.lastPeriod) return;

    const startDate = new Date(cycleData.lastPeriod);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + cycleData.periodLength - 1);

    const nextStartDate = new Date(startDate);
    nextStartDate.setDate(startDate.getDate() + cycleData.cycleLength);
    
    const nextEndDate = new Date(nextStartDate);
    nextEndDate.setDate(nextStartDate.getDate() + cycleData.periodLength - 1);

    setPeriodInfo({
      startDate,
      endDate,
      nextStartDate,
      nextEndDate
    });

    // Calculate fertile window (typically 5 days before ovulation)
    const fertileWindow = [];
    const ovulationDate = new Date(startDate);
    ovulationDate.setDate(startDate.getDate() + Math.floor(cycleData.cycleLength / 2) - 14);
    
    for (let i = -2; i <= 2; i++) {
      const fertileDate = new Date(ovulationDate);
      fertileDate.setDate(ovulationDate.getDate() + i);
      fertileWindow.push(fertileDate.toISOString().split('T')[0]);
    }
    setFertileDays(fertileWindow);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDaysUntilNextPeriod = () => {
    if (!periodInfo) return null;
    const today = new Date();
    const diffTime = Math.abs(periodInfo.nextStartDate.getTime() - today.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Period Tracker</h1>
          <p className="text-gray-600">Track your menstrual cycle and get predictions for your next period</p>
        </div>

        <div className="bg-pink-50 rounded-lg p-8 mb-8 shadow-sm">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Period Start Date
              </label>
              <input
                type="date"
                value={cycleData.lastPeriod}
                onChange={(e) => setCycleData({ ...cycleData, lastPeriod: e.target.value })}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cycle Length (days)
              </label>
              <input
                type="number"
                min="21"
                max="35"
                value={cycleData.cycleLength}
                onChange={(e) => setCycleData({ ...cycleData, cycleLength: parseInt(e.target.value) })}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Period Length (days)
              </label>
              <input
                type="number"
                min="3"
                max="7"
                value={cycleData.periodLength}
                onChange={(e) => setCycleData({ ...cycleData, periodLength: parseInt(e.target.value) })}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
              />
            </div>
          </div>
        </div>

        {periodInfo && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md border border-pink-100">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-pink-500 mr-2" />
                <h2 className="text-xl font-semibold">Next Period Prediction</h2>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700">
                  Your next period will start on{' '}
                  <span className="font-semibold text-pink-600">{formatDate(periodInfo.nextStartDate)}</span>
                  {' '}and end on{' '}
                  <span className="font-semibold text-pink-600">{formatDate(periodInfo.nextEndDate)}</span>
                </p>
                <p className="text-gray-600">
                  {getDaysUntilNextPeriod()} days from today
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-pink-100">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-pink-500 mr-2" />
                <h2 className="text-xl font-semibold">Fertile Window</h2>
              </div>
              <p className="text-gray-700 mb-2">
                Your fertile days are expected to be:
              </p>
              <div className="space-y-1">
                {fertileDays.map((date) => (
                  <div key={date} className="text-gray-600">
                    {new Date(date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mt-6">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <p className="text-sm text-blue-700">
                  This is a prediction based on average cycle lengths. Your actual cycle may vary.
                  Please consult with a healthcare provider for medical advice.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}