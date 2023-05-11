import Button from "@/app/components-ui/buttons/button";
import React from "react";
import NavIcon from "../navIcons/navIcon";
import NavLogo from "../navLogo/navLogo";
import classes from "./navButton.module.scss";
function navButtons() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navButton}>
        <NavLogo />

        <ul className="flex pl-7 px-8 ">
          <li className="flex">
            <div className="align-baseline flex">
              <Button text={"Che cosa facciamo"} />
            </div>
          </li>
          <li>
            <div>
              <Button text={"Inizia"} />
            </div>
          </li>
          <li>
            <div>
              <Button text={"Scopri i Regus"} />
            </div>
          </li>
        </ul>
      </div>
      <NavIcon />
    </nav>
  );
}

export default navButtons;
