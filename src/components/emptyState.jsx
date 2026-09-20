import { SearchX } from "lucide-react";

function EmptyState({ title, description }) {
  return (
    <div className="empty-state">
      <div className="empty-icon">
        <SearchX size={28} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}

export default EmptyState;