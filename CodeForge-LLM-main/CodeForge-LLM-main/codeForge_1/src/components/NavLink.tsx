import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(
            // ✅ DEFAULT visible styles
            "text-gray-300 hover:text-white transition-colors",

            // ✅ ACTIVE state (important fix)
            isActive && "text-teal-400 font-semibold",

            // ✅ PENDING state
            isPending && "opacity-70",

            // ✅ custom classes (if passed)
            className,
            isActive && activeClassName,
            isPending && pendingClassName
          )
        }
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
