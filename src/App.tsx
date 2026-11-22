import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ErrorBoundary } from './components/helper/ErrorBoundary';
import { LandingPage } from './views/public/LandingPage';
import { SoonToComePage } from './views/public/SoonToComePage';

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          {/* Public Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Soon to Come Page */}
          <Route path="/coming-soon" element={<SoonToComePage />} />

          {/* Redirect old or prospective workspace & admin routes cleanly to /coming-soon */}
          <Route path="/workspace/*" element={<Navigate to="/coming-soon" replace />} />
          <Route path="/admin/*" element={<Navigate to="/coming-soon" replace />} />

          {/* Catch-All fallback to Landing Page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
