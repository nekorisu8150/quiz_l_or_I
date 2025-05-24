import React from 'react';

interface AnswerButtonsProps {
  onAnswer: (isLowerL: boolean) => void;
  disabled: boolean;
}

const AnswerButtons: React.FC<AnswerButtonsProps> = ({ onAnswer, disabled }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <button
        className="py-3 px-6 bg-white border-2 border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => onAnswer(true)}
        disabled={disabled}
      >
        小文字の「l」
      </button>
      
      <button
        className="py-3 px-6 bg-white border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => onAnswer(false)}
        disabled={disabled}
      >
        大文字の「I」
      </button>
    </div>
  );
};

export default AnswerButtons