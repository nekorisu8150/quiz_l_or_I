import React from 'react';
import { Font } from '../data/fonts';

interface FontInfoProps {
  font: Font;
}

const FontInfo: React.FC<FontInfoProps> = ({ font }) => {
  return (
    <div className="mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200 animate-fadeIn">
      <h3 className="font-medium text-slate-800 mb-1">フォント情報</h3>
      <p className="text-sm text-slate-600 mb-2">
        <span className="font-medium">フォント名：</span> {font.name}
      </p>
      {font.designer && (
        <p className="text-sm text-slate-600 mb-2">
          <span className="font-medium">デザイナー：</span> {font.designer}
        </p>
      )}
      <p className="text-sm text-slate-600">
        <span className="font-medium">タイプ：</span> {font.type}
      </p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="p-2 bg-white rounded border border-slate-200 text-center">
          <span style={{ fontFamily: `"${font.fontFamily}", sans-serif` }} className="text-3xl">l</span>
          <p className="text-xs text-slate-500 mt-1">小文字の「l」</p>
        </div>
        <div className="p-2 bg-white rounded border border-slate-200 text-center">
          <span style={{ fontFamily: `"${font.fontFamily}", sans-serif` }} className="text-3xl">I</span>
          <p className="text-xs text-slate-500 mt-1">大文字の「I」</p>
        </div>
      </div>
    </div>
  );
};

export default FontInfo