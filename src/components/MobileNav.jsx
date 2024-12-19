import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

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

const MobileNav = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size = "sm">
        <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Website Name</DrawerTitle>
          <DrawerDescription>
          </DrawerDescription>
        </DrawerHeader>
        <div className="space-y-4 font-medium px-4 py-2">
          <div className="flex justify-center">{navItems.topLevel.map((item) => (
            <Link key={item.to} to={item.to} className={cn(topLevelLinkStyles, 'hover:bg-primary-foreground rounded-sm')}>
              {item.label}
            </Link>
          ))}</div>

          {navItems.dropdowns.map((section) => (
            <DropdownMenu key={section.trigger}>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="w-full text-left text-sm font-medium">
                  {section.trigger}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px] space-y-2 py-2">
                {section.items.map((item) => (
                  <DropdownMenuItem key={item.to}>
                    <Link to={item.to} className={linkStyles}>
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
