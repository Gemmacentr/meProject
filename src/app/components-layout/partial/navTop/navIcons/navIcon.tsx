import React from "react";

import Image from "next/image";

export default function navIcon() {
  return (
    <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="flex pr-3">
        <button>
          <span className=" flex mr-3.5">
            <Image
              src="/phone.svg"
              className="ml-4"
              width={20}
              height={40}
              alt="icon"
            />
          </span>
        </button>
        <div className="border-x border-stone-400 px-px mt-6">
          <button className="">
            <span className="flex ">
              <Image
                src="/search.svg"
                className=""
                width={20}
                height={10}
                alt="icon"
              />
            </span>
          </button>
        </div>
        <button>
          <span className="flex">
            <Image
              src="/user.svg"
              className=""
              width={20}
              height={40}
              alt="icon"
            />
          </span>
        </button>
      </div>
    </nav>
  );
}
