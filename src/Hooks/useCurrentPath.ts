import ROUTES from "Routes";
import { matchRoutes, useLocation } from "react-router-dom";

// const routes = Object.values(ROUTES)
const routes = Object.values(ROUTES).map(({ path }) => ({ path }));

export const useCurrentPath = () => {
  const location = useLocation();
  const matches = matchRoutes(routes, location);

  const pathname = matches?.[0]?.pathname || location.pathname;

  return {
    path: matches?.[0]?.route.path || location.pathname,
    pathname,
    params: matches?.[0]?.params,
    basePathname: "/" + pathname.split("/")?.[1] || "",
  };
};
