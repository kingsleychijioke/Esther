import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function PageNavigation({
  previous,
  next,
  number,
  label = "CONTINUE",
}) {
  const navigate = useNavigate();

  return (
    <div className="page-navigation">

      {previous && (
        <motion.button
          className="page-back"
          onClick={() => navigate(previous)}
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back
        </motion.button>
      )}

      <div className="page-progress">
        <span>{number}</span>
        <div />
        <span>07</span>
      </div>

      {next && (
        <motion.button
          className="page-next"
          onClick={() => navigate(next)}
          whileHover={{ y: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          {label}
          <span>↓</span>
        </motion.button>
      )}

    </div>
  );
}