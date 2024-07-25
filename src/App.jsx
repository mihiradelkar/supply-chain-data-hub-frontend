import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CompanyListPage from './pages/CompanyListPage.jsx';
import CompanyDetailsPage from './pages/CompanyDetailsPage.jsx';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<CompanyListPage />} />
      <Route path="/company/:companyId" element={<CompanyDetailsPage />} />
    </Routes>
    </div>
  );
}

export default App;
