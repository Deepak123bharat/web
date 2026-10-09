import React, { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { projectFilters, projects } from "../../constants";
import "./Work.scss";

const Work = () => {
  const [filterWork, setFilterWork] = useState(projects);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      setFilterWork(
        item === "All"
          ? projects
          : projects.filter((work) => work.tags.includes(item))
      );
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My <span>Projects</span>
      </h2>

      <div className="app__work-filter">
        {projectFilters.map((item) => (
          <div
            key={item}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work) => {
          const TileIcon = work.icon;

          return (
            <div className="app__work-item app__flex" key={work.title}>
              <div className="app__work-img app__flex">
                {work.image ? (
                  <img src={work.image} alt={work.title} />
                ) : (
                  <div
                    className="app__work-tile app__flex"
                    style={{
                      background: `linear-gradient(135deg, ${work.accent}, #313bac)`,
                    }}
                  >
                    <TileIcon aria-hidden="true" />
                  </div>
                )}

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  {work.projectLink && (
                    <a
                      href={work.projectLink}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${work.title}`}
                    >
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>
                  )}
                  {work.codeLink && (
                    <a
                      href={work.codeLink}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Source code for ${work.title}`}
                    >
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  )}
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work.description}
                </p>

                <div className="app__work-links">
                  {work.projectLink && (
                    <a href={work.projectLink} target="_blank" rel="noreferrer">
                      <AiFillEye /> Visit
                    </a>
                  )}
                  {work.codeLink && (
                    <a href={work.codeLink} target="_blank" rel="noreferrer">
                      <AiFillGithub /> Code
                    </a>
                  )}
                </div>

                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
