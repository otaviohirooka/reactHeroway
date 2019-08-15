import React from 'react';
import logo from './logo.svg';
import './App.css';

import HelloWorld from './exercises/HelloWorld';
import ToggleLike from './exercises/ToggleLike';
import Counter from './exercises/Counter';
import ListCavs from './exercises/ListCavs';

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
        {/* <Counter 
          propsNumber={0}
        /> */}
        <ListCavs 
          cavaleiros={[
            {id: 1, name: 'Mu', armadura: 'Áries'},
            {id: 2, name: 'Aldebaran', armadura: 'Touro'},
            {id: 3, name: 'Saga', armadura: 'Gêmeos'},
            {id: 4, name: 'Mascara da Morte', armadura: 'Câncer'},
            {id: 5, name: 'Aiolia', armadura: 'Leão'},
            {id: 6, name: 'Xhaka', armadura: 'Virgem'},
            {id: 7, name: 'Dhoko', armadura: 'Libra'},
            {id: 8, name: 'Miro', armadura: 'Escorpião'},
            {id: 9, name: 'Aioros', armadura: 'Sagitário'},
            {id: 10, name: 'Camus', armadura: 'Aquário'},
            {id: 11, name: 'Shura', armadura: 'Capricórnio'},
            {id: 12, name: 'Afrodite', armadura: 'Peixes'},
          ]}
        />
      </header>
    </div>
  );
}

export default App;
