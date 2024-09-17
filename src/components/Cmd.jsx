import React, { useContext, useState } from "react";
import { X, Minus, Square } from "lucide-react";
import AppContext from "./AppContext.ts";

const Cmd = () => {
  const {
    commands,
    setCommands,
    currentCommand,
    setCurrentCommand,
    currentRepo,
    setCurrentRepo,
    // enteredCommand,
    // setEnteredCommand,
  } = useContext(AppContext);

  const handleKeyDown = (e) => {
    const enteredCommand = e.target.value;
    if (e.keyCode === 13) {
      setCommands([...commands, `${currentRepo} ${enteredCommand}`]);

      // about
      if (currentRepo == `user: ~$` && enteredCommand === "show about.md") {
        setCurrentCommand("show about.md");
      }

      // resume
      else if (
        currentRepo == `user: ~$` &&
        enteredCommand === "show resume.md"
      ) {
        setCurrentCommand("show resume.md");
      }
      // close about / resume
      else if (currentRepo == `user: ~$` && enteredCommand == "close") {
        setCurrentCommand("");
      }

      // contact
      else if (
        currentRepo == `user: ~$` &&
        enteredCommand === "execute contact"
      ) {
        setCurrentRepo(`user: / contact ~$`);
        setCurrentCommand("execute contact");
      }
      // close contact
      else if (
        currentRepo == `user: / contact ~$` &&
        enteredCommand == "close"
      ) {
        setCurrentRepo(`user: ~$`);
        setCurrentCommand("");
      }

      // projects
      else if (currentRepo == `user: ~$` && enteredCommand === "cd projects") {
        setCurrentRepo(`user: / projects ~$`);
        setCurrentCommand("cd projects");
      } else if (
        currentRepo == `user: / projects ~$` &&
        enteredCommand == "cd .."
      ) {
        setCurrentRepo(`user: ~$`);
        setCurrentCommand("");
      }

      // educations
      else if (currentRepo == "user: ~$" && enteredCommand == "cd educations") {
        setCurrentRepo("user: / educations ~$");
        setCurrentCommand("cd educations");
      } else if (
        currentRepo == "user: / educations ~$" &&
        enteredCommand == "cd .."
      ) {
        setCurrentRepo("user: ~$");
        setCurrentCommand("");
      }

      //
      else if (enteredCommand === "help") {
        setCurrentCommand("help");
      } else if (enteredCommand === "") {
        // nothing for now
      } else if (enteredCommand === "clear") {
        setCommands([
          "Hello ! Try to use the command prompt to knwo more about me.",
          "Type 'help' to get started.",
        ]);
      }

      // command not found
      else {
        setCommands([
          ...commands,
          `${currentRepo} ${enteredCommand}`,
          `'${enteredCommand}' is not recognized as an internal or external command.`,
        ]);
      }

      e.target.value = "";
    }
  };

  return (
    <div
      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg w-full"
      style={{ textAlign: "left" }}
    >
      <div className="bg-gray-800 px-4 py-2 flex justify-between items-center">
        <div className="text-white text-sm">Command Prompt</div>
        <div className="flex space-x-2">
          <button className="text-gray-400 hover:text-white">
            <Minus size={16} />
          </button>
          <button className="text-gray-400 hover:text-white">
            <Square size={16} />
          </button>
          <button className="text-gray-400 hover:text-white">
            <X size={16} />
          </button>
        </div>
      </div>

      <div
        className="p-4 overflow-y-auto"
        style={{ height: "calc(100vh - 36px)" }}
      >
        {commands.map((cmd, index) => (
          <div key={index} className="text-white font-mono text-sm">
            {cmd}
            {index == 1 ? (
              <>
                <br />
                <br />
              </>
            ) : (
              <></>
            )}
          </div>
        ))}
        <div className="flex text-white font-mono text-sm">
          <span>{currentRepo}</span>
          <input
            type="text"
            onKeyDown={handleKeyDown}
            className="bg-transparent focus:outline-none flex-grow"
            aria-label="Command input"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default Cmd;
