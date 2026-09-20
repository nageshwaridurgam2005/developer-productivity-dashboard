import { use, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  MoreHorizontal,
} from "lucide-react";

function ProjectCard({ project }) {
    const [showDetails, setShowDetails] = 
      useState(false);
    const [showMenu, setShowMenu] = 
      useState(false);
  return (
    <>
    <div className="project-card" onClick={() => setShowDetails(true)}>
     <div className="project-card-top">
  <div className={`project-icon ${project.color}`}>
    {project.icon}
  </div>

  <button
    className="more-btn"
    onClick={(e) => {
      e.stopPropagation();
      setShowMenu((current) => !current);
    }}
  >
    <MoreHorizontal size={19} />
  </button>

  {showMenu && (
    <div className="project-menu">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setShowMenu(false);
          setShowDetails(true);
        }}
      >
        View Details
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          alert(`Opening ${project.name}`);
          setShowMenu(false);
        }}
      >
        Open Project
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          alert(`Delete ${project.name}`);
          setShowMenu(false);
        }}
      >
        Delete Project
      </button>
    </div>
  )}
</div>

      <div className="project-info">
        <div className="project-title-row">
          <h3>{project.name}</h3>

          <ArrowUpRight size={17} />
        </div>

        <p>{project.description}</p>
      </div>

      <div className="project-meta">
        <span>{project.category}</span>

        <span className="project-status">
          {project.status}
        </span>
      </div>

      <div className="progress-section">
        <div className="progress-label">
          <span>Progress</span>
          <strong>{project.progress}%</strong>
        </div>

        <div className="progress-bar">
          <div
            className={`progress-fill ${project.color}`}
            style={{
              width: `${project.progress}%`,
            }}
          />
        </div>
      </div>

      <div className="project-footer">
        <span>
          <CheckCircle2 size={16} />
          {project.completed}/{project.tasks} tasks
        </span>

        <div className="mini-avatars">
          <span>DN</span>
          <span>RK</span>
          <span>+2</span>
        </div>
      </div>
    </div>
  {showDetails && (
  <div
    className="project-details-overlay"
    onClick={() => setShowDetails(false)}
  >
    <div
      className="project-details-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="project-details-header">
        <div>
          <span className={`project-icon ${project.color}`}>
            {project.icon}
          </span>

          <h2>{project.name}</h2>
        </div>

        <button
          onClick={() => setShowDetails(false)}
        >
          ×
        </button>
      </div>

      <p>{project.description}</p>

      <div className="project-details-info">
        <div>
          <span>Category</span>
          <strong>{project.category}</strong>
        </div>

        <div>
          <span>Status</span>
          <strong>{project.status}</strong>
        </div>

        <div>
          <span>Progress</span>
          <strong>{project.progress}%</strong>
        </div>

        <div>
          <span>Tasks</span>
          <strong>
            {project.completed}/{project.tasks}
          </strong>
        </div>
      </div>
    </div>
  </div>
  )}
  </>
);
}


export default ProjectCard;