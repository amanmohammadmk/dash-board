import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggle = () => setIsOpen(!isOpen);

  const closeSidebar = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeSidebar);

    return () => {
      document.removeEventListener('click', closeSidebar);
    };
  }, []);

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/2951/2951552.png"
    },
    {
      path: "/addons",
      name: "Addons",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/5844/5844591.png"
    },
    {
      path: "/perks",
      name: "Perks",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/747/747891.png"
    },
    {
      path: "/faq",
      name: "FAQ",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/4353/4353440.png"
    },
    {
      path: "/support",
      name: "Support",
      imageSrc: "https://www.clipartmax.com/png/small/240-2407002_customer-helpdesk-call-center-icon-vector.png"
    }
  ];

  return (
    <div ref={sidebarRef} className={`container ${isOpen ? 'container-open' : 'container-closed'}`}>
      <div
        style={{ width: isOpen ? "200px" : "50px" }}
        className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}
        onClick={toggle}
      >
        <div className="top_section">
          <div style={{ opacity: isOpen ? 1 : 0, overflow: "hidden", transition: "opacity 0.5s ease-in-out" }} className="profile">
            <img
              src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
              alt=""
              width={65}
              height={65}
            />
            <div className="profile-details">
              <h6>Rahul Sharma</h6>
              <span>rahul123@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="select-link">
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeClassName="active">
              <div className="icon"> <img src={item.imageSrc} width={18} height={18} alt="" /></div>
              <div style={{ display: isOpen ? "block" : "none", opacity: isOpen ? 1 : 0, overflow: "hidden", transition: "opacity 0.5s ease-in-out" }} className="link_text" >
                {item.name}
              </div>
            </NavLink>
          ))}
          <div style={{ marginLeft: isOpen ? "50px" : "0px", opacity: isOpen ? 1 : 0, overflow: "hidden", transition: "opacity 0.5s ease-in-out, margin-left 0.5s ease-in-out" }} className="logout" >
            <h2>logout</h2>
            <img src="https://cdn-icons-png.flaticon.com/512/4421/4421772.png" width={30} height={28} alt="" />
          </div>
        </div>
      </div>
      <main style={{ marginLeft: isOpen ? "150px" : "0px", transition: "margin-left 0.5s ease-in-out" }}>{children}</main>
    </div>
  );
};

export default Sidebar;
