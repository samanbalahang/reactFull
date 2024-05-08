import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
let App = function MyApp() {
    return (
      <div>
        <h1>Counters that update separately</h1>
        <TheCounter />
        
      </div>
    );
  }
  // function MyButton() {
  //   const [count, setCount] = useState(0);
  //   function handleClick() {
  //     setCount(count + 1);
  //   }
  
  //   return (
  //     <button onClick={handleClick}>
  //       Clicked {count} times
  //     </button>
  //   );
  // }
  function TheCounter() {
    const [count, setCount] = useState(0);
    function plussClick() {
      setCount(count + 1);
    }
    function minusClick() {
      setCount(count + 1);
    }
    function minusClick() {
      setCount(count - 1);
    }
  
    function resetClick() {
      setCount(0);
    }
  
    return (
      <>
      <p>
         Clicked {count} times
      </p>
      <button onClick={plussClick}>
       +1
      </button>
      <button onClick={minusClick}>
       -1
      </button>
      <button onClick={resetClick}>
      reset
      </button>
      </>
    );
  }
  
  const root = createRoot(document.getElementById('root'));
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );