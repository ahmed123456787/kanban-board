import Search from "./Search";
import assets from "../../assets/assets";
import { menuItems } from "../../data/index";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center">
        <img src={assets.kanaban} alt="kanaban" className="w-8 h-8" />
        <p className="text-xl ">Kanban</p>
      </div>
      {/* The search  */}
      <Search />
      <h2 className="text-textIcon pt-3 text-sm">Main Menu</h2>

      {/* The Menu Items */}
      {menuItems.map((item, index) => (
        <Link to={item.link}>
          <div
            key={index}
            className="flex items-center space-x-2 pl-4 p-1 hover:bg-bgHover rounded-lg"
          >
            <item.icon className="text-textIcon" />
            <p className="text-textIcon text-xs">{item.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
