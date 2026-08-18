import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "./cake.css";

const candles = [
  { id: 1, left: "18%", delay: 0 },
  { id: 2, left: "34%", delay: 0.15 },
  { id: 3, left: "50%", delay: 0.3 },
  { id: 4, left: "66%", delay: 0.45 },
  { id: 5, left: "82%", delay: 0.6 },
];

export default function Wish() {
  const navigate = useNavigate();

  const [blown, setBlown] = useState([]);
  const [wished, setWished] = useState(false);

  const extinguish = (id) => {
    if (wished) return;

    setBlown((current) => (current.includes(id) ? current : [...current, id]));
  };

  const makeWish = () => {
    if (blown.length < candles.length) return;

    setWished(true);
  };

  return (
    <main className={`wish-page ${wished ? "wish-complete" : ""}`}>
      {/* BACKGROUND */}

      <div className="wish-stars">
        {Array.from({ length: 55 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="wish-glow" />

      <AnimatePresence mode="wait">
        {!wished ? (
          <motion.section
            className="wish-content"
            key="before"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <span className="section-eyebrow">ONE LAST THING</span>

            <h1>
              Make a wish,
              <br />
              Esther.
            </h1>

            <p className="wish-intro">
              Close your eyes for a moment. Think of something your heart really
              wants.
            </p>

            {/* CAKE */}

            <div className="cake-scene">
              <div className="cake-aura" />

              <div className="cake">
                {/* TOP */}

                <div className="cake-top">
                  <div className="cake-cream cream-one" />
                  <div className="cake-cream cream-two" />
                  <div className="cake-cream cream-three" />
                </div>

                {/* BODY */}

                <div className="cake-body">
                  <div className="cake-drip drip-one" />
                  <div className="cake-drip drip-two" />
                  <div className="cake-drip drip-three" />
                  <div className="cake-drip drip-four" />

                  <div className="cake-ribbon" />
                </div>

                {/* CANDLES */}
                <div className="candles">
                  {candles.map((candle) => {
                    const isBlown = blown.includes(candle.id);

                    return (
                      <motion.button
                        key={candle.id}
                        type="button"
                        className={`candle ${isBlown ? "candle-blown" : ""}`}
                        style={{
                          left: candle.left,
                        }}
                        onClick={() => extinguish(candle.id)}
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: candle.delay,
                          duration: 0.5,
                        }}
                        aria-label={`Candle ${candle.id}`}
                      >
                        {/* FLAME */}

                        {!isBlown && (
                          <motion.div
                            className="flame-wrap"
                            initial={{
                              opacity: 0,
                              scale: 0.5,
                            }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                            }}
                            transition={{
                              delay: candle.delay + 0.2,
                            }}
                          >
                            <motion.div
                              className="flame"
                              animate={{
                                scale: [1, 1.12, 0.94, 1],
                                rotate: [45, 42, 48, 45],
                                y: [0, -3, 1, 0],
                              }}
                              transition={{
                                duration: 0.65,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            />
                          </motion.div>
                        )}

                        {/* SMOKE ONLY AFTER BLOW */}

                        {isBlown && (
                          <motion.div
                            className="smoke"
                            initial={{
                              opacity: 0,
                              scale: 0.4,
                              y: 5,
                              x: 0,
                            }}
                            animate={{
                              opacity: [0, 0.55, 0],
                              scale: [0.4, 1.2, 1.6],
                              y: [5, -20, -55],
                              x: [0, 5, 12],
                            }}
                            transition={{
                              duration: 2,
                              ease: "easeOut",
                            }}
                          >
                            ≋
                          </motion.div>
                        )}

                        {/* CANDLE */}

                        <div className="candle-stick">
                          <i />
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div className="cake-plate" />
            </div>

            {/* INSTRUCTION */}

            <motion.div
              className="wish-instruction"
              animate={{
                opacity: blown.length === candles.length ? 0.45 : [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: blown.length === candles.length ? 0 : Infinity,
              }}
            >
              {blown.length === candles.length
                ? "Now make your wish ✨"
                : "Tap every candle to blow it out"}
            </motion.div>

            <motion.button
              className="wish-button"
              disabled={blown.length !== candles.length}
              onClick={makeWish}
              whileHover={
                blown.length === candles.length ? { scale: 1.06 } : {}
              }
              whileTap={blown.length === candles.length ? { scale: 0.95 } : {}}
            >
              Make my wish
              <span>✦</span>
            </motion.button>
          </motion.section>
        ) : (
          <motion.section
            className="wish-reveal"
            key="after"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* BIG BURST */}

            <motion.div
              className="wish-burst"
              initial={{
                scale: 0,
                opacity: 1,
              }}
              animate={{
                scale: 5,
                opacity: 0,
              }}
              transition={{
                duration: 2,
              }}
            />

            {/* PARTICLES */}

            <div className="wish-confetti">
              {Array.from({ length: 50 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 0,
                  }}
                  animate={{
                    x: (Math.random() - 0.5) * 1000,
                    y: (Math.random() - 0.5) * 900,
                    opacity: [0, 1, 0],
                    rotate: Math.random() * 720,
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    delay: Math.random() * 0.5,
                  }}
                >
                  {i % 3 === 0 ? "♥" : i % 3 === 1 ? "✦" : "•"}
                </motion.span>
              ))}
            </div>

            <span className="reveal-eyebrow">YOUR WISH HAS BEEN MADE</span>

            <h2>
              Happy Birthday,
              <br />
              Esther.
            </h2>

            <p className="wish-message">
              I hope this new chapter brings you the kind of happiness that
              doesn't need permission to stay.
              <br />
              <br />
              I hope you keep finding reasons to laugh, people who make your
              heart feel safe, and little moments that remind you just how
              beautiful life can be.
              <br />
              <br />
              And whatever you wished for tonight...
              <br />
              <strong>
                I hope life surprises you with something even better.
              </strong>
            </p>

            <motion.button
              className="final-button"
              onClick={() => navigate("/final")}
              whileHover={{
                scale: 1.06,
              }}
              whileTap={{
                scale: 0.96,
              }}
            >
              One final surprise
              <span>→</span>
            </motion.button>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
