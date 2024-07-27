import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCompaniesThunk, setSearch } from "../../store/companySlice";
import CompanyItem from "../../components/CompanyItem/CompanyItem";
import { useTranslation } from "react-i18next";
import "./CompanyListPage.css";

const CompanyListPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { companies, search, status, error } = useSelector(
    (state) => state.companies
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCompaniesThunk());
    }
  }, [status, dispatch]);

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="center-container">
        <h1>{t("findYourCompany")}</h1>
      </div>
      <div className="center-container">
        <input
          type="text"
          className="input-search floating-box"
          placeholder={t("searchCompanies")}
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </div>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p className="error">{error}</p>}
      {status === "succeeded" && (
        <div className="company-list">
          {filteredCompanies.map((company) => (
            <CompanyItem key={company.company_id} company={company} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CompanyListPage;
