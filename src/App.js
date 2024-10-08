import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import SupportChat from './pages/SupportChat';


const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const App = () => {

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />


        </Routes>

        {/* Add the SupportChat component at the bottom */}
        <SupportChat />
      </Suspense>
    </Router>
  );
}

export default App;
