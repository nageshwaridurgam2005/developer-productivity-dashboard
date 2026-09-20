function StatCard({
  icon,
  title,
  value,
  change,
  description,
  type,
}) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <div className={`stat-icon ${type}`}>
          {icon}
        </div>

        <span className="stat-change">
          {change}
        </span>
      </div>

      <div className="stat-content">
        <span>{title}</span>

        <h2>{value}</h2>

        <p>{description}</p>
      </div>
    </div>
  );
}

export default StatCard;