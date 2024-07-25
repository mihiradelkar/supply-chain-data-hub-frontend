import React, { useState, useEffect } from 'react';
import { fetchCompanies } from '../services/api';
import CompanyList from '../components/CompanyList';

const CompanyListPage = () => {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const companiesData = await fetchCompanies();
      setCompanies(companiesData);
    };
    fetchData();
  }, []);

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search companies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <CompanyList companies={filteredCompanies} />
    </div>
  );
};

export default CompanyListPage;
