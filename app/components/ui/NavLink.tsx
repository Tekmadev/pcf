import Link from "next/link";
import { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  isMobile?: boolean;
};

const NavLink = ({
  href,
  children,
  className = "",
  onClick,
  isMobile = false,
}: NavLinkProps) => {
  const baseStyles =
    "text-secondary hover:text-primary font-medium transition-colors";
  const mobileStyles = isMobile ? "py-2" : "";
  const linkStyles = `${baseStyles} ${mobileStyles} ${className}`;

  return (
    <Link href={href} className={linkStyles} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavLink;
