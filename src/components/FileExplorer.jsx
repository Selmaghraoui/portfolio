import React, { useContext } from "react";
import { Folder, X, Minus, Square, ArrowLeft, ArrowRight } from "lucide-react";
import Home from "./Home";
import Educations from "./Educations";
import Projects from "./Projects";
import AppContext from "./AppContext.ts";

const FileExplorer = (props) => {
  const {
    commands,
    setCommands,
    currentCommand,
    setCurrentCommand,
    currentRepo,
    setCurrentRepo,
  } = useContext(AppContext);
  const { fileName } = props;
  const navigateDown = () => {
    setCurrentCommand("cd ..");
    setCommands([...commands, `${currentRepo} cd ..`]);
    setCurrentRepo("user: ~$");
  };

  return (
    <div
      className=" mx-auto bg-gray-100 rounded-lg shadow-md border overflow-hidden"
      style={{
        minWidth: "900px",
      }}
    >
      <div className="bg-[#f3f3f3] p-2 flex items-center justify-between border-b border-gray-300">
        <div className="flex items-center space-x-2">
          <Folder size={20} className="text-yellow-500" />
          <span className="text-sm font-semibold">Folder</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="p-1 hover:bg-gray-200 rounded text-gray-400"
            disabled={true}
          >
            <Minus size={16} />
          </button>
          <button
            className="p-1 hover:bg-gray-200 rounded text-gray-400"
            disabled={true}
          >
            <Square size={16} />
          </button>
          <button
            className="p-1 hover:bg-gray-200 rounded text-gray-400"
            disabled={true}
          >
            <X size={16} />
          </button>
        </div>
      </div>
      <div className="bg-[#f9f9f9] p-2 flex items-center justify-between border-b border-gray-300">
        <div className="flex items-center space-x-2">
          <button
            className={`p-1 rounded ${
              fileName === "home" ? "text-gray-400" : "hover:bg-gray-200"
            }`}
            disabled={props.fileName == "home" ? true : false}
            onClick={navigateDown}
          >
            <ArrowLeft size={20} />
          </button>
          <button
            disabled={true}
            className="p-1 rounded text-gray-400 cursor-not-allowed"
          >
            <ArrowRight size={20} />
          </button>
        </div>
        <div className="bg-white rounded-md px-3 py-1 flex items-center space-x-2 flex-grow mx-4">
          <span className="text-sm text-gray-600">{props.fileName}</span>
        </div>
      </div>
      <div className="p-6 bg-white min-h-[300px]">
        {props.fileName == "home" ? (
          <Home />
        ) : props.fileName == "educations" ? (
          <Educations />
        ) : props.fileName == "projects" ? (
          <Projects />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default FileExplorer;
