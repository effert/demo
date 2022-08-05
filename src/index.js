// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



import Didact from '../src/didact';
import DidactDom from '../src/didact/didact-dom';

/** @jsx Didact.createElement */
/** @jsxRuntime classic */
// const element = (
//   <div id="foo">
//     <div>bar</div>
//     <b/>
//     123
//   </div>
// )
const Test = () => {
  let [count, changeCount] = Didact.useState(0);
  let [show, changeShow] = Didact.useState(false);
  let arr = new Array(count).fill(0);

  return (
    <div id="foo">
      <div onClick={() => changeCount(c => c + 1)}>bar{count}</div>
      text
      <div><button onClick={() => changeShow(show => !show)}>toggle show</button></div>
      <b />
      <div>
        {
          show ? 'show' : ''
        }
      </div>
      {
        arr.map((val, index) => <div>{index}</div>)
      }
    </div>
  );
};

const element = <Test name="foo" />;
const container = document.getElementById("root");
DidactDom.render(element, container);
