import React from 'react';
import ReactDOM from 'react-dom/client';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { FormWithcustomHook } from './02-useEffect/FormWithcustomHook';
import { MultiplecustomHooks } from './03-examples/MultiplecustomHooks';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <MultiplecustomHooks />
  //</React.StrictMode>
);

