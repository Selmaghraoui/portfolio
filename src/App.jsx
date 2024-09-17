import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Cmd from "./components/Cmd";
import Help from "./components/Help";
import Contact from "./components/Contact";
import FileExplorer from "./components/FileExplorer";
import Notepad from "./components/Notepad";
import AppContext from "./components/AppContext.ts";
import Draggable from "react-draggable";

function App() {
  const [commands, setCommands] = useState([
    "Hello ! Try to use the command prompt to know more about me.",
    "Type 'help' to get started.",
  ]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [currentRepo, setCurrentRepo] = useState(`user: ~$`);
  const [enteredCommand, setEnteredCommand] = useState();

  const [bounds, setBounds] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateBounds = () => {
      const maxWidth = window.innerWidth * 0.66;
      const maxHeight = window.innerHeight;
      setBounds({
        width: maxWidth,
        height: maxHeight,
      });
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);

    return () => {
      window.removeEventListener("resize", updateBounds);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        commands,
        setCommands,
        currentRepo,
        setCurrentRepo,
        currentCommand,
        setCurrentCommand,
        enteredCommand,
        setEnteredCommand,
      }}
    >
      <header
        className="App-header"
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "66%",
            height: "100vh",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              padding: "20px",
            }}
          >
            <h1>Hi there, </h1>
            <div>
              I'm El Maghraoui Soufiane, Full Stack Web Developer. Welcome to my
              portfolio.
            </div>
          </div>

          <Draggable bounds="parent">
            <div
              style={{
                position: "absolute",
              }}
            >
              {currentCommand === "cd educations" ? (
                <FileExplorer fileName={"educations"} />
              ) : currentCommand === "cd .." &&
                currentRepo === "user: / educations ~$" ? (
                <FileExplorer fileName={"home"} />
              ) : currentCommand === "cd projects" ? (
                <FileExplorer fileName={"projects"} />
              ) : currentCommand === "cd .." &&
                currentRepo === "user: / projects ~$" ? (
                <FileExplorer fileName={"home"} />
              ) : currentCommand === "help" ? (
                <Help />
              ) : (
                <FileExplorer fileName={"home"} />
              )}
            </div>
          </Draggable>

          {currentCommand === "show about.md" ||
          currentCommand === "show resume.md" ||
          currentCommand === "execute contact" ? (
            <Draggable bounds="parent">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                }}
              >
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  >
                    {currentCommand === "show about.md" ? (
                      <Notepad fileName={"about"} />
                    ) : currentCommand === "show resume.md" ? (
                      <Notepad fileName={"resume"} />
                    ) : currentCommand === "execute contact" ? (
                      <Contact />
                    ) : (
                      <></>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </Draggable>
          ) : null}
        </div>

        <div style={{ width: "34%" }}>
          <Cmd />
        </div>
      </header>
    </AppContext.Provider>
  );
}

export default App;
