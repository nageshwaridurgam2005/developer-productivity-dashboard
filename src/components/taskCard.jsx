import {
  CheckCircle2,
  Circle,
  Clock3,
} from "lucide-react";

function TaskCard({ task, onComplete }) {
  const priorityClass = task.priority.toLowerCase();

  return (
    <div className="task-item">
      <button
        className={`task-check ${
          task.status === "Completed" ? "completed" : ""
        }`}
        onClick={() => onComplete(task.id)}
      >
        {task.status === "Completed" ? (
          <CheckCircle2 size={20} />
        ) : (
          <Circle size={20} />
        )}
      </button>

      <div className="task-details">
        <h4
          className={
            task.status === "Completed"
              ? "task-completed"
              : ""
          }
        >
          {task.title}
        </h4>

        <span>{task.project}</span>
      </div>

      <div className={`priority ${priorityClass}`}>
        {task.priority}
      </div>

      <div className="task-due">
        <Clock3 size={15} />
        {task.due}
      </div>
    </div>
  );
}

export default TaskCard;