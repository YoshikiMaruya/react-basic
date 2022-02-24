import React, { useEffect, useState } from "react";
import { Colorful } from "./components/colorful";

const App = () => {
  // num:変数, setNum:更新変数
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickFaceShow = () => {
    setFaceShowFlag(!faceShowFlag);
  };

// useEffectは第二引数でもてあそぶ。
// 空の配列を持たせれば最初のレンダリング以降中身を見なくなる。
// 引数をとる場合その配列の中の変数の値が変化した時のみuseEffectの中を走る。
useEffect(() => {
  if (num % 3 === 0) faceShowFlag || setFaceShowFlag(true);
  else faceShowFlag && setFaceShowFlag(false);
}, [num]);

  return (
    <>
      {/* {}はjavascriptを記述するサインで{}をもう一つ記述するとオブジェクトと認識される。 */}
      <h1 style={{ color: 'red' }}>Hello</h1>
      <Colorful color="blue">nice to meet you</Colorful>
      <Colorful color="pink">I'm fine</Colorful>
      <button onClick={onClickCountUp}>Count Up!!</button>
      <br />
      <button onClick={onClickFaceShow}>on/off</button>
      <p>{ num }</p>
      {/* ボタンをクリックしたらfaceShowFlagの真偽値が切り替わる */}
      {faceShowFlag && <p>(≧▽≦)</p>}
    </>
  );
};

export default App;
