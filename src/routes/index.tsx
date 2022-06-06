import React from "react";
import { Route, Routes } from 'react-router-dom'

import Home from "../pages/Home";
import Login from "../pages/History";

const Rotas: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>

  )
}

export default Rotas
