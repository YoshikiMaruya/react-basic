// functional componentのほうが記述量が少ない
// 昔はclass出ないとできないことがあった。
// 両者React Hooksの登場で同じ機能が使えるように！

// class Component

import React, { Component } from 'react';

class Button extends Component {
  render() {
    return <button>Say, {this.props.hello}</button>
  }
}

export default Button;


// Functional Component

import React from 'react';
const Button = (props) => {
  return <button>Say, {props.hello}</button>;
};

export default Button;


// コンポーネントの基本的な使いかた
// ファイル名は大文字スタート
// 子コンポーネントでexport
// 親コンポーネントでimport
// App.jsx (親)

import Article from "./components/Article"

function App() {
  return (
    <div>
      <Article />
    </div>
  );
};

export default App;

// components/Article.jsx (子)

const Article = () => {
  return <h2>Hello</h2>
};

export default Article;
