export const ROUTE_ROOT = "/";
export const ROUTE_TOP_NAV = "https://www.regus.com/it-it/promotion";
export const ROUTE_HOME = "/home";
export const ROUTE_NOT_FOUND = "/*";

export type TRoute =
  | typeof ROUTE_ROOT
  | typeof ROUTE_HOME
  | typeof ROUTE_TOP_NAV
  | typeof ROUTE_NOT_FOUND;
