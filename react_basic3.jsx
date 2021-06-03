// JSXは必ず階層構造。最上位コンポーネントは並列に出来ない。
// React.Fragmentで囲む。HTMLタグとして出力されない。
// React.Fragmentは省略形で書ける。

// ERROR

return (
  <p>javascript love</p>
  <p>Typescript love</p>
)

// React.Fragmentで囲む
return (
  <React.Fragment>
    <p>javascript love</p>
    <p>Typescript love</p>
  </React.Fragment>
)

// 省略形
return (
  <>
    <p>javascript love</p>
    <p>Typescript love</p>
  </>
)
