"use client";

import { cn } from "@/lib/utils";
import { IconBrandLinkedin, IconMenu2, IconX } from "@tabler/icons-react";
import { ArrowRight, MousePointerClick } from "lucide-react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import React, { createContext, useContext, useState } from "react";

const NavVisibleContext = createContext(false);

export function useNavVisible() {
  return useContext(NavVisibleContext);
}

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
  banner?: React.ReactNode;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className, banner }: NavbarProps) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <NavVisibleContext.Provider value={visible}>
      <motion.header
        animate={{
          boxShadow: visible ? "0 10px 34px rgba(10, 3, 0, 0.08)" : "none",
        }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className={cn(
          "pointer-events-none fixed inset-x-0 top-0 z-150 flex flex-col border-b border-[#d8d1bf] bg-brand-ivory/95 backdrop-blur-sm",
          className,
        )}
      >
        {banner}
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(
                child as React.ReactElement<{ visible?: boolean }>,
                { visible },
              )
            : child,
        )}
      </motion.header>
    </NavVisibleContext.Provider>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.nav
      aria-label="Primary"
      animate={{
        y: visible ? 0 : 0,
        backgroundColor: visible
          ? "rgba(255, 254, 250, 0.98)"
          : "rgba(255, 254, 250, 0.94)",
        backdropFilter: visible ? "blur(14px)" : "blur(8px)",
      }}
      transition={{
        duration: 0.22,
        ease: "easeOut",
      }}
      className={cn(
        "pointer-events-auto relative z-60 mx-auto hidden h-16 w-full container flex-row items-center justify-between px-0 lg:flex",        className,
      )}
    >
      {children}
    </motion.nav>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "hidden flex-row items-center gap-1 lg:flex",
        className,
      )}
    >
      {items.map((item, idx) => (
        <Link
  onMouseEnter={() => setHovered(idx)}
  onClick={onItemClick}
  className="relative px-3.5 py-2 text-sm font-normal text-brand-cocoa transition-colors hover:text-brand-orange"
  key={`link-${idx}`}
  href={item.link}
>
          {hovered === idx && (
            <motion.div
              layoutId="navbar-hover"
              className="absolute inset-0 bg-brand-peach/70"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </Link>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.nav
      aria-label="Primary mobile"
      animate={{
        backgroundColor: visible
          ? "rgba(255, 254, 250, 0.98)"
          : "rgba(255, 254, 250, 0.94)",
        y: visible ? 0 : 0,
      }}
      transition={{
        duration: 0.22,
        ease: "easeOut",
      }}
      className={cn(
        "pointer-events-auto relative z-160 mx-auto flex h-20 w-full max-w-[100rem] flex-col items-center justify-between px-6 lg:hidden",
        className,
      )}
    >
      {children}
    </motion.nav>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className={cn(
            "absolute inset-x-0 top-20 z-170 flex w-full flex-col items-start justify-start gap-4 border border-brand-border bg-brand-ivory px-6 py-6 shadow-[0_16px_40px_rgba(32,21,21,0.08)]",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex size-12 items-center justify-center bg-transparent text-brand-cocoa transition-colors hover:text-brand-orange"
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <IconX className="size-8 stroke-[1.75]" />
      ) : (
        <IconMenu2 className="size-8 stroke-[1.75]" />
      )}
    </button>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
  "relative inline-flex min-h-10 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none px-4 py-3 text-center text-sm font-normal tracking-normal transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ivory";

  const variantStyles = {
    primary:
      "border border-brand-border bg-brand-ivory text-brand-cocoa shadow-[0_8px_24px_rgba(32,21,21,0.06)] hover:bg-brand-peach",
    secondary:
      "border border-brand-border bg-transparent text-brand-cocoa shadow-none hover:bg-brand-peach/70",
      dark: "border border-brand-orange bg-brand-orange text-brand-ivory shadow-none hover:bg-brand-orange/90",
    gradient:
      "border border-brand-orange bg-brand-orange text-brand-ivory shadow-brand hover:bg-[#e64700]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

export function NavActions({
  primaryHref = "/contact",
  primaryLabel = "Book an intro call",
  secondaryHref = "/#features",
  secondaryLabel = "View solutions",
}: {
  primaryHref?: string;
  primaryLabel?: React.ReactNode;
  secondaryHref?: string;
  secondaryLabel?: React.ReactNode;
}) {
  const visible = useNavVisible();

  return (
    <div className="relative z-20 flex shrink-0 items-center gap-3">
      <Link
        href="https://linkedin.com"
        target="_blank"
        className="flex size-10 items-center justify-center text-brand-cocoa transition-colors hover:text-brand-orange"
      >
        <IconBrandLinkedin className="size-5" />
      </Link>
  
      <NavbarButton href={primaryHref} variant="dark" as={Link}>
        <ArrowRight className="size-4" aria-hidden="true" />
        {primaryLabel}
      </NavbarButton>
      <AnimatePresence initial={false}>
        {visible ? (
          <motion.div
            initial={{ width: 0, opacity: 0, x: 10 }}
            animate={{ width: "auto", opacity: 1, x: 0 }}
            exit={{ width: 0, opacity: 0, x: 10 }}
            transition={{ type: "spring", stiffness: 280, damping: 34 }}
            className="overflow-hidden"
          >
            <NavbarButton href={secondaryHref} variant="primary" as={Link}>
              <MousePointerClick className="size-4" aria-hidden="true" />
              {secondaryLabel}
            </NavbarButton>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
