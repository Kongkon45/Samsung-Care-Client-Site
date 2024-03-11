import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
const Navbar = () => {
  return (
    <div className="bg-[#f2f2f2] sticky top-0 z-50">
      <div className="navbar p-0 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#f2f2f2] rounded-box w-52"
            >
              <li>
                <NavLink to="/" activeClassName='text-white'  style={{ background: "none" }}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about_us" activeClassName='text-white' style={{ background: "none" }}>
                  About_Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" activeClassName='text-white' style={{ background: "none" }}>
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact_us" activeClassName='text-white' style={{ background: "none" }}>
                  Contact_Us
                </NavLink>
              </li>
            </ul>
          </div>
          <Link><img className="w-40 h-16"  src={logo} alt="samsung" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/" activeClassName='text-white' className='text-[16px]' style={{ background: "none" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about_us" activeClassName='text-white' className='text-[16px]'  style={{ background: "none" }}>
                About_Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" activeClassName='text-white' className='text-[16px]'  style={{ background: "none" }}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact_us" activeClassName='text-white' className='text-[16px]'  style={{ background: "none" }}>
                Contact_Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
