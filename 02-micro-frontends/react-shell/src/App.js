import React, { useRef } from 'react';
import { useEventListener } from './useEventListener';
import './App.css';

function App() {
  const listRef = useRef(null);
  const optionsRef = useRef(null);

  useEventListener(listRef, 'addToCart', p => {
    optionsRef.current.product = p.detail;
  });

  return (
    <div className="App">
      <div><span>Product List (Angular):</span></div>
      <div>
        <products-list ref={listRef} />
      </div>
      <div><span>Product Options (Vue):</span></div>
      <div>
        <product-options ref={optionsRef}></product-options>
      </div>
    </div>
  );
}

export default App;
