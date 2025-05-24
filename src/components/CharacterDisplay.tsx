import React from 'react';

interface CharacterDisplayProps {
  character: string;
  font: string;
  hasAnswered: boolean;
}

const CharacterDisplay: React.FC<CharacterDisplayProps> = ({ character, font, hasAnswered }) => {
  return (
    <div className="flex items-center justify-center">
      <div 
        className={`text-[180px] md:text-[240px] leading-none flex items-center justify-center h-64 w-64 md:h-80 md:w-80 mx-auto rounded-lg transition-all ${
          hasAnswered 
            ? "bg-slate-50" 
            : "bg-white shadow-sm hover:shadow-md"
        }`}
        style={{ fontFamily: `"${font}", sans-serif` }}
      >
        <span className="transform hover:scale-105 transition-transform select-none">
          {character}
        </span>
      </div>
    </div>
  );
};

export default CharacterDisplay;