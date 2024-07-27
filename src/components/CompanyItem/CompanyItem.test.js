import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CompanyItem from "./CompanyItem";

test("renders company item", () => {
  const company = {
    company_id: 1,
    name: "Test Company",
    address: "123 Test St",
  };

  render(
    <Router>
      <CompanyItem company={company} />
    </Router>
  );

  expect(screen.getByText("Test Company")).toBeInTheDocument();
  expect(screen.getByText("123 Test St")).toBeInTheDocument();
  expect(screen.getByText("View Details")).toBeInTheDocument();
});
