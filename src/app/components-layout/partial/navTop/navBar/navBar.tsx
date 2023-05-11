import Head from "next/head";
import React from "react";
import NavButtons from "../navButtons/navButtons";
import NavIcon from "../navIcons/navIcon";

import NavTop from "../navTop/navTop";
import classes from "./navBar.module.scss";

function navBar() {
  return (
    <>
      <NavTop />

      <NavButtons />
    </>
  );
}

export default navBar;
