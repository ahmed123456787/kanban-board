import { useState } from "react";
import { CardProvider } from "../context/context";
import Layout from "../components/home/Layout";
import {
  ArrowDownUp,
  LayoutDashboard,
  Table2,
  CalendarCheck,
  Filter,
} from "lucide-react";

import CardBord from "../components/CardBord";

const homeChoices = [
  {
    name: "Board",
    icon: LayoutDashboard,
  },
  {
    name: "Table",
    icon: Table2,
  },
  {
    name: "Calendar",
    icon: CalendarCheck,
  },
];

const Home = () => {
  const [selectedChoice, setSelectedChoice] = useState<string>(
    homeChoices[0].name
  );

  return (
    <CardProvider>
      <Layout>
        {/* The Core Content */}
        <div className="flex flex-col w-full">
          <div className="flex space-x-8 items-center relative">
            {homeChoices.map((choice) => (
              <div
                key={choice.name}
                className="flex flex-col items-center text-textIcon space-x-2 cursor-pointer"
                onClick={() => setSelectedChoice(choice.name)}
              >
                <choice.icon className="w-5 h-5" />
                <h2
                  className={`text-sm ${
                    selectedChoice === choice.name ? "font-bold" : ""
                  }`}
                >
                  {choice.name}
                </h2>
                <div
                  className={`h-1 w-full  mt-1 ${
                    selectedChoice === choice.name ? "bg-black" : "bg-gray-300"
                  }`}
                  style={{
                    height: selectedChoice === choice.name ? "2px" : "1px",
                  }}
                />
              </div>
            ))}
            {/* The filter and sort section */}
            <div className="flex absolute right-4 space-x-4 text-sm text-textIcon">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <p>Filter</p>
                  <Filter />
                </div>
                <div className="flex items-center space-x-1">
                  <p>Sort</p>
                  <ArrowDownUp />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex">
            <CardBord />
          </div>
        </div>
      </Layout>
    </CardProvider>
  );
};

export default Home;
