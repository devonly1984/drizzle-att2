"use client";

import { signIn, useSession } from "next-auth/react";

import DarkModeToggle from "./DarkModeToogle";
import AccountDropdown from "./AccountDropdown";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LogInIcon } from "lucide-react";

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
          {session.data && <AccountDropdown />}
          {!session.data && (
            <Button
              onClick={() =>
                signIn("google", {
                  callbackUrl: "/",
                })
              }
              variant="link"
            >
              <LogInIcon className="mr-2" />
              Sign In
            </Button>
          )}

          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
