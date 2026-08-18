import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  useBirthdayExperience,
} from "../context/BirthdayExperience";

export default function SceneTransition() {
  const {
    giftOpened,
    celebration,
  } = useBirthdayExperience();

  return (
    <AnimatePresence>

      {giftOpened && !celebration && (
        <motion.div
          className="cinematic-transition"
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 2, 4],
          }}
          transition={{
            duration: 4,
            times: [0, 0.3, 0.75, 1],
            ease: "easeInOut",
          }}
        >
          <div className="transition-heart">
            ♥
          </div>
        </motion.div>
      )}

    </AnimatePresence>
  );
}