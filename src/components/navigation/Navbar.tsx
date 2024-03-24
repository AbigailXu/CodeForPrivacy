"use client"

import { useState } from "react";
import Link from "next/link";
import { GrTableAdd } from "react-icons/gr";

import Logo from "@/components/UI/Logo";

const ROUTES = [
  {
    label: "Home",
    route: "/",
    link: ""
  },{
    label: "Privacy in AI",
    route: "/posts",
    link: ""
  },
  {
    label: "Resources",
    route: "/resources",
    link: ""
  }
];



export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      <header className="mx-nav relative z-50 mt-4 flex items-center justify-between lg:mt-8">
        <div className="flex items-center"> {/* Added a div wrapper here */}
          <Logo />
          <span className="ml-3 font-semibold">Code For Privacy</span> {/* Adjust margin-left as needed */}
        </div>
        <nav className="hidden gap-16 lg:flex">
          {ROUTES.map((route) => {
            if (route.link != "") {
              return (
                <a
                  href={route.link}
                  target="_blank"
                  className="font-semibold"
                  key={route.label}
                >
                  {route.label}
                </a>
              );
            } else if (route.route) {
              return (
                <Link
                  href={route.route}
                  className="font-semibold"
                  key={route.label}
                >
                  {route.label}
                </Link>
              );
            }
          })}
        </nav>
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="flex flex-col gap-[5px] lg:hidden"
        >
          <div
            className={`transition-300 h-[5px] w-[22px] rounded-full bg-white ${
              isMobileMenuOpen ? "translate-x-[10px]" : ""
            }`}
          />
          <div className="h-[5px] w-8 rounded-full bg-white" />
          <div
            className={`transition-300 h-[5px] w-[22px] rounded-full bg-white ${
              isMobileMenuOpen ? "" : "translate-x-[10px]"
            }`}
          />
        </button>
      </header>
      <div
        className={`transition-300 fixed inset-0 z-40 lg:hidden ${
          isMobileMenuOpen ? "" : "translate-x-full"
        }`}
      >
        <div className="bg-gradient pointer-events-none absolute inset-0 opacity-10" />
        <nav className="mx-container mt-36 grid gap-8">
          {ROUTES.map((route) => {
            if (route.link) {
              return (
                <a
                  href={route.link}
                  target="_blank"
                  className="text-5xl font-bold text-black"
                  key={route.label}
                >
                  {route.label}
                </a>
              );
            } else if (route.route) {
              return (
                <Link
                  href={route.route}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-5xl font-bold "
                  key={route.label}
                >
                  {route.label}
                </Link>
              );
            }
          })}
        </nav>
      </div>
    </>
  );
}
