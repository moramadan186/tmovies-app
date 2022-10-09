import React from "react";
import { PageHeaderCont } from "./header-style";
import bg from "../../assets/footer-bg.jpg";
const PageHeader = ({ children }) => {
  return (
    <PageHeaderCont className="mb-2" style={{ backgroundImage: `url(${bg})` }}>
      <h2>{children}</h2>
    </PageHeaderCont>
  );
};

export default PageHeader;