import { LucideIcon } from "lucide-react";

import {
  House,
  FolderClosed,
  CalendarRange,
  User,
  ChartNoAxesCombined,
  Wallet,
  ClipboardList,
  Mail,
} from "lucide-react";

type MenuItemType = {
  name: string;
  icon: LucideIcon;
  link: `/${string}`;
};

export const menuItems: MenuItemType[] = [
  {
    name: "Home",
    icon: House,
    link: "/",
  },
  {
    name: "Projects",
    icon: FolderClosed,
    link: "/projects",
  },
  {
    name: "Calendar",
    icon: CalendarRange,
    link: "/calendar",
  },
  {
    name: "Team Member",
    icon: User,
    link: "/team",
  },
  {
    name: "Analytics",
    icon: ChartNoAxesCombined,
    link: "/analytics",
  },
  {
    name: "Wallet",
    icon: Wallet,
    link: "/wallet",
  },
  {
    name: "Tasks",
    icon: ClipboardList,
    link: "/tasks",
  },
  {
    name: "Mail",
    icon: Mail,
    link: "/mail",
  },
];
