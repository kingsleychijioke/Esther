import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import "./pageTransition.css";

const titles = {
  "/": "WHERE OUR STORY BEGINS",
  "/hero": "TODAY, THE WORLD CELEBRATES YOU",
  "/memories": "THE MOMENTS THAT BECAME MEMORIES",
  "/letter": "EVERYTHING I COULDN'T FIT INTO WORDS",
  "/surprise": "A LITTLE SOMETHING FROM MY HEART",
  "/wish": "SOME WISHES DESERVE TO COME TRUE",
  "/final": "THE NEXT CHAPTER IS YOURS TO WRITE",
};

export default function PageTransition() {
  const location = useLocation();

  const title = titles[location.pathname] || "SOMETHING BEAUTIFUL";

  return (
    <motion.div
      className="page-transition"
      key={location.pathname}
      initial={{
        clipPath: "inset(0 0 0 0)",
      }}
      animate={{
        clipPath: "inset(0 0 100% 0)",
      }}
      transition={{
        duration: 4.2,
        delay: 2.6,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      {/* BACKGROUND */}

      <div className="transition-bg" />

      {/* CENTER LIGHT */}

      <motion.div
        className="transition-light"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      />

      {/* TEXT */}

      <div className="transition-content">
        <motion.div
          className="transition-small"
          initial={{
            opacity: 0,
            y: 20,
            letterSpacing: "0.7em",
          }}
          animate={{
            opacity: 1,
            y: 0,
            letterSpacing: "0.35em",
          }}
          transition={{
            duration: 0.8,
            delay: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
        ></motion.div>

        <motion.h2
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.9,
            filter: "blur(15px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            delay: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {title}
        </motion.h2>

        {/* little hint that tells user to wait */}

        <motion.div
          className="transition-wait"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.5, 0.5],
          }}
          transition={{
            duration: 1,
            delay: 1.4,
          }}
        >
          ✦
        </motion.div>
      </div>

      {/* FLASH */}

      <motion.div
        className="transition-flash"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 5,
          opacity: [0, 0.9, 0],
        }}
        transition={{
          duration: 1,
          delay: 2.5,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
