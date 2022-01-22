import React from 'react';

import Home from './Pages/Home';
import Nuisettes from './Screens/Nuisettes';
import RobeScreen from './Screens/RobeScreen';
import ShortScreen from './Screens/ShortScreen';
import CosmetiqueScreen from './Screens/CosmetiqueScreen';
import ParfumsScreen from './Screens/ParfumsScreen';
import SoutiensScreen from './Screens/SoutiensScreen';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductScreen from './Screens/ProductScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/nuisettes' element={<Nuisettes />} />
        <Route path='/robes' element={<RobeScreen />} />
        <Route path='/shorts' element={<ShortScreen />} />
        <Route path='/cosmetiques' element={<CosmetiqueScreen />} />
        <Route path='/parfums' element={<ParfumsScreen />} />
        <Route path='/soutiens' element={<SoutiensScreen />} />
        <Route path='/' element={<Home />} exact />
        <Route path='/article/:id' element={<ProductScreen />} exact />
      </Routes>
    </Router>
  );
};

export default App;
