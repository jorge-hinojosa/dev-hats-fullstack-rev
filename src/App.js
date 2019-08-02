import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
