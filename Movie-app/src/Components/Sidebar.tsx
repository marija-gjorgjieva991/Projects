import { NavLink } from "react-router-dom";

const navlinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Movies",
    link: "/movies",
  },
  {
    name: "TV Series",
    link: "/tv-series",
  },
  {
    name: "Favorites",
    link: "/favorites",
  },
];

export const Sidebar = () => {
  return (
    <>
      <h1>Movies</h1>
      <ul>
        {navlinks.map((navlink) => (
          <li key={navlink.link}>
            <NavLink
              to={navlink.link}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {navlink.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
