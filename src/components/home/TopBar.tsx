import { Bell } from "lucide-react";
import assets from "../../assets/assets";
const TopBar = () => {
  return (
    <div className="flex items-center justify-between   ">
      <h2 className="font-semibold text-2xl">Tasks</h2>
      {/* collection of the profile + notification + adding task */}
      <div className="flex items-center space-x-5">
        <button className="bg-transparent text-purple-500 px-3 py-2 rounded-lg border-purple-500 border-2">
          {"+ "} Add Task
        </button>
        <Bell className="w-6 h-5" />
        <img src={assets.profile} className="w-10 h-10" />
      </div>
    </div>
  );
};

export default TopBar;
