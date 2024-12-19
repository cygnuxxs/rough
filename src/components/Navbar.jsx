import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const linkStyles =
  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground";
const topLevelLinkStyles = "px-3 py-2 text-sm font-medium";

const navItems = {
  topLevel: [
    { to: "/", label: "Home" },
    { to: "/help", label: "Help" },
  ],
  dropdowns: [
    {
      trigger: "Attendance",
      items: [
        { to: "/attendance/view", label: "View Attendance" },
        { to: "/attendance/mark", label: "Mark Attendance" },
        { to: "/attendance/reports", label: "Attendance Reports" },
      ],
    },
    {
      trigger: "Hiring",
      items: [
        { to: "/hiring/applications", label: "Job Applications" },
        { to: "/hiring/post", label: "Post a Job" },
      ],
    },
    {
      trigger: "Profile",
      items: [
        { to: "/profile/settings", label: "Settings" },
        { to: "/profile/logout", label: "Logout" },
      ],
    },
  ],
};

const Navbar = () => {
  return (
    <NavigationMenu className="mx-auto max-sm:hidden py-4">
      <NavigationMenuList className="space-x-2">
        {navItems.topLevel.map((item) => (
          <NavigationMenuItem key={item.to}>
            <NavigationMenuLink asChild>
              <Link to={item.to} className={topLevelLinkStyles}>
                {item.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        {navItems.dropdowns.map((section) => (
          <NavigationMenuItem key={section.trigger}>
            <NavigationMenuTrigger className="text-sm font-medium">
              {section.trigger}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-2 p-4">
                {section.items.map((item) => (
                  <li key={item.to}>
                    <NavigationMenuLink asChild>
                      <Link to={item.to} className={linkStyles}>
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
