import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface ResultMessageProps {
  isCorrect: boolean;
  character: string;
}

const ResultMessage: React.FC<ResultMessageProps> = ({ isCorrect, character }) => {
  return (
    <div 
      className={`p-4 rounded-lg flex items-center gap-3 ${
        isCorrect 
          ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
          : "bg-rose-50 text-rose-700 border border-rose-200"
      }`}
    >
      {isCorrect ? (
        <CheckCircle className="h-6 w-6 flex-shrink-0" />
      ) : (
        <XCircle className="h-6 w-6 flex-shrink-0" />
      )}
      
      <div>
        <p className="font-medium">
          {isCorrect ? "正解！" : "不正解！"}
        </p>
        <p className="text-sm">
          {character === "l" ? "小文字の「l」" : "大文字の「I」"}でした。
        </p>
      </div>
    </div>
  );
};

export default ResultMessage