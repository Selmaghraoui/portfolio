import React from "react";
import {
  Terminal,
  HelpCircle,
  FolderOpen,
  FileText,
  Play,
  X,
  Trash2,
} from "lucide-react";

const Help = () => {
  const commands = [
    { name: "help", description: "Show commands", icon: HelpCircle },
    { name: "cd", description: "Change directory", icon: FolderOpen },
    { name: "show", description: "Render .md files", icon: FileText },
    { name: "execute", description: "Execute applications", icon: Play },
    { name: "close", description: "Close .md files and applications", icon: X },
    { name: "clear", description: "Clear terminal", icon: Trash2 },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="w-full p-6 rounded-lg shadow-md border max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Terminal className="mr-2" />
          Command Help
        </h2>
        <p className="mb-4 text-sm">
          {/* For more information on a specific command, type HELP command-name */}
        </p>
        <div className="space-y-3">
          {commands.map((cmd) => (
            <div
              key={cmd.name}
              className="flex items-center bg-gray-100 p-3 rounded-md hover:bg-gray-700 transition-colors"
            >
              <cmd.icon className="mr-3 text-blue-400" />
              <div>
                <p className="font-mono text-sm">
                  <span className="text-green-400">$</span> {cmd.name}
                </p>
                <p className="text-xs text-gray-400">{cmd.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
