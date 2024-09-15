import { Maximize2, Minus, X } from "lucide-react";
import Resume from "./Resume";
import About from "./About";
import { useContext } from "react";
import AppContext from "./AppContext.ts";

const Notepad = (props) => {
  const {
    commands,
    setCommands,
    currentCommand,
    setCurrentCommand,
    currentRepo,
    setCurrentRepo,
  } = useContext(AppContext);

  const close = () => {
    setCommands([...commands, `${currentRepo} close`]);
    setCurrentCommand("close");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full h-[600px] bg-white rounded-lg shadow-md border overflow-hidden flex flex-col">
        {/* Top bar */}
        <div className="bg-gray-200 p-2 flex justify-between items-center">
          <div className="text-sm font-semibold text-gray-700">Notepad</div>
          <div className="flex space-x-2">
            {/* <button className="p-1 hover:bg-gray-300 rounded-md">
              <Minus className="h-4 w-4 text-gray-700" />
            </button>
            <button className="p-1 hover:bg-gray-300 rounded-md">
              <Maximize2 className="h-4 w-4 text-gray-700" />
            </button> */}
            <button
              className="p-1 hover:bg-red-500 rounded-md group"
              onClick={close}
            >
              <X className="h-4 w-4 text-gray-700 group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex">
          {/* Sidebar */}
          <div className="w-48 bg-gray-50 border-r border-gray-200 p-4">
            <div className="text-sm font-semibold mb-2">Files</div>
            <div className="text-sm text-blue-600 cursor-pointer hover:underline">
              {props.fileName == "about"
                ? "About.md"
                : props.fileName == "resume"
                ? "Resume.md"
                : ""}
            </div>
          </div>

          {/* Text area */}
          <div className="flex-1 p-4 overflow-auto">
            <div className="text-lg text-gray-800 whitespace-pre-wrap">
              {props.fileName == "about" ? (
                <About />
              ) : props.fileName == "resume" ? (
                <Resume />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div className="bg-gray-100 p-2 text-xs text-gray-600 flex justify-between">
          <div>Read-only</div>
          <div>UTF-8</div>
        </div>
      </div>
    </div>
  );
};

export default Notepad;
