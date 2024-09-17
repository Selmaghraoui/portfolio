import { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "SSQH",
      image: "ssqh.png",
      tags: ["Angular", "Muesli"],
      url: "https://rct.squarehabitat.fr/",
    },
    {
      id: 2,
      title: "System Ticket Management",
      image: "tickets.png",
      tags: ["Angular", "Tailwind", "Spring Boot"],
      url: "https://github.com/Selmaghraoui/helpdesk-front",
    },
    {
      id: 3,
      title: "Portfolio Website",
      image: "portfolio.png",
      tags: ["React Js", "Tailwind CSS"],
      url: "https://soufiane-el-maghraoui.surge.sh",
    },
    {
      id: 4,
      title: "Weather Website",
      image: "",
      tags: ["React Js", "Node Js"],
      // url: "",
    },
    {
      id: 5,
      title: "Intranet Website",
      image: "intranetappangular.png",
      tags: ["Angular", "Bootstrap"],
      url: "https://github.com/Selmaghraoui/GLINTRANET-FE",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="relative overflow-hidden rounded-2xl shadow-md border cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => setHoveredId(project.id)}
          onHoverEnd={() => setHoveredId(null)}
        >
          <motion.img
            src={`${process.env.PUBLIC_URL}/assets/${project.image}`}
            className="w-full h-64 object-cover transition-transform duration-300 ease-in-out"
            animate={{
              filter: hoveredId === project.id ? "blur(4px)" : "blur(0px)",
            }}
          />

          <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-black via-black/50 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
            <h3 className="text-lg font-bold text-white">{project.title}</h3>
          </div>

          <motion.div
            className="absolute top-0 left-0 right-0 p-4 flex justify-start gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: hoveredId === project.id ? 1 : 0,
              y: hoveredId === project.id ? 0 : -20,
            }}
            transition={{ duration: 0.3 }}
          >
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-semibold text-gray-900 bg-gray-600 text-white bg-opacity-80 rounded-full"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-opacity-75 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              className="text-base px-4 py-2 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              View Project
            </motion.a>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
