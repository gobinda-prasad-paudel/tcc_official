import React from "react";
import logo from "../assets/club_logo.png";
const Navbar = () => {
  const navBarItems = [
    {
      itemName: "Home",
      link: "/",
    },
    {
      itemName: "Notice",
      link: "/#notice",
    },
    {
      itemName: "Infinity Magazine",
      link: "/#infinity",
    },
    {
      itemName: "Projects",
      link: "/#projects",
    },
    {
      itemName: "Contact Us",
      link: "/#footer",
    },
    {
      itemName: "Achievements",
      link: "/#achievements",
    },
    {
      itemName: "Members",
      link: "/team-members",
    },
  ];
  return (
    <nav>
      {/* <h1>TCC</h1> */}
      <a href="/">
        {" "}
        <img src={logo} alt="Logo" />
      </a>

      <div className="links">
        {navBarItems.map((item, id) => (
          <a key={id} href={item.link}>
            {item.itemName}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
