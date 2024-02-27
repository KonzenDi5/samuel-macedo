import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Home} from "../pages/Home";
import {Erro} from '../pages/Erro'

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={ <Erro/> } />
      </Routes>
    </BrowserRouter>
  );
}
