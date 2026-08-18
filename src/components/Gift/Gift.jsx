import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "./gift.css";

const hearts = Array.from({ length: 24 }, (_, i) => i);

export default function Gift() {
  const navigate = useNavigate();

  const [opened, setOpened] = useState(false);

  const openGift = () => {
    setOpened(true);
  };

  return (
    <main className={`gift-page ${opened ? "gift-is-open" : ""}`}>
      {/* ambient glow */}

      <div className="gift-ambient" />

      {/* particles */}

      <div className="gift-particles">
        {hearts.map((heart) => (
          <motion.span
            key={heart}
            initial={{
              opacity: 0,
              x: 0,
              y: 0,
              scale: 0,
            }}
            animate={
              opened
                ? {
                    opacity: [0, 1, 0],
                    x: (Math.random() - 0.5) * 700,
                    y: -150 - Math.random() * 500,
                    scale: 0.5 + Math.random() * 1.4,
                    rotate: (Math.random() - 0.5) * 100,
                  }
                : {}
            }
            transition={{
              duration: 2.2 + Math.random() * 1.5,
              delay: Math.random() * 0.35,
              ease: "easeOut",
            }}
          >
            {heart % 3 === 0 ? "✦" : "♥"}
          </motion.span>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.section
            className="gift-intro"
            key="closed"
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <p className="section-eyebrow">A LITTLE SURPRISE</p>

            <h1>
              I kept something
              <br />
              for you.
            </h1>

            <p className="gift-description">
              Not everything beautiful needs an explanation. Sometimes you just
              have to open it.
            </p>

            {/* 3D GIFT */}

            <motion.button
              className="gift-object"
              onClick={openGift}
              whileHover={{
                scale: 1.04,
                rotateY: 5,
              }}
              whileTap={{
                scale: 0.96,
              }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                y: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <div className="gift-shadow" />

              <div className="gift-box">
                <div className="gift-lid">
                  <div className="lid-ribbon" />

                  <div className="bow">
                    <span />
                    <span />
                  </div>
                </div>

                <div className="gift-body">
                  <div className="gift-ribbon-horizontal" />

                  <div className="gift-ribbon-vertical" />
                </div>
              </div>
            </motion.button>

            <motion.p
              className="open-hint"
              animate={{
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              tap the gift
            </motion.p>
          </motion.section>
        ) : (
          <motion.section
            className="gift-reveal"
            key="opened"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
          >
            {/* exploding glow */}

            <motion.div
              className="gift-explosion"
              initial={{
                scale: 0,
                opacity: 1,
              }}
              animate={{
                scale: 4,
                opacity: 0,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
            />

            {/* opened box */}

            <motion.div
              className="opened-gift"
              initial={{
                scale: 0.5,
                y: 50,
              }}
              animate={{
                scale: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <motion.div
                className="opened-lid"
                initial={{
                  y: 0,
                  rotateZ: 0,
                  rotateX: 0,
                }}
                animate={{
                  y: -180,
                  rotateZ: -12,
                  rotateX: 25,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />

              <div className="opened-box-body">
                <motion.div
                  className="heart-from-box"
                  initial={{
                    opacity: 0,
                    y: 80,
                    scale: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 1],
                    y: -80,
                    scale: [0, 1.2, 1],
                  }}
                  transition={{
                    delay: 0.6,
                    duration: 1,
                  }}
                >
                  ♥
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="reveal-copy"
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.15,
                duration: 1,
              }}
            >
              <span className="reveal-small">FOR YOU</span>

              <h2>
                You are one of
                <br />
                my favorite reasons
                <br />
                to smile.
              </h2>

              <p>
                And if this little surprise made you smile even for a second,
                then it did exactly what I wanted it to do.
              </p>

              <motion.button
                className="gift-continue"
                onClick={() => navigate("/Cake")}
                whileHover={{
                  scale: 1.06,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                There's one more thing
                <span>→</span>
              </motion.button>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
