import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function navLogo() {
  return (
    <div className="pl-12 logo">
      <Image
        src="/logo.svg"
        className="logo"
        width={75}
        height={30}
        alt="icon"
      />
    </div>
  );
}
