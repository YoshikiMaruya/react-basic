// JSXの基礎文法１
// Reactライブラリをimport
// return文の中がJSXの構文（基本的にはHTMLと同じ）
// classはclassNameに

import React from 'react';

const BlueButton = () => {
  return (
    <button className={'btn-blue'}>
      Click me!!
    </button>
  )
}

export default BlueButton;
