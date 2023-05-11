/** @format */

import { FC, memo, VFC } from "react";
import cx from "classnames";
import classes from "./navTop.module.scss";
import { ROUTE_TOP_NAV } from "@/app/components-view/routes";

const Link: FC<{
  label: string;
  link: string;
  onClick?: () => void;
}> = ({ label, link, onClick }) => {
  return (
    <div onClick={onClick}>
      <a className="text-decoration-none " href={link} rel="noreferrer">
        {label}
      </a>
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </div>
  );
};
const NavTop: VFC = memo((): JSX.Element => {
  return (
    <header style={{ backgroundColor: "#393939" }}>
      <div
        className={cx(
          classes.navTop,
          "text-white text-base  font-normal hover:underline px-10 py-3 relative z-100"
        )}
      >
        <Link
          label={
            "Spazi di lavoro impareggiabili. Ottimi sconti. Paghi il 25% in meno. *Si applicano Termini e condizioni"
          }
          link={ROUTE_TOP_NAV}
        />
      </div>
    </header>
  );
});

NavTop.displayName = "NavTop";

export default NavTop;
