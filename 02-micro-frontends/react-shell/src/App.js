import React, { useRef } from 'react';
import { useEventListener } from './useEventListener';
import './App.css';

function App() {
  const listRef = useRef(null);
  const optionsRef = useRef(null);

  useEventListener(listRef, 'productSelected', p => {
    optionsRef.current.product = p.detail;
  });

  return (
    <div>
      <div className="app-header"><span>React Store Demo</span></div>
      <div className="micro-header"><span>Product List (Angular):</span></div>
      <div className="micro-content">
        <products-list ref={listRef} />
      </div>
      <div className="micro-header"><span>Product Options (Vue):</span></div>
      <div className="micro-content">
        <product-options ref={optionsRef} />
      </div>
    </div>
  );
}

export default App;
