import React from 'react';
import { Link } from 'react-router-dom';

const CompanyItem = ({ company }) => {
  return (
    <div className="company-item">
      <h2>{company.name}</h2>
      <p>{company.address}</p>
      <Link to={`/company/${company.company_id}`}>View Details</Link>
    </div>
  );
};

const CompanyList = ({ companies }) => {
  return (
    <div className="company-list">
      {companies.map((company) => (
        <CompanyItem key={company.company_id} company={company} />
      ))}
    </div>
  );
};

export default CompanyList;
