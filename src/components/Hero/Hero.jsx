import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { birthdayContent } from "../../data/birthdayContent";

// Hero.jsx
import "./hero.css";

export default function Hero() {
  const navigate = useNavigate();

  const { name, hero } = birthdayContent;

  return (
    <section className="hero-page">
      <div className="hero-content">
        <motion.p
          className="section-eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.5,
            rotateX: 70,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateX: 0,
          }}
          transition={{
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {hero.title}
        </motion.h1>

        <motion.div
          className="hero-name"
          initial={{
            opacity: 0,
            letterSpacing: "0px",
          }}
          animate={{
            opacity: 1,
            letterSpacing: "12px",
          }}
          transition={{
            delay: 1,
            duration: 1.5,
          }}
        >
          {name}
        </motion.div>

        <motion.p
          className="hero-message"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
        >
          {hero.message}
        </motion.p>

        <motion.button
          className="continue-button"
          onClick={() => navigate("/memories")}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2.2,
          }}
          whileHover={{
            scale: 1.06,
          }}
        >
          Discover the memories
          <span>→</span>
        </motion.button>
      </div>
    </section>
  );
}
