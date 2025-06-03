"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import PlaidLink from "./PlaidLink";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet modal={false}>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none w-fit bg-white">
          <SheetClose asChild>
            <Link
              href="/"
              className="mb-10 cursor-pointer items-center gap-1 flex px-4"
            >
              <Image
                src="/icons/logo.svg"
                width={34}
                height={34}
                alt="HPH Logo"
              />
              <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                HPH Banking
              </h1>
            </Link>
          </SheetClose>

          <div className="mobilenav-sheet">
            <nav className="flex h-full flex-col gap-2 text-white">
              {sidebarLinks.map((item) => {
                const isActive =
                  pathname === item.route ||
                  pathname.startsWith(`${item.route}/`);
                return (
                  <SheetClose asChild key={item.route}>
                    <Link
                      href={item.route}
                      key={item.label}
                      className={cn("mobilenav-sheet_close w-full", {
                        "bg-bank-gradient": isActive,
                      })}
                    >
                      <Image
                        src={item.imgURL}
                        alt={item.label}
                        width={20}
                        height={20}
                        className={cn({
                          "brightness-[3] invert-0": isActive,
                        })}
                      />

                      <p
                        className={cn("text-16 font-semibold text-black-2", {
                          "text-white": isActive,
                        })}
                      >
                        {item.label}
                      </p>
                    </Link>
                  </SheetClose>
                );
              })}
              <PlaidLink user={user} type="mobile" />
            </nav>

            <Footer user={user} type="mobile" />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
