import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";
import { menuItems } from "../../data/index";
import assets from "../../assets/assets";

const Sidebar = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState<string>("");

  useEffect(() => {
    const currentItem = menuItems.find(
      (item) => item.link === location.pathname
    );
    if (currentItem) {
      setSelectedItem(currentItem.name);
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col p-4">
      <div className="flex items-center mb-4">
        <img src={assets.kanaban} alt="kanaban" className="w-8 h-8" />
        <p className="text-xl ml-2">Kanban</p>
      </div>
      {/* The search */}
      <Search />
      <h2 className="text-textIcon p-3 text-sm">Main Menu</h2>

      {/* The Menu Items */}
      {menuItems.map((item, index) => (
        <Link
          to={item.link}
          key={index}
          onClick={() => setSelectedItem(item.name)}
        >
          <div
            className={`flex items-center space-x-2 pl-4 p-1 mb-2 hover:bg-bgHover rounded-lg ${
              selectedItem === item.name ? "font-bold bg-bgHover" : ""
            }`}
          >
            <item.icon className="text-textIcon" />
            <p
              className={`text-textIcon text-xs ${
                selectedItem === item.name ? "font-bold" : ""
              }`}
            >
              {item.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
