import { motion } from "framer-motion";
import { birthdayContent } from "../../data/birthdayContent";
import { useNavigate } from "react-router-dom";

import "./final.css";

const memories = [
  "/video1.mp4",
  "/video2.mp4",
  "/video3.mp4",
  "/video4.mp4",
  "/video5.mp4",
];

const particles = Array.from({ length: 45 }, (_, i) => i);

export default function FinalScene() {
  const { name } = birthdayContent;
  const navigate = useNavigate();

  return (
    <main className="final-page">
      <div className="final-noise" />
      <div className="final-vignette" />

      {/* STARS */}
      <div className="final-stars">
        {particles.map((particle) => (
          <motion.span
            key={particle}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2 + Math.random() * 4,
              delay: Math.random() * 4,
              repeat: Infinity,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* FLOATING MEMORIES */}
      <div className="final-memories">
        {memories.map((video, index) => (
          <motion.div
            key={video}
            className={`final-memory memory-${index + 1}`}
            initial={{
              opacity: 0,
              scale: 0.5,
              y: 100,
            }}
            animate={{
              opacity: [0, 0.8, 0.8],
              y: [100, -20, -100],
              rotate: index % 2 === 0 ? -8 : 8,
            }}
            transition={{
              duration: 8,
              delay: index * 1.1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={`Memory ${index + 1}`}
            />

            <div className="memory-shine" />
          </motion.div>
        ))}
      </div>

      {/* CENTER */}
      <section className="final-content">
        <motion.div
          className="final-symbol"
          initial={{
            scale: 0,
            rotate: -180,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            rotate: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          ✦
        </motion.div>

        <motion.span
          className="final-eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          AND THAT'S NOT THE END
        </motion.span>

        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
            filter: "blur(20px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 1.1,
            duration: 1.4,
          }}
        >
          Happy Birthday,
          <br />
          <span>{name}.</span>
        </motion.h1>

        <motion.div
          className="final-line"
          initial={{
            width: 0,
          }}
          animate={{
            width: 100,
          }}
          transition={{
            delay: 1.8,
            duration: 1,
          }}
        />

        <motion.p
          className="final-message"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2,
            duration: 1,
          }}
        >
          I could have simply said
          <em> "Happy Birthday," </em>
          and called it a day.
          <br />
          <br />
          But some people deserve more than ordinary words.
          <br />
          <br />
          So this little universe was made just to remind you of one thing:
          <br />
          <strong>you are worth celebrating.</strong>
          <br />
          <br />
          May this next chapter of your life be softer, brighter, louder with
          laughter, and filled with moments you will never want to forget.
        </motion.p>

        <motion.div
          className="final-signature"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 3.1,
          }}
        >
          Made with a little bit of magic
          <span>♥</span>
        </motion.div>
      </section>

      {/* BOTTOM */}
      <motion.div
        className="final-bottom"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 3.5,
        }}
      >
        <span>THE END</span>
        <i />
        <span>OR MAYBE JUST THE BEGINNING</span>
      </motion.div>

      <motion.button
        className="restart-button"
        onClick={() => navigate("/")}
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 3.8,
        }}
        whileHover={{
          scale: 1.06,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <span>↻</span>
        Start the story again
      </motion.button>
    </main>
  );
}    