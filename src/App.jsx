import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/ui/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route index element = {<Home />} />
          <Route path="/home" element = {<Home />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;