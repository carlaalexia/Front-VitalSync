import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import CreateUser from '../components/CreateUser';

const Public = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/CreateUser" element={<CreateUser />} />
    </Routes>
  );
}

export default Public;