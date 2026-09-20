import { useState } from "react";
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  BarChart3,
  Users,
  Settings,
  LogOut,
  X,
} from "lucide-react";

function Sidebar({ activePage, setActivePage, mobileOpen, setMobileOpen }) {
  const [showLogout, setShowLogout] = useState(false);
  const menuItems = [
    {
      name: "Overview",
      icon: LayoutDashboard,
    },
    {
      name: "Projects",
      icon: FolderKanban,
    },
    {
      name: "Tasks",
      icon: CheckSquare,
    },
    {
      name: "Analytics",
      icon: BarChart3,
    },
    {
      name: "Team",
      icon: Users,
    },
  ];

  return (
    <>
      {mobileOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <div className="brand">
            <div className="brand-icon">D</div>

            <div>
              <h2>DevTrack</h2>
              <span>Productivity OS</span>
            </div>
          </div>

          <button
            className="mobile-close"
            onClick={() => setMobileOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="workspace">
          <div className="workspace-avatar">N</div>

          <div>
            <strong>My Workspace</strong>
            <span>Developer Team</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <p className="nav-label">MAIN MENU</p>

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                className={`nav-item ${
                  activePage === item.name ? "active" : ""
                }`}
                onClick={() => {
                  setActivePage(item.name);
                  setMobileOpen(false);
                }}
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </button>
            );
          })}

          <p className="nav-label settings-label">WORKSPACE</p>

          <button
            className="nav-item"
            onClick={() => setActivePage("Settings")}
          >
            <Settings size={19} />
            <span>Settings</span>
          </button>
        </nav>

        <div className="sidebar-bottom">
          <div className="upgrade-card">
            <div className="upgrade-icon">⚡</div>

            <strong>Boost your productivity</strong>

            <p>
              Keep your development workflow organized and focused.
            </p>

            <button>View Insights</button>
          </div>

          <button className="logout-btn"
          onClick={() => setShowLogout(true)}>
            <LogOut size={18} />
            Logout
          </button>
        </div>
           </aside>

      {showLogout && (
        <div
          className="logout-overlay"
          onClick={() => setShowLogout(false)}
        >
          <div
            className="logout-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="logout-icon">
              <LogOut size={22} />
            </div>

            <h3>Logout?</h3>

            <p>
              Are you sure you want to logout from
              your workspace?
            </p>

            <div className="logout-actions">
              <button
                className="logout-cancel"
                onClick={() => setShowLogout(false)}
              >
                Cancel
              </button>

              <button
                className="logout-confirm"
                onClick={() => {
                  setShowLogout(false);
                  alert("You have been logged out.");
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Sidebar;