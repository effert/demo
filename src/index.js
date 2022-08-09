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



import Didact, { useState, useEffect } from '../src/didact';
import DidactDom from '../src/didact/didact-dom';

/** @jsx Didact.createElement */
/** @jsxRuntime classic */
// const element = (
//   <div id="foo">
//     <div>bar</div>
//     <b />
//     123
//   </div>
// );

const Child = () => {
  useEffect(() => {
    console.log('useEffect child');
    return () => {
      console.log('callback child');
    };
  }, []);
  return <div id="child">child</div>;
};

const Test = () => {
  let [count, changeCount] = useState(0);
  let [show, changeShow] = useState(false);
  let arr = new Array(count > 0 ? count : 0).fill(0);

  useEffect(() => {
    console.log('useEffect');
    return () => {
      console.log('callback');
    };
  }, [count, show]);

  return (
    <div id="foo">
      <div style={{ color: 'red', fontSize: 20 }}>count:{count}</div>
      <div><button onClick={() => changeCount(c => c + 1)}>add</button></div>
      <div><button onClick={() => changeCount(c => c - 1)}>reduce</button></div>
      text
      <div><button onClick={() => changeShow(show => !show)}>toggle show</button></div>
      <b />
      <div>
        {
          show ? <Child /> : null
        }
      </div>
      {
        arr.map((val, index) => <div id={index}>{index}</div>)
      }
    </div>
  );
};

const element = <Test name="foo" />;
const container = document.getElementById("root");
DidactDom.render(element, container);
