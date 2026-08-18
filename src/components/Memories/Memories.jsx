import { useMemo, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import video1 from "/video1.mp4";
import video2 from "/video2.mp4";
import video3 from "/video3.mp4";
import video4 from "/video4.mp4";
import video5 from "/video5.mp4";
import video6 from "/video6.mp4";
import video7 from "/video7.mp4";
import video8 from "/video8.mp4";
import video9 from "/video9.mp4";

import "./memories.css";

const memories = [
  {
    id: 1,
    type: "video",
    src: video1,
    date: "THE BEGINNING",
    title: "That first little moment",
    text: "Some moments don't look important when they happen. Then somehow, they become the ones you never forget.",
    rotate: -5,
  },
  {
    id: 2,
    type: "video",
    src: video2,
    date: "A LITTLE MEMORY",
    title: "That smile",
    text: "If happiness had a photograph, I think it would look a little like this.",
    rotate: 4,
  },
  {
    id: 3,
    type: "video",
    src: video3,
    date: "ONE OF MY FAVORITES",
    title: "A moment worth keeping",
    text: "There are ordinary days that quietly become beautiful memories.",
    rotate: -3,
  },
  {
    id: 4,
    type: "video",
    src: video4,
    date: "US",
    title: "The kind of memory that stays",
    text: "Years from now, I hope this is one of the little things we still remember and smile about.",
    rotate: 6,
  },
  {
    id: 5,
    type: "video",
    src: video5,
    date: "ANOTHER CHAPTER",
    title: "Still smiling",
    text: "Maybe the best part isn't knowing what comes next. Maybe it's having beautiful memories behind us.",
    rotate: -4,
  },

  {
    id: 6,
    src: video6,
    date: "SOMEWHERE IN BETWEEN",
    title: "One more for the story",
    text: "Some memories don't need a reason. They just make you happy every time you see them.",
    rotate: 5,
  },
  {
    id: 7,
    src: video7,
    date: "A GOOD DAY",
    title: "This little moment",
    text: "Maybe we didn't know it then, but this was a moment worth keeping forever.",
    rotate: -8,
  },
  {
    id: 8,
    src: video8,
    date: "STILL HERE",
    title: "More memories to make",
    text: "The beautiful thing is that this story never really stopped. It just kept giving us more moments.",
    rotate: 4,
  },
  {
    id: 9,
    src: video9,
    date: "ONE FOR THE FUTURE",
    title: "And there is still more",
    text: "If these are the memories we've made so far, imagine all the beautiful ones still waiting for us.",
    rotate: -5,
  },
];

function MemoryCard({ memory, index }) {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 120,
    damping: 18,
  });

  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 120,
    damping: 18,
  });

  const imageX = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);
  const imageY = useTransform(mouseY, [-0.5, 0.5], [-12, 12]);

  const handlePointerMove = (event) => {
    const rect = cardRef.current?.getBoundingClientRect();

    if (!rect) return;

    const x = (event.clientX - rect.left) / rect.width - 0.5;

    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const resetPointer = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      className={`memory-card memory-card-${index + 1}`}
      initial={{
        opacity: 0,
        y: 100,
        rotate: memory.rotate,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 1.1,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        rotateX,
        rotateY,
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <motion.div
        className="memory-image-wrapper"
        style={{
          x: imageX,
          y: imageY,
        }}
      >
        <video
          src={memory.src}
          autoPlay
          muted
          loop
          playsInline
          preload={index < 3 ? "metadata" : "none"}
        />
      </motion.div>

      <div className="memory-shine" />

      <div className="memory-caption">
        <span>{memory.date}</span>

        <h3>{memory.title}</h3>

        <p>{memory.text}</p>
      </div>
    </motion.article>
  );
}

export default function Memories() {
  const navigate = useNavigate();

  const stars = useMemo(
    () =>
      Array.from({ length: 45 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${3 + Math.random() * 4}s`,
      })),
    [],
  );

  return (
    <main className="memories-page">
      {/* BACKGROUND STARS */}

      <div className="memory-stars" aria-hidden="true">
        {stars.map((star) => (
          <span
            key={star.id}
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      {/* HEADER */}

      <header className="memories-header">
        <motion.div
          className="section-eyebrow"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          LITTLE PIECES OF TIME
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Our Memories
        </motion.h1>

        <motion.p
          className="memories-intro"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
          }}
        >
          A few little moments that deserve to live somewhere beyond a camera
          roll.
        </motion.p>
      </header>

      {/* MEMORY FIELD */}

      <section className="memory-field">
        <div className="memory-orbit orbit-one" />
        <div className="memory-orbit orbit-two" />

        {memories.map((memory, index) => (
          <MemoryCard key={memory.id} memory={memory} index={index} />
        ))}
      </section>

      {/* EMOTIONAL TEXT */}
      <div className="Textadd">
        <motion.div
          className="memory-ending"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
        >
          <span>AND THE BEAUTIFUL PART?</span>

          <h2>
            We're still making
            <br />
            memories.
          </h2>

          <p>
            These aren't just pictures. They're tiny pieces of a story — and
            somehow, the story keeps getting better.
          </p>

          <motion.button
            className="memories-continue"
            onClick={() => navigate("/letter")}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            Read something from my heart
            <span>→</span>
          </motion.button>
        </motion.div>
      </div>
    </main>
  );
}
