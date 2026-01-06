import React from 'react';
import AllRoutes from './routes/AllRoutes.jsx';
import { Footer, Header } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
