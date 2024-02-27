import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Home} from "../pages/Home";
import {Erro} from '../pages/Erro'
import {Header} from "../components/Header"

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={ <Erro/> } />
      </Routes>
    </BrowserRouter>
  );
}
