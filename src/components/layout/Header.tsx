import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsMoon } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import clsx from "clsx";
import { useState } from "react";
import { useRouter } from "next/router";

const links = [
  {
    target: "/",
    text: "Home",
  },
  {
    target: "/guestbook",
    text: "Guestbook",
  },
  {
    target: "/blog",
    text: "Blog",
  },
  {
    target: "/contact",
    text: "Contact",
  },
];

function NavItem({
  link,
  onClick,
}: {
  link: { target: string; text: string };
  onClick: () => void;
}) {
  const router = useRouter();
  return (
    <li
      key={link.target}
      onClick={onClick}
      className={clsx(
        "border-b border-b-slate-300 pb-3 md:pb-0 md:border-b-0 cursor-pointer",
        {
          "text-slate-500": router.asPath !== link.target,
          "text-slate-800 font-bold": router.asPath === link.target,
        }
      )}
    >
      <Link href={link.target}>{link.text}</Link>
    </li>
  );
}

export default function Header({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={clsx(
        className,
        "pt-5 pb-12 flex items-center justify-between"
      )}
    >
      <button
        onClick={() => setOpen((pre) => !pre)}
        className="text-2xl md:hidden z-20"
      >
        {open ? <MdClose /> : <GiHamburgerMenu />}
      </button>
      <nav
        className={clsx(
          "absolute md:static w-screen h-screen top-0 left-0 pt-16 md:pt-0 pl-4 md:pl-0 pr-10 md:pr-0 md:w-auto md:h-auto bg-white",
          {
            "translate-x-full md:translate-x-0": !open,
          }
        )}
      >
        <ul className="flex flex-col md:flex-row gap-7 md:gap-5">
          {links.map((link) => (
            <NavItem
              key={link.target}
              link={link}
              onClick={() => setOpen(false)}
            />
          ))}
        </ul>
      </nav>

      <button className="z-20 p-2 bg-slate-200 rounded-lg">
        <BsMoon />
      </button>
    </header>
  );
}
