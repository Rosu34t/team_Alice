import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'; // Appコンポーネントのimportをコメントアウト
import { Roulette } from './App'; // Rouletteコンポーネントをimport

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Roulette /> {/* Rouletteコンポーネントをレンダリング */}
  </React.StrictMode>,
  document.getElementById('root')
);
