import { useNavigate } from "react-router-dom";
import "./sceneNavigation.css";

export default function SceneNavigation({
  previous,
  next,
  nextLabel = "Continue",
  previousLabel = "Back",
}) {
  const navigate = useNavigate();

  return (
    <nav className="scene-navigation">
      {previous ? (
        <button
          className="scene-nav-back"
          onClick={() => navigate(previous)}
        >
          <span>←</span>
          {previousLabel}
        </button>
      ) : (
        <span />
      )}

      {next && (
        <button
          className="scene-nav-next"
          onClick={() => navigate(next)}
        >
          {nextLabel}
          <span>→</span>
        </button>
      )}
    </nav>
  );
}