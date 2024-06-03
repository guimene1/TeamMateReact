import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fortnite from "./pages/Fortnite.js";
import Rotas from "./pages/Rotas.js";
import Busca from "./pages/Busca.js";
import Amigos from "./pages/Amigos.js";
import Perfil from "./pages/Perfil.js";
import Loll from "./pages/Lol.js";
import Valo from "./pages/Valorant.js";
import Count from "./pages/Cs2.js";
import Loginn from "./pages/Login.js";
import Registrar from "./pages/Cadastro.js";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rotas />}>
          <Route index element={<App />} />
          <Route path="Fortnite" element={<Fortnite />} />
          <Route path="Busca" element={<Busca />} />
          <Route path="Amigos" element={<Amigos />} />
          <Route path="Perfil" element={<Perfil />} />
          <Route path="Loll" element={<Loll />} />
          <Route path="Valo" element={<Valo />} />
          <Route path="Count" element={<Count />} />
          <Route path="Loginn" element={<Loginn />} />
          <Route path="Registrar" element={<Registrar />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
