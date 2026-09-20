import {
  GitCommit,
  CheckCircle2,
  FolderKanban,
  MessageSquare,
} from "lucide-react";

function ActivityItem({ activity }) {
  const icons = {
    commit: GitCommit,
    task: CheckCircle2,
    project: FolderKanban,
    comment: MessageSquare,
  };

  const Icon = icons[activity.type] || GitCommit;

  return (
    <div className="activity-item">
      <div className={`activity-icon ${activity.type}`}>
        <Icon size={17} />
      </div>

      <div className="activity-content">
        <strong>{activity.title}</strong>

        <span>{activity.project}</span>
      </div>

      <time>{activity.time}</time>
    </div>
  );
}

export default ActivityItem;