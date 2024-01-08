import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Addons from './pages/Perks.jsx';
import Perks from './pages/Faq.jsx';
import Faq from './pages/Addons.jsx';
import Support from './pages/Support.jsx';
import Header from './components/Header.jsx';
import Right from './components/Right.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/perks" element={<Addons />} />
          <Route path="/addons" element={<Faq />} />
          <Route path="/faq" element={<Perks />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Sidebar>
      <Right/>
    </BrowserRouter>
  );
};

export default App;