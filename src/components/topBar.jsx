import {
  Bell,
  Menu,
  Search,
  Plus,
  ChevronDown,
} from "lucide-react";

function Topbar({
  search,
  setSearch,
  setMobileOpen,
  notificationCount,
  onAddActivity,
  showNotifications,
  setShowNotifications,
}) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button
          className="mobile-menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={22} />
        </button>

        <div className="page-heading">
          <span>Workspace</span>
          <h1>Developer Dashboard</h1>
        </div>
      </div>

      <div className="topbar-actions">
        <div className="search-box">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search projects, tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <span className="search-shortcut">⌘ K</span>
        </div>

        <button
          className="add-button"
          onClick={onAddActivity}
        >
          <Plus size={18} />
          <span>Log Activity</span>
        </button>

        <div className="notification-wrapper">
  <button
    className="notification-btn"
    onClick={() =>
      setShowNotifications((current) => !current)
    }
  >
    <Bell size={20} />

    {notificationCount > 0 && (
      <span className="notification-dot">
        {notificationCount}
      </span>
    )}
  </button>

  {showNotifications && (
    <div className="notification-panel">
      <div className="notification-header">
        <strong>Notifications</strong>

        <span>{notificationCount} new</span>
      </div>

      <div className="notification-item">
        <div className="notification-icon">✓</div>

        <div>
          <strong>Development activity</strong>
          <p>Keep up your productivity!</p>
          <small>Just now</small>
        </div>
      </div>

      <div className="notification-item">
        <div className="notification-icon">!</div>

        <div>
          <strong>Project deadline</strong>
          <p>RAG Assistant documentation</p>
          <small>Sep 24</small>
        </div>
      </div>
    </div>
  )}
</div>

        <div className="top-profile">
          <div className="avatar">DN</div>

          <div className="profile-text">
            <strong>Nageshwari</strong>
            <span>Developer</span>
          </div>

          <ChevronDown size={16} />
        </div>
      </div>
    </header>
  );
}

export default Topbar;