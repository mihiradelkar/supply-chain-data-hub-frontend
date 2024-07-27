import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CompanyListPage from "./CompanyListPage";
import { fetchCompanies } from "../../services/api";

jest.mock("../../services/api");

test("renders company list page", async () => {
  const companies = [
    { company_id: 1, name: "Company 1", address: "Address 1" },
    { company_id: 2, name: "Company 2", address: "Address 2" },
  ];

  fetchCompanies.mockResolvedValueOnce(companies);

  render(
    <Router>
      <CompanyListPage />
    </Router>
  );

  expect(
    screen.getByPlaceholderText("Search companies...")
  ).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText("Company 1")).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(screen.getByText("Company 2")).toBeInTheDocument();
  });
});
