import Image from "next/image"
import Link from "next/link"
import React from "react"
import styles from '../styles/Home.module.css'



const navLinks = [
  {
    name: "Resume",
    link: "/resume",
  },
  {
    name: "About Resume",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
]

const header = () => {
  return (
    <header className="w-screen flex flex-col items-center border-b-2">
      {/* navbar */}
      <div className="navbar">
        {/* desktop */}
        <div className="navbar-center hidden md:flex w-screen justify-center">
          <ul className="menu menu-horizontal justify-between p-0 font-mono">
            {navLinks.map(link => {
              return (
                <li className="menu-item" key={link}>
                  <Link href={link.link} >{link.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* mobile */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost md:hidden">
              <svg viewBox="0 0 75 50" width="30" height="25">
                <rect width="75" height="7"></rect>
                <rect y="20" width="75" height="7"></rect>
                <rect y="40" width="75" height="7"></rect>
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact text-primary dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {navLinks.map(link => {
                return (
                  <Link className="text-primary underline p-2" href="" key={link}>
                    {link.name}
                  </Link>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default header
