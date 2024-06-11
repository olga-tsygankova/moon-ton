import React from 'react';
import './App.css';

import { Main, Join } from './components';
import { Mission } from './components/Mission/Mission';
import { Product } from './components/Product';
import { ForUsers } from './components/ForUsers';
import { Footer } from './components/Footer';
import { Advantages } from './components/Advantages';
import { Roadmap } from './components/Roadmap';
import { Token } from './components/Token';
import { LineFooter } from './ui/svg/LineFooter';

function App() {
  return (
    <div className="App">
      <Main/>
      <Mission/>
      <Product/>
      <ForUsers/>
      <Advantages/>
      {/*<Roadmap/>*/}
      {/*<Token/>*/}
      {/*<Join/>*/}
      {/*<Footer/>*/}
    </div>
  );
}

export default App;
