import React from "react";
import Footer from "./Footer";

function Layout(props) {
  const children = props.children;
  return (
    <React.Fragment>
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
