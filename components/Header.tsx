"use client";

import { useSession } from "next-auth/react";

import DarkModeToggle from "./DarkModeToogle";
import AccountDropdown from "./AccountDropdown";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const session = useSession();
  return (
    <header className="container mx-auto dark:bg-gray-900  py-2 bg-gray-100">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="flex gap-2 items-center text-xl hover:underline"
        >
          <Image src="/icon.png" alt="logo" width={60} height={60} />
          Dev Finder
        </Link>

        <div className="flex items-center gap-4">
          <AccountDropdown />

          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
