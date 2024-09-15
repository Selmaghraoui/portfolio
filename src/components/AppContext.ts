import { createContext } from "react";

export interface IAppContextProps {
  currentRepo: string;
  commands: string[];
  currentCommand: string;
  enteredCommand: string;
  setCurrentRepo: (currentRepo) => void;
  setCommands: (commands) => void;
  setCurrentCommand: (currentCommand) => void;
  setEnteredCommand: (enteredCommand) => void;
}

const AppContext = createContext({} as IAppContextProps);

export default AppContext;
