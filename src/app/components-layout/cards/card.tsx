import Icons from "@/app/components-ui/icons/icons";
import React, { FC } from "react";
import Image from "next/image";
import { ReactElement } from "react";
import { ReactFragment } from "react";
import classes from "./card.module.scss";

interface Props {
  title: string;
  description: string;
  img: any;
}
const card: FC<Props> = ({ title, description, img }) => {
  return (
    <div className={classes.container}>
      <a href="">
        <div className={classes.icon}></div>
        <div className="">
          <h3 className={classes.text}>
            <img></img>
            <span className={classes.span}>{title}</span>
          </h3>
          <p className={classes.description}>{description}</p>
        </div>
      </a>
    </div>
  );
};
export default card;
