// import React from "react";
import { NavLink } from "react-router-dom";

const THeader = () => {
  const navLinkConfig = {
    logo: "HelloLogo",
    links: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "Projects",
        path: "/projects",
      },
      {
        title: "Blog",
        path: "/blog",
      },
      {
        title: "Service",
        path: "/service",
      },
      {
        title: "About",
        path: "/about",
      },
    ],
  };
  return (
    <>
      <div className="container d-flex justify-content-between align-items-center bg-warning">
        <div className="logoBox">LOGO</div>
        <div className="linkBox">
          <ul className="list-unstyled my-auto d-flex gap-4 justify-content-between align-items-center">
            {navLinkConfig.links?.map((item) => {
              return (
                <>
                  <li>
                    {
                      <NavLink
                        className={"text-decoration-none text-white"}
                        to={item.path}
                      >
                        {item.title}
                      </NavLink>
                    }
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div className="contactBox">
          <div>
            {/* <NavLink
              className="text-decoration-none text-white"
              to={navLinkConfig.contact.path}
            ></NavLink> */}
            Contact
          </div>
        </div>
      </div>
    </>
  );
};

export default THeader;
