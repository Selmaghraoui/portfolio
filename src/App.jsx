import { useEffect, useState } from "react";
import "./App.css";
import Cmd from "./components/Cmd";
import Header from "./components/Header";
import Help from "./components/Help";
import Contact from "./components/Contact";
import FileExplorer from "./components/FileExplorer";
import Notepad from "./components/Notepad";
import AppContext from "./components/AppContext.ts";
import DraggableCard from "./drag/DragAndDrop.jsx";
import SecondDraggableCard from "./drag/SecondDraggableCard.jsx";
import Card from "./drag/Card.jsx";

function App() {
  const [commands, setCommands] = useState([
    "Hello ! Try to use the command prompt to knwo more about me.",
    "Type 'help' to get started.",
  ]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [currentRepo, setCurrentRepo] = useState(`user: ~$`);
  const [enteredCommand, setEnteredCommand] = useState();

  // return <Card />;

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
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div
          style={{
            width: "66%",
            padding: "24px",
          }}
        >
          {currentCommand === "show about.md" ? (
            <Notepad fileName={"about"} />
          ) : currentCommand === "show resume.md" ? (
            <Notepad fileName={"resume"} />
          ) : currentCommand === "execute contact" ? (
            <Contact />
          ) : // ------------- educations -------------
          currentCommand === "cd educations" ? (
            <FileExplorer fileName={"educations"} />
          ) : currentCommand === "cd .." &&
            currentRepo === "user: / educations ~$" ? (
            <FileExplorer fileName={"home"} />
          ) : // ------------- projects -------------
          currentCommand === "cd projects" ? (
            <FileExplorer fileName={"projects"} />
          ) : currentCommand === "cd .." &&
            currentRepo === "user: / projects ~$" ? (
            <FileExplorer fileName={"home"} />
          ) : // ------------- help -------------
          currentCommand === "help" ? (
            <Help />
          ) : (
            <Header />
          )}
        </div>

        <div style={{ width: "34%" }}>
          <Cmd />
        </div>
      </header>
    </AppContext.Provider>
  );

  // const [bounds, setBounds] = useState({
  //   card1: { left: 0, top: 0, right: 0, bottom: 0 },
  //   card2: { left: 0, top: 0, right: 0, bottom: 0 },
  // });

  // const [activeCard, setActiveCard] = useState(null); // Track the active card

  // useEffect(() => {
  //   const updateBounds = () => {
  //     const card1Width = 300;
  //     const card1Height = 200;
  //     const card2Width = 250;
  //     const card2Height = 150;

  //     setBounds({
  //       card1: {
  //         left: 0,
  //         top: 0,
  //         right: window.innerWidth - card1Width,
  //         bottom: window.innerHeight - card1Height,
  //       },
  //       card2: {
  //         left: 0,
  //         top: 0,
  //         right: window.innerWidth - card2Width,
  //         bottom: window.innerHeight - card2Height,
  //       },
  //     });
  //   };

  //   updateBounds();
  //   window.addEventListener("resize", updateBounds);

  //   return () => {
  //     window.removeEventListener("resize", updateBounds);
  //   };
  // }, []);

  // // Function to handle dragging start and set the active card
  // const handleDragStart = (card) => {
  //   setActiveCard(card);
  // };

  // return (
  //   <div
  //     style={{
  //       width: "100vw",
  //       height: "100vh",
  //       position: "relative",
  //       overflow: "hidden",
  //     }}
  //   >
  //     <DraggableCard
  //       bounds={bounds.card1}
  //       zIndex={activeCard === "card1" ? 2 : 1} // Set zIndex based on active card
  //       onStart={() => handleDragStart("card1")}
  //     />
  //     <SecondDraggableCard
  //       bounds={bounds.card2}
  //       zIndex={activeCard === "card2" ? 2 : 1} // Set zIndex based on active card
  //       onStart={() => handleDragStart("card2")}
  //     />
  //   </div>
  // );
}

export default App;
