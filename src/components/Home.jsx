import React, { useContext } from "react";
import { Folder, FileText, LayoutPanelLeft } from "lucide-react";
import AppContext from "./AppContext.ts";
import { FILE, ICON } from "./model.ts";
import fileServices from "./file.services.ts";

const FileItem = ({ name, type }) => {
  const getIcon = {
    [ICON.FOLDER]: <Folder size={40} className="text-yellow-500" />,
    [ICON.DOCUMENT]: <FileText size={40} className="text-indigo-500" />,
    [ICON.APP]: <LayoutPanelLeft size={40} className="text-gray-700" />,
    default: <Folder size={40} className="text-yellow-500" />,
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
      {getIcon[type]}
      <span className="mt-2 text-sm text-center text-gray-700 truncate w-full">
        {name}
      </span>
    </div>
  );
};

const Home = () => {
  const {
    commands,
    setCommands,
    currentCommand,
    setCurrentCommand,
    currentRepo,
    setCurrentRepo,
    enteredCommand,
    // setEnteredCommand,
  } = useContext(AppContext);

  const fileNavigation = {
    [FILE.ABOUT]: () => {
      setCommands([...commands, `${currentRepo} show about.md`]);
      setCurrentCommand("show about.md");
    },
    [FILE.CONTACT]: () => {
      setCommands([...commands, `${currentRepo} execute contact`]);
      setCurrentCommand("execute contact");
    },
    [FILE.EDUCATIONS]: () => {
      setCommands([...commands, `${currentRepo} cd educations`]);
      setCurrentCommand("cd educations");
      setCurrentRepo("user: / educations ~$")
    },
    [FILE.PROJECTS]: () => {
      setCommands([...commands, `${currentRepo} cd projects`]);
      setCurrentCommand("cd projects");
      setCurrentRepo("user: / projects ~$")
    },
    [FILE.RESUME]: () => {
      setCommands([...commands, `${currentRepo} show resume.md`]);
      setCurrentCommand("show resume.md");
    },
    default: () =>
      setCurrentCommand("Sorry this file, folder or application do not exist"),
  };

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4">
      {fileServices.map((file, index) => (
        <div onClick={() => fileNavigation[file.name]()} key={index}>
          <FileItem name={file.name} type={file.type} />
        </div>
      ))}
    </div>
  );
};

export default Home;
