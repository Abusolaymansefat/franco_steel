"use client";

import Image from "next/image";
import Link from "next/link";

// import { useSession, signOut } from "next-auth/react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

export default function NavBar() {
    // const { data: session, status } = useSession();

  const navMenu = () => (
    <>
      <li>
        <Link href="/" className="hover:underline">Home</Link>
      </li>
      <li>
        <Link href="/products" className="hover:underline">
          Products
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      {/* Start */}
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navMenu()}
          </ul>
        </div>
        <Link href="/" className="text-xl">
          <Image
            src="/logo/logo.webp"
            width={107}
            height={87}
            alt="brand logo"
          />
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu()}</ul>
      </div>

      {/* End */}
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/register">Register</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          {/* {status === "authenticated" ? (
            <>
              <li>
                <Image
                  className="rounded-full"
                  src={session?.user?.image || "/assets/user.png"}
                  width={40}
                  height={40}
                  alt="user-image"
                />
              </li>
              <li>
                <button onClick={() => signOut()}>Logout</button>
              </li>
            </>
          ) : (
            <>
              
            </>
          )} */}
        </ul>
      </div>
    </div>
  );
}
