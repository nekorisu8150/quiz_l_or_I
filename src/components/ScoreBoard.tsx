import React from 'react';

interface ScoreBoardProps {
  score: number;
  round: number;
  totalRounds: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, round, totalRounds }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-left">
        <p className="text-sm text-slate-500">ラウンド</p>
        <p className="text-xl font-bold text-slate-800">{round} / {totalRounds}</p>
      </div>
      
      <div className="flex flex-col items-center justify-center">
        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-indigo-600 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(round / totalRounds) * 100}%` }}
          />
        </div>
      </div>
      
      <div className="text-right">
        <p className="text-sm text-slate-500">スコア</p>
        <p className="text-xl font-bold text-slate-800">{score}</p>
      </div>
    </div>
  );
};

export default ScoreBoard