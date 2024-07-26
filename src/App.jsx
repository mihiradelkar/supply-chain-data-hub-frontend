import React from "react";
import { Route, Routes } from "react-router-dom";
import CompanyListPage from "./pages/CompanyListPage/CompanyListPage.jsx";
import CompanyDetailsPage from "./pages/CompanyDetailsPage/CompanyDetailsPage.jsx";
import "./App.css";
import CompanyHeatMapPage from "./pages/CompanyHeatMap/CompanyHeatMapPage.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CompanyListPage />} />
        <Route path="/company/:companyId" element={<CompanyDetailsPage />} />
        <Route path="/companies-heat-map" element={<CompanyHeatMapPage />} />
      </Routes>
    </div>
  );
}

export default App;
