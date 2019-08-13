import React from 'react';
import logo from './logo.svg';
import './App.css';

import HelloWorld from './exercises/HelloWorld';
import ToggleLike from './exercises/ToggleLike';
import Counter from './exercises/Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <HelloWorld 
          name="Otavio" 
          company="Heroway"
          since={2018}
        />

        <ToggleLike defaultLiked ={true} /> */}
        <Counter 
          propsNumber={0}
        />
      </header>
    </div>
  );
}

export default App;
