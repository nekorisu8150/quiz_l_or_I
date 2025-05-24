import React from 'react';
import { BrainCircuit } from 'lucide-react';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center py-8 px-4">
      <header className="mb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <BrainCircuit className="h-8 w-8 text-indigo-600" />
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">フォントクイズ</h1>
        </div>
        <p className="text-slate-600 max-w-md mx-auto">
          様々なフォントで小文字の「l」と大文字の「I」を見分けることができますか？
        </p>
      </header>
      
      <main className="w-full max-w-2xl mx-auto">
        <Quiz />
      </main>
      
      <footer className="mt-auto pt-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} フォントクイズ - タイポグラフィーの知識をテスト</p>
      </footer>
    </div>
  );
}

export default App;