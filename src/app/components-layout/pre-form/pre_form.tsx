import React from "react";
import Image from "next/image";
import classes from "./pre_form.module.scss";
import Form from "../form/form";

export default function pre_form() {
  return (
    <>
      <div className={classes.box}>
        <ul className={classes.flex}>
          <li className="relative flex mr-7 text-base pb-3.5 font-medium block text-slate-950 border-b-2 border-b-red-500">
            <div className={classes.boxes}>
              <span className="flex mr-4 whitespace-nowrap">
                <Image
                  src="/office.svg"
                  className=""
                  width={40}
                  height={40}
                  alt="icon"
                />
              </span>
              <span>Uffici</span>
            </div>
          </li>
          <li className="relative flex mr-7 text-base pb-3.5 font-medium block text-slate-950">
            <div className={classes.boxes}>
              <span className="mr-4 whitespace-nowrap">
                <Image
                  src="/coworking.svg"
                  className=""
                  width={40}
                  height={40}
                  alt="icon"
                />
              </span>
              <span>Coworking</span>
            </div>
          </li>
          <li className="relative flex mr-7 text-base pb-3.5 font-medium block text-slate-950">
            <div className={classes.boxes}>
              <span className="mr-4 whitespace-nowrap">
                <Image
                  src="/ufficiVirtuali.svg"
                  className=""
                  width={40}
                  height={40}
                  alt="icon"
                />
              </span>
              <span>Uffici virtuali</span>
            </div>
          </li>
          <li className="relative flex mr-7 text-base pb-3.5 font-medium block text-slate-950">
            <div className={classes.boxes}>
              <span className="mr-4 whitespace-nowrap">
                <Image
                  src="/saleRiunioni.svg"
                  className="whitespace-nowrap"
                  width={40}
                  height={40}
                  alt="icon"
                />
              </span>
              <span>Sale riunioni</span>
            </div>
          </li>
        </ul>
      </div>
      <Form />
    </>
  );
}
