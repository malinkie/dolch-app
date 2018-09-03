import React from "react";
import Header from "./header";
import Footer from "./footer";

const page = ({ title, children }) => (
  <>
    <Header title={title} />
    <main>{children}</main>
    <Footer />
  </>
);

export { page as default };
