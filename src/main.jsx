import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RouterComp from './router';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RouterComp />
  </BrowserRouter >
);


