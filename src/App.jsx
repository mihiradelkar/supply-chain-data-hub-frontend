import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
import CompanyListPage from "./pages/CompanyListPage/CompanyListPage.jsx";
import CompanyDetailsPage from "./pages/CompanyDetailsPage/CompanyDetailsPage.jsx";
import CompanyHeatMapPage from "./pages/CompanyHeatMap/CompanyHeatMapPage.jsx";
import JobStatisticsPage from "./pages/JobStatisticsPage/JobStatisticsPage.jsx";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<CompanyListPage />} />
          <Route path="/company/:companyId" element={<CompanyDetailsPage />} />
          <Route path="/companies-heat-map" element={<CompanyHeatMapPage />} />
          <Route path="/job-statistics" element={<JobStatisticsPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
