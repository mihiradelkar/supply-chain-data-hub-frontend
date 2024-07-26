import React, { useState, useEffect } from "react";
import { fetchCompanies } from "../../services/api";
import CompanyItem from "../../components/CompanyItem/CompanyItem";
import "./CompanyListPage.css";

const CompanyListPage = () => {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const companiesData = await fetchCompanies();
        setCompanies(companiesData);
      } catch (error) {
        setError("Failed to fetch companies");
      }
    };
    fetchData();
  }, []);

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="center-container">
        <h1>Find Your Company Here!</h1>
      </div>
      <div className="center-container">
        <input
          type="text"
          className="input-search floating-box"
          placeholder="Search companies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="company-list ">
          {filteredCompanies.map((company) => (
            <CompanyItem key={company.company_id} company={company} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CompanyListPage;
