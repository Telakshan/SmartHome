import React, { useContext, useEffect, useRef, useState } from "react";
import { BiCartAlt } from "react-icons/bi";
import { HiMenuAlt2, HiOutlineX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { ApplicationContext } from "../../Hooks/ApplicationContext";
import { CartContext } from "../../Hooks/CartContext";
import Dropdown from "../Dropdown/Dropdown";
import Search from "../Search/Search";
import SideBar from "../SideBar/SideBar";
import "./NavBar.scss";

const NavBar: React.FC = () => {
  const wrapper = useRef<HTMLDivElement>(null);

  const { itemCount } = useContext(CartContext);
  const { toggleHeader, isShowing, toggleDropDown, dropDownActive } =
    useContext(ApplicationContext);
  const [dropDown, setDropDown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSideBar, setShowSidebar] = useState(false);

  const handleScroll = () => {
    const offset = window.pageYOffset;
    offset > 100 ? setScrolled(true) : setScrolled(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (!(wrapper.current! as any).contains(event.target)) {
      setDropDown(false);
      setShowSidebar(false);
      if (isShowing) {
        toggleHeader();
      }
      if(dropDownActive){
        toggleDropDown();
      }
      if(isShowing && dropDownActive){
        toggleHeader();
        toggleDropDown();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, [handleClickOutside]);

  return (
    <>
      <div
        className={`navigation-container ${scrolled ? "scrolled" : null}`}
        ref={wrapper}
      >
        <div className="logo">
          <NavLink to="/">
            <h4>Smart Home</h4>
          </NavLink>
        </div>

        <div className="menu-bar">
          <HiMenuAlt2
            className="icon"
            onClick={() => {
              setShowSidebar(!showSideBar);
              toggleHeader();
            }}
          />
        </div>

        {showSideBar ? (
          <>
            <SideBar showSideBar={showSideBar} />
            <HiOutlineX
              onClick={() => setShowSidebar(!showSideBar)}
              className="close"
            />
          </>
        ) : null}

        <div className="search-container">
          <Search />
        </div>

        <div className="option-box">
          <NavLink to="/shop" className="option">
            Shop
          </NavLink>
          <NavLink to="/contact" className="option">
            About
          </NavLink>
          <NavLink to="/login" className="option">
            Log in
          </NavLink>
        </div>
        <div className="cart-icon-container">
          {itemCount !== 0 ? (
            <span className="number-of-items">{itemCount}</span>
          ) : null}

          <BiCartAlt
            className="cart-icon"
            onClick={() => {
              setDropDown(!dropDown);
              toggleDropDown();
            }}
          />
        </div>
        {dropDown ? <Dropdown /> : null}
      </div>
    </>
  );
};

export default NavBar;
