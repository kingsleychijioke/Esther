import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { birthdayContent } from "../../data/birthdayContent";
import "./intro.css";

export default function Intro() {
  const navigate = useNavigate();

  const { name, intro } = birthdayContent;

  return (
    <section className="intro-page">
      <div className="intro-content">
        <motion.p
          className="section-eyebrow"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          {intro.eyebrow}
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.7,
            rotateX: 60,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateX: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {name}
        </motion.h1>

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
            duration: 1,
          }}
        >
          {intro.title}
        </motion.h2>

        <motion.p
          className="intro-message"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.8,
            duration: 1,
          }}
        >
          {intro.message}
        </motion.p>

        <motion.button
          className="enter-button"
          onClick={() => navigate("/hero")}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2.4,
          }}
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          Enter the story
          <span>✦</span>
        </motion.button>
      </div>
    </section>
  );
}
