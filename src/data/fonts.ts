export interface Font {
  name: string;
  fontFamily: string;
  type: string;
  designer?: string;
}

export const FONTS: Font[] = [
  {
    name: "Arial",
    fontFamily: "Arial",
    type: "サンセリフ",
    designer: "Robin Nicholas と Patricia Saunders"
  },
  {
    name: "Times New Roman",
    fontFamily: "Times New Roman",
    type: "セリフ",
    designer: "Stanley Morison"
  },
  {
    name: "Courier New",
    fontFamily: "Courier New",
    type: "等幅",
    designer: "Howard Kettler"
  },
  {
    name: "Georgia",
    fontFamily: "Georgia",
    type: "セリフ",
    designer: "Matthew Carter"
  },
  {
    name: "Verdana",
    fontFamily: "Verdana",
    type: "サンセリフ",
    designer: "Matthew Carter"
  },
  {
    name: "Tahoma",
    fontFamily: "Tahoma",
    type: "サンセリフ",
    designer: "Matthew Carter"
  },
  {
    name: "Trebuchet MS",
    fontFamily: "Trebuchet MS",
    type: "サンセリフ",
    designer: "Vincent Connare"
  },
  {
    name: "Impact",
    fontFamily: "Impact",
    type: "サンセリフ",
    designer: "Geoffrey Lee"
  },
  {
    name: "Comic Sans MS",
    fontFamily: "Comic Sans MS",
    type: "カジュアル",
    designer: "Vincent Connare"
  },
  {
    name: "Palatino",
    fontFamily: "Palatino Linotype",
    type: "セリフ",
    designer: "Hermann Zapf"
  },
  {
    name: "Garamond",
    fontFamily: "Garamond",
    type: "セリフ",
    designer: "Claude Garamond"
  },
  {
    name: "Helvetica",
    fontFamily: "Helvetica",
    type: "サンセリフ",
    designer: "Max Miedinger と Eduard Hoffmann"
  },
  {
    name: "Calibri",
    fontFamily: "Calibri",
    type: "サンセリフ",
    designer: "Luc(as) de Groot"
  },
  {
    name: "Cambria",
    fontFamily: "Cambria",
    type: "セリフ",
    designer: "Jelle Bosma と Steve Matteson"
  },
  {
    name: "Consolas",
    fontFamily: "Consolas",
    type: "等幅",
    designer: "Luc(as) de Groot"
  }
];