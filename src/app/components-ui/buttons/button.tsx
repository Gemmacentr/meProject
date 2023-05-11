import React, { FC } from "react";

interface Props {
  text?: string;
}

const button: FC<Props> = ({ text }) => {
  return (
    <button
      className={
        "btn border flex px-4 py-1 text-slate-950 rounded text-base whitespace-nowrap mr-3.5"
      }
    >
      {text && <p>{text}</p>}
    </button>
  );
};
export default button;
