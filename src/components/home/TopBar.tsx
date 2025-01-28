import { Bell } from "lucide-react";
import assets from "../../assets/assets";
const TopBar = () => {
  return (
    <div className="flex items-center justify-between   ">
      <h2 className="font-semibold text-xl">Tasks</h2>
      {/* collection of the profile + notification + adding task */}
      <div className="flex items-center space-x-1 md:space-x-5">
        <button className="bg-transparent text-purple-500 p-1 text-sm rounded-lg border-purple-500 border-2">
          {"+ "} Add Task
        </button>
        <Bell className="w-4 h-4" />
        <img src={assets.profile} className="w-10 h-10" />
      </div>
    </div>
  );
};

export default TopBar;
