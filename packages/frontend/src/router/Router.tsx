import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom/dist/index';
import { Main, SignIn, SignUp } from '../pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
