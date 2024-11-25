import { NavLink } from "react-router-dom";
import { TickIcon } from "../utils/icons/TickIcon";

const WorkNav = () => {
  return (
    <nav className="text-sm text-greyblack300 flex items-center p-5 fixed left-0 top-20 z-20 w-full mx-auto bg-tintblue5">
      <NavLink
        className={({ isActive }) =>
          `border border-greyblack400 p-2 rounded-tl-full rounded-bl-full flex items-center gap-2 whitespace-nowrap ${
            isActive ? "bg-tintblue1 text-greyblack100" : ""
          }`
        }
        to="casestudy"
      >
        {({ isActive }) => (
          <>
            {isActive && <TickIcon className="mr-2" />}
            Case Study
          </>
        )}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `border border-greyblack400 p-2 flex items-center gap-2 ${
            isActive ? "bg-tintblue1 text-greyblack100" : ""
          }`
        }
        to="website"
      >
        {({ isActive }) => (
          <>
            {isActive && <TickIcon className="mr-2" />}
            Website
          </>
        )}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `border border-greyblack400 p-2 rounded-tr-full rounded-br-full flex items-center gap-2 ${
            isActive ? "bg-tintblue1 text-greyblack100" : ""
          }`
        }
        to="exploration"
      >
        {({ isActive }) => (
          <>
            {isActive && <TickIcon />}
            Exploration
          </>
        )}
      </NavLink>
    </nav>
  );
};

export default WorkNav;
