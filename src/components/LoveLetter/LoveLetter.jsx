import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { birthdayContent } from "../../data/birthdayContent";

// LoveLetter.jsx
import "./letter.css";

export default function LoveLetter() {
  const navigate = useNavigate();

  const { letter } = birthdayContent;

  return (
    <section className="letter-page">
      <motion.div
        className="letter-container"
        initial={{
          opacity: 0,
          y: 80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
      >
        <p className="section-eyebrow">{letter.eyebrow}</p>
        <h1>{letter.title}</h1>
        <div className="letter-paper">
          {letter.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4 + index * 0.3,
                duration: 0.8,
              }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
        <motion.button
          className="continue-button"
          onClick={() => navigate("/surprise")}
          whileHover={{
            scale: 1.06,
          }}
        >
          There's something waiting...
          <span>→</span>
        </motion.button>
      </motion.div>
    </section>
  );
}
