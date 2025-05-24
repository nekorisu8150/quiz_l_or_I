import React, { useState, useEffect } from 'react';
import { Trophy, RefreshCw, ChevronRight, Info } from 'lucide-react';
import CharacterDisplay from './CharacterDisplay';
import ScoreBoard from './ScoreBoard';
import AnswerButtons from './AnswerButtons';
import ResultMessage from './ResultMessage';
import FontInfo from './FontInfo';
import { Font, FONTS } from '../data/fonts';

const Quiz: React.FC = () => {
  const [currentFont, setCurrentFont] = useState<Font | null>(null);
  const [isLowerL, setIsLowerL] = useState<boolean>(false);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [round, setRound] = useState<number>(1);
  const [totalRounds] = useState<number>(10);
  const [showFontInfo, setShowFontInfo] = useState<boolean>(false);
  const [gameComplete, setGameComplete] = useState<boolean>(false);
  
  const loadQuestion = () => {
    const randomFont = FONTS[Math.floor(Math.random() * FONTS.length)];
    const randomChar = Math.random() > 0.5;
    
    setCurrentFont(randomFont);
    setIsLowerL(randomChar);
    setHasAnswered(false);
    setShowFontInfo(false);
  };
  
  useEffect(() => {
    loadQuestion();
  }, []);
  
  const handleAnswer = (answer: boolean) => {
    const correct = answer === isLowerL;
    setIsCorrect(correct);
    setHasAnswered(true);
    
    if (correct) {
      setScore(prevScore => prevScore + 1);
    }
  };
  
  const handleNextQuestion = () => {
    if (round < totalRounds) {
      setRound(prevRound => prevRound + 1);
      loadQuestion();
    } else {
      setGameComplete(true);
    }
  };
  
  const handleRestart = () => {
    setScore(0);
    setRound(1);
    setGameComplete(false);
    loadQuestion();
  };
  
  const toggleFontInfo = () => {
    setShowFontInfo(prev => !prev);
  };
  
  if (!currentFont) return <div>読み込み中...</div>;
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all">
      {gameComplete ? (
        <div className="text-center py-8 space-y-6">
          <Trophy className="h-16 w-16 mx-auto text-yellow-500" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">クイズ完了！</h2>
          <p className="text-xl text-slate-700">
            最終スコア：<span className="font-bold">{score}</span> / {totalRounds}
          </p>
          <p className="text-slate-600">
            {score === totalRounds 
              ? "完璧なスコア！タイポグラフィーの達人ですね！" 
              : score >= totalRounds * 0.7 
                ? "素晴らしい結果です！タイポグラフィーの良い目を持っていますね。"
                : "練習を重ねてタイポグラフィーのスキルを向上させましょう！"}
          </p>
          <button
            className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 mx-auto hover:bg-indigo-700 transition-colors"
            onClick={handleRestart}
          >
            <RefreshCw className="h-5 w-5" />
            もう一度プレイ
          </button>
        </div>
      ) : (
        <>
          <ScoreBoard score={score} round={round} totalRounds={totalRounds} />
          
          <div className="relative mt-8 mb-8">
            <CharacterDisplay 
              character={isLowerL ? "l" : "I"} 
              font={currentFont.fontFamily} 
              hasAnswered={hasAnswered} 
            />
            
            <button
              onClick={toggleFontInfo}
              className="absolute top-0 right-0 p-2 text-slate-400 hover:text-indigo-600 transition-colors rounded-full"
              aria-label="フォント情報を表示"
            >
              <Info className="h-5 w-5" />
            </button>
          </div>
          
          {showFontInfo && <FontInfo font={currentFont} />}
          
          {!hasAnswered ? (
            <AnswerButtons onAnswer={handleAnswer} disabled={hasAnswered} />
          ) : (
            <div className="space-y-4">
              <ResultMessage isCorrect={isCorrect} character={isLowerL ? "l" : "I"} />
              
              <button
                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors"
                onClick={handleNextQuestion}
              >
                次の問題
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Quiz