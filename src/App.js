import React from 'react';
import Home from './components/Home/Home';
import 'tachyons';
import './App.css';

const App = () =>{
  return (
    <div className="App">
      <div className='App-header'>
        Current Weather and Forecast
      </div>
      <Home />
      <div className='foot'>
                <footer className='f5 ba b--black bw1 br3 ma2 pa2'>
                    Made with ❤️ Copyright © {new Date().getFullYear()}
                </footer>
            </div>
    </div>
  );
}

export default App;
