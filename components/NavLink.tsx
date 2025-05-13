"use client";

import Link from "next/link";
import React, { ReactNode } from "react";
import { useSidebar } from "./ui/sidebar";

interface NavLinkProps {
  href: string;
  icon: ReactNode;
  title: string;
}

const NavLink = ({ href, icon, title }: NavLinkProps) => {
  const { setOpenMobile } = useSidebar();

  return (
    <Link
      href={href}
      onClick={() => setOpenMobile(false)}
      className="flex flex-row items-center gap-2 ml-2 mb-2"
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
};

export default NavLink;
