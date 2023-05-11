import React from "react";
import Button from "./button";
import classes from "./form.module.scss";

export default function form() {
  return (
    <>
      <form className={classes.form}>
        <div className={classes.form1}>
          <div className={classes.sub_form}>
            <div className={classes.form2}>
              <label>
                <div className={classes.search}>Cerca qui</div>
              </label>
              <input className={classes.input} />
              <span>
                <span>Cerca nella vicinanze </span>
              </span>
            </div>
            <Button />
          </div>
        </div>
      </form>
    </>
  );
}
