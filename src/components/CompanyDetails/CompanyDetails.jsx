import React from "react";

const CompanyDetails = ({ company }) => (
  <div>
    <h1>{company.name}</h1>
    <p>{company.address}</p>
  </div>
);

export default CompanyDetails;
