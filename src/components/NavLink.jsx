import { Link } from "react-router-dom";
import { TickIcon } from "../utils/icons/TickIcon";

export const NavLink = ({ to, children, classname, location, ...rest }) => {
  return (
    <Link
      to={to}
      className={`${
        location.pathname === to || location.pathname.includes(to)
          ? "bg-tintblue3 font-medium py-[16px] px-[20px] -mx-4 border rounded-[50px] flex items-center justify-between gap-2"
          : "bg-none font-normal"
      } ${classname} `}
      {...rest}
    >
      {children}
      {(location.pathname === to || location.pathname.includes(to)) && (
        <TickIcon />
      )}
    </Link>
  );
};
