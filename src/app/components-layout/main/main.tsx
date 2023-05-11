import React from "react";
import Image from "next/image";

import Pre_form from "../pre-form/pre_form";
import classes from "./main.module.scss";
import Card from "../cards/card";

export default function main() {
  return (
    <main className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
      <Image
        src="/searchv2heroofficespace.webp"
        className="mx-auto"
        width={1700}
        height={0}
        alt="central_main"
      />
      <div className="m-auto relative text-center bottom-96 text-lg text-white tracking-tight font-sans font-medium m-0 truncate">
        <div className="m-auto text-center">
          <div className={classes.responsive}>
            Da una singola postazione a un intero edificio. A te la scelta.
            <h1 className="text-4xl ">
              Uffici a modo tuo<span className="text-rose-600">.</span>
            </h1>
          </div>
        </div>
        <div className={classes.form}></div>
        <Pre_form />
      </div>
    </main>
  );
}
