import { NavLink } from "react-router-dom";
import { TickIcon } from "../utils/icons/TickIcon";

const WorkNav = () => {
  return (
    <nav className="text-sm text-greyblack300 flex items-center justify-center p-5 -ml-8 fixed left-0 top-20 z-10 w-full mx-auto">
      <NavLink
        className={({ isActive }) =>
          `border border-greyblack400 p-2 rounded-tl-full rounded-bl-full transition-all flex items-center gap-2 whitespace-nowrap ${
            isActive ? "bg-tintblue1 text-greyblack100" : ""
          }`
        }
        to="/works/casestudy"
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
          `border border-greyblack400 p-2 flex items-center gap-2 lg:hidden ${
            isActive ? "bg-tintblue1 text-greyblack100" : ""
          }`
        }
        to="/works/website"
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
          `hidden border border-greyblack400 p-2 lg:flex items-center gap-2 ${
            isActive ? "bg-tintblue1 text-greyblack100" : ""
          }`
        }
        to="/works/website"
      >
        {({ isActive }) => (
          <>
            {isActive && <TickIcon className="mr-2" />}
            Website Design
          </>
        )}
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `border border-greyblack400 p-2 rounded-tr-full rounded-br-full flex lg:hidden items-center gap-2 ${
            isActive ? "bg-tintblue1 text-greyblack100" : ""
          }`
        }
        to="/works/exploration"
      >
        {({ isActive }) => (
          <>
            {isActive && <TickIcon />}
            Exploration
          </>
        )}
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `hidden border border-greyblack400 p-2 rounded-tr-full rounded-br-full lg:flex items-center gap-2 ${
            isActive ? "bg-tintblue1 text-greyblack100" : ""
          }`
        }
        to="/works/exploration"
      >
        {({ isActive }) => (
          <>
            {isActive && <TickIcon />}
            UI Explorations
          </>
        )}
      </NavLink>
    </nav>
  );
};

export default WorkNav;
