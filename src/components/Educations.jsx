import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, GraduationCap, Briefcase, School } from "lucide-react";

const educationData = [
  {
    date: "2021 - 2022",
    schoolName: "Higher Normal School of Technical Education - Mohammedia",
    option: "Computer Engineering, Big Data, and Cloud Computing.",
    degree: "university master.",
  },
  {
    date: "2021 - 2022",
    schoolName: "Higher School of Technology - Casablanca",
    option: "Software Engineering and Advanced Administration of Computer Systems and Networks.",
    degree: "Professional Bachelor’s Degree.",
  },
  {
    date: "2019 - 2021",
    schoolName: "Higher School of Technology - Casablanca",
    option: "Computer Engineering.",
    degree: "University of Technology Diploma.",
  },
  {
    date: "2018 - 2019",
    schoolName: "Lalla Selma - Er-rissani",
    option: "Mathematical Sciences - A -",
    degree: "Baccalaureate.",
  },
];

const Educations = () => {
  return (
    <div className="font-sans">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {educationData.map((edu, index) => (
          <EducationCard key={index} education={edu} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Educations;

function EducationCard({ education, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-lg shadow border overflow-hidden cursor-pointer relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-4 relative z-10">
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="flex flex-col h-full"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.div
            className="text-sm text-gray-600 flex items-center mb-2"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <Calendar className="mr-1" size={14} />
            {education.date}
          </motion.div>
          <motion.h3
            className="text-lg font-semibold text-gray-800 mb-2"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            {education.schoolName}
          </motion.h3>
          <motion.p
            className="text-sm text-gray-600 flex items-center mb-2"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <Briefcase className="mr-1" size={14} />
            {education.option}
          </motion.p>
          <motion.div
            className="mt-auto"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {education.degree}
            </span>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 opacity-0"
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
