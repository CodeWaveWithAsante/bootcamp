import React from "react";
import { Button, Menu } from "@headlessui/react";
import useStore from "../store";
import { MdOutlineClose, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiCurrencyFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const links = [
  { label: "Dashboard", link: "/dashboard" },
  { label: "Transactions", link: "/transactions" },
  { label: "Accounts", link: "/account" },
  { label: "Settings", link: "/settings" },
];

const UserMenu = () => {
  const user = useStore((state) => state.user);
  return (
    <div>
      <Menu as="div" className="relative  z-50">
        <div>
          <Button className="">
            <div className="flex items-center gap-2">
              <div className="w-10 2xl:w-12 h-10 2xl:h-12 rounded-full text-white bg-violet-600 cursor-pointer flex items-center justify-center">
                <p className="text-2xl font-bold">
                  {user?.firstName?.charAt(0)}
                </p>
              </div>
              <div className="hidden md:block text-left">
                <p className="text-lg font-medium text-black dark:text-gray-400">
                  {user?.firstName}
                </p>
                <span className="text-sm text-gray-700 dark:text-gray-500">
                  {user?.email}
                </span>
              </div>
              <MdOutlineKeyboardArrowDown className="hidden md:block text-2xl text-gray-600 dark:text-gray-300 cursor-pointer" />
            </div>
          </Button>
        </div>
      </Menu>
    </div>
  );
};
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="py-4 flex items-center justify-between">
      <div>
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 md:w-12 h-10 md:h-12 flex items-center justify-center bg-violet-700 rounded-xl">
            <RiCurrencyFill className="text-white text-3xl hover:animate-spin" />
          </div>

          <p className="text-2xl font-semibold text-black dark:text-white">
            My-Finance
          </p>
        </Link>
      </div>
      <div className="flex items-center gap-6 ">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.link}
            className={`text-base py-1.5 px-3 rounded-full font-medium text-gray-700 dark:text-gray-400 ${
              window.location.pathname === link.link
                ? "text-white bg-black"
                : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div>
        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
