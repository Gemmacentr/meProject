import React, { FC, ReactNode } from "react";

interface Props {
  src: string;
  alt: string;
  width?: number | undefined;
  height?: number | undefined;
  fill?: boolean | undefined;
}

const icon: FC<Props> = ({ src, alt, width, height }) => {
  return (
    <span>
      {src}
      {alt}
      {width}
      {height}
    </span>
  );
};
export default icon;
