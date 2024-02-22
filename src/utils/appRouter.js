import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from '../Components/Home';
import Test from '../Components/Test';
import Score from "../Components/Score"
const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
     
    <Route path="/" element={<Home />} />
    <Route path="/test" element={<Test />} />
    <Route path="/score" element={<Score />} />
    
     
    </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
