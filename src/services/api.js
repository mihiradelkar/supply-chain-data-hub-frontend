import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/api";

export const fetchCompanies = async () => {
  const response = await axios.get(`${API_URL}/companies`);
  return response.data;
};

export const fetchCompanyDetails = async (companyId) => {
  const response = await axios.get(`${API_URL}/companies/${companyId}`);
  return response.data;
};

export const fetchAllLocations = async () => {
  const response = await axios.get(`${API_URL}/locations/all`);
  return response.data;
};

export const fetchCompanyLocations = async (companyId) => {
  const response = await axios.get(`${API_URL}/locations/${companyId}`);
  return response.data;
};

export const fetchTopCitiesWithMostJobs = async () => {
  const response = await axios.get(
    `${API_URL}/statistics/top-cities-with-most-jobs`
  );
  return response.data;
};

export const fetchTopStatesWithMostJobs = async () => {
  const response = await axios.get(
    `${API_URL}/statistics/top-states-with-most-jobs`
  );
  return response.data;
};
