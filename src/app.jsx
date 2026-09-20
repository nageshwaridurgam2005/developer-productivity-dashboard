import { useEffect, useMemo, useState } from "react";
import "./app.css";

import {
  Activity,
  CheckCircle2,
  Clock3,
  Code2,
  Flame,
  Rocket,
  Target,
} from "lucide-react";

import Sidebar from "./components/sidebar.jsx";
import Topbar from "./components/topBar.jsx";
import StatCard from "./components/statCard.jsx";
import ProjectCard from "./components/projectCard.jsx";
import TaskCard from "./components/taskCard.jsx";
import ActivityItem from "./components/activityItem.jsx";
import ProductivityChart from "./components/productivityChart.jsx";
import ProfileCard from "./components/profileCard.jsx";
import EmptyState from "./components/emptyState.jsx";

import {
  projects,
  tasks as initialTasks,
  activities as initialActivities,
} from "./data/dashboardData";


// ===============================
// PROJECTS PAGE
// ===============================

function ProjectsPage({ projects }) {
  return (
    <div className="dashboard">
      <section className="welcome-section">
        <div>
          <div className="welcome-label">
            <span className="online-dot" />
            Project Workspace
          </div>

          <h2>All Projects</h2>

          <p>
            Manage and track all your development projects.
          </p>
        </div>
      </section>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}
function TasksPage({ tasks, onComplete }) {
  return (
    <div className="dashboard">

      <section className="welcome-section">
        <div>
          <div className="welcome-label">
            <span className="online-dot" />
            Task Management
          </div>

          <h2>All Tasks</h2>

          <p>
            Manage your development tasks and track your progress.
          </p>
        </div>
      </section>

      <div className="tasks-section">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">
              TASK MANAGEMENT
            </span>

            <h2>Your Tasks</h2>
          </div>
        </div>

        <div className="task-list">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onComplete={onComplete}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
function AnalyticsPage() {
  return (
    <div className="dashboard">

      <section className="welcome-section">
        <div>
          <div className="welcome-label">
            <span className="online-dot" />
            Productivity Analytics
          </div>

          <h2>Analytics</h2>

          <p>
            Track your development performance and productivity.
          </p>
        </div>
      </section>

      <section className="stats-grid">

        <StatCard
          icon={<Code2 size={21} />}
          title="Coding Hours"
          value="37.7h"
          change="+18.4%"
          description="vs. previous week"
          type="purple"
        />

        <StatCard
          icon={<CheckCircle2 size={21} />}
          title="Tasks Completed"
          value="86"
          change="+12.8%"
          description="this month"
          type="green"
        />

        <StatCard
          icon={<Rocket size={21} />}
          title="Active Projects"
          value="8"
          change="+2"
          description="in development"
          type="blue"
        />

        <StatCard
          icon={<Flame size={21} />}
          title="Productivity"
          value="87%"
          change="+6.2%"
          description="personal best"
          type="orange"
        />

      </section>

      <div className="analytics-chart-section">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">
              PERFORMANCE
            </span>

            <h2>Weekly Activity</h2>
          </div>
        </div>

        <ProductivityChart />
      </div>

      <div className="analytics-summary">

        <div className="focus-card">
          <div className="focus-icon">
            <Target size={21} />
          </div>

          <div>
            <span>FOCUS SCORE</span>

            <h3>87 / 100</h3>

            <p>
              You're maintaining a strong development rhythm.
            </p>
          </div>
        </div>

        <div className="deadline-card">
          <div className="deadline-icon">
            <Clock3 size={20} />
          </div>

          <div>
            <span>NEXT DEADLINE</span>

            <h3>RAG Assistant</h3>

            <p>
              Documentation · Sep 24
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      initials: "DN",
      name: "D. Nageshwari",
      role: "Frontend Developer",
      project: "Developer Dashboard",
      status: "Online",
    },
    {
      id: 2,
      initials: "RK",
      name: "Rahul Kumar",
      role: "Backend Developer",
      project: "RAG Assistant",
      status: "Online",
    },
    {
      id: 3,
      initials: "AS",
      name: "Ananya Sharma",
      role: "UI/UX Designer",
      project: "Developer Dashboard",
      status: "Away",
    },
    {
      id: 4,
      initials: "VP",
      name: "Vikram Patel",
      role: "Full Stack Developer",
      project: "Homely Hub",
      status: "Offline",
    },
  ];

  return (
    <div className="dashboard">

      <section className="welcome-section">
        <div>
          <div className="welcome-label">
            <span className="online-dot" />
            Workspace Team
          </div>

          <h2>Team Members</h2>

          <p>
            Collaborate with your team and track their development work.
          </p>
        </div>
      </section>

      <div className="team-grid">

        {teamMembers.map((member) => (
          <div className="team-card" key={member.id}>

            <div className="team-card-top">

              <div className="team-avatar">
                {member.initials}
              </div>

              <span
                className={`team-status ${
                  member.status.toLowerCase()
                }`}
              >
                <span className="status-dot" />
                {member.status}
              </span>

            </div>

            <div className="team-info">

              <h3>{member.name}</h3>

              <p className="team-role">
                {member.role}
              </p>

              <div className="team-project">

                <span>PROJECT</span>

                <strong>
                  {member.project}
                </strong>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
function SettingsPage({ darkMode, setDarkMode }) {
  const [emailNotifications, setEmailNotifications] = useState(() => {
  const saved = localStorage.getItem("devtrack_email_notifications");
  return saved === null ? true : saved === "true";
});

const [activityNotifications, setActivityNotifications] = useState(() => {
  const saved = localStorage.getItem("devtrack_activity_notifications");
  return saved === null ? true : saved === "true";
});
useEffect(() => {
  localStorage.setItem(
    "devtrack_email_notifications",
    emailNotifications
  );
}, [emailNotifications]);

useEffect(() => {
  localStorage.setItem(
    "devtrack_activity_notifications",
    activityNotifications
  );
}, [activityNotifications]);
  return (
    <div className="dashboard">

      <section className="welcome-section">
        <div>
          <div className="welcome-label">
            <span className="online-dot" />
            Workspace Settings
          </div>

          <h2>Settings</h2>

          <p>
            Manage your workspace preferences and notifications.
          </p>
        </div>
      </section>

      <div className="settings-grid">

        {/* PROFILE SETTINGS */}

        <div className="settings-card">

          <div className="settings-card-header">
            <div>
              <span className="section-eyebrow">
                ACCOUNT
              </span>

              <h3>Profile Settings</h3>
            </div>
          </div>

          <div className="settings-field">
            <label>Name</label>

            <input
              type="text"
              defaultValue="D. Nageshwari"
            />
          </div>

          <div className="settings-field">
            <label>Role</label>

            <input
              type="text"
              defaultValue="Frontend Developer"
            />
          </div>

          <div className="settings-field">
            <label>Location</label>

            <input
              type="text"
              defaultValue="Telangana, India"
            />
          </div>

          <button className="settings-save">
            Save Profile
          </button>

        </div>


        {/* NOTIFICATIONS */}

        <div className="settings-card">

          <div className="settings-card-header">
            <div>
              <span className="section-eyebrow">
                NOTIFICATIONS
              </span>

              <h3>Notification Preferences</h3>
            </div>
          </div>


          <div className="settings-toggle">

            <div>
              <strong>Email Notifications</strong>

              <p>
                Receive important workspace updates.
              </p>
            </div>

            <button
              className={`toggle ${
                emailNotifications ? "active" : ""
              }`}
              onClick={() =>
                setEmailNotifications(
                  (current) => !current
                )
              }
            >
              <span />
            </button>

          </div>


          <div className="settings-toggle">

            <div>
              <strong>Activity Notifications</strong>

              <p>
                Get notified about development activity.
              </p>
            </div>

            <button
              className={`toggle ${
                activityNotifications ? "active" : ""
              }`}
              onClick={() =>
                setActivityNotifications(
                  (current) => !current
                )
              }
            >
              <span />
            </button>

          </div>

        </div>


        {/* APPEARANCE */}

        <div className="settings-card">

          <div className="settings-card-header">
            <div>
              <span className="section-eyebrow">
                APPEARANCE
              </span>

              <h3>Display Preferences</h3>
            </div>
          </div>


          <div className="settings-toggle">

            <div>
              <strong>Dark Mode</strong>

              <p>
                Switch between light and dark appearance.
              </p>
            </div>

            <button
              className={`toggle ${
                darkMode ? "active" : ""
              }`}
              onClick={() =>
                setDarkMode(
                  (current) => !current
                )
              }
            >
              <span />
            </button>

          </div>

        </div>


        {/* WORKSPACE */}

        <div className="settings-card">

          <div className="settings-card-header">
            <div>
              <span className="section-eyebrow">
                WORKSPACE
              </span>

              <h3>Workspace Information</h3>
            </div>
          </div>

          <div className="workspace-info-row">
            <span>Workspace</span>
            <strong>My Workspace</strong>
          </div>

          <div className="workspace-info-row">
            <span>Team</span>
            <strong>Developer Team</strong>
          </div>

          <div className="workspace-info-row">
            <span>Projects</span>
            <strong>8 Active</strong>
          </div>

        </div>

      </div>

    </div>
  );
}

// ===============================
// MAIN APP
// ===============================

function App() {

  const [activePage, setActivePage] =
    useState("Overview");

  const [darkMode, setDarkMode] =  useState(() => {
    const savedDarkMode = localStorage.getItem("devtrack_darkMode");
    return savedDarkMode === "true";
  });

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const [filter, setFilter] =
    useState("All");

  const [showAllTasks, setShowAllTasks] =
    useState(false);

  const [showAllActivities, setShowAllActivities] =
    useState(false);

  const [showNotifications, setShowNotifications] =
    useState(false);

  const [loading, setLoading] =
    useState(true);

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("devtrack_tasks");
    return savedTasks 
       ? JSON.parse(savedTasks)
       : initialTasks
  });

  const [activities, setActivities] = useState(() => {
  const savedActivities = localStorage.getItem(
    "devtrack_activities"
  );

  return savedActivities
    ? JSON.parse(savedActivities)
    : initialActivities;
});

  const [notificationCount, setNotificationCount] =
    useState(3);


  // ===============================
  // LOADING
  // ===============================

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);

  }, []);
  useEffect(() => {
    localStorage.setItem(
        "devtrack_tasks",
        JSON.stringify(tasks)
    );
  }, [tasks]);
  useEffect(() => {
  localStorage.setItem(
    "devtrack_activities",
    JSON.stringify(activities)
  );
}, [activities]);
  useEffect(() => {
    localStorage.setItem(
        "devtrack_darkMode",
        darkMode
    );
  }, [darkMode]);


  // ===============================
  // FILTER PROJECTS
  // ===============================

  const filteredProjects = useMemo(() => {

    return projects.filter((project) => {

      const matchesSearch =
        project.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        project.description
          .toLowerCase()
          .includes(search.toLowerCase());


      const matchesFilter =
        filter === "All" ||
        project.category === filter;


      return matchesSearch && matchesFilter;

    });

  }, [search, filter]);


  // ===============================
  // COMPLETE TASK
  // ===============================

  const completeTask = (id) => {

    setTasks((currentTasks) =>

      currentTasks.map((task) =>

        task.id === id
          ? {
              ...task,

              status:
                task.status === "Completed"
                  ? "In Progress"
                  : "Completed",
            }

          : task

      )

    );

  };


  // ===============================
  // LOG ACTIVITY
  // ===============================

  const logActivity = () => {

    const newActivity = {

      id: Date.now(),

      type: "commit",

      title:
        "Logged a new development activity",

      project:
        "Developer Dashboard",

      time:
        "Just now",
    };


    setActivities((current) => [

      newActivity,

      ...current,

    ]);


    setNotificationCount(
      (current) => current + 1
    );

  };


  // ===============================
  // LOADING SCREEN
  // ===============================

  if (loading) {

    return (

      <div className="loading-screen">

        <div className="loading-logo">
          D
        </div>

        <div className="loading-spinner" />

        <h2>
          Preparing your workspace...
        </h2>

        <p>
          Loading productivity insights
        </p>

      </div>

    );

  }


  // ===============================
  // MAIN UI
  // ===============================

  return (

    <div className={`app ${darkMode ? "dark-mode" : ""}`}>

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />


      <main className="main-content">

        <Topbar
          search={search}
          setSearch={setSearch}
          setMobileOpen={setMobileOpen}
          notificationCount={notificationCount}
          onAddActivity={logActivity}
          showNotifications={showNotifications}
          setShowNotifications={setShowNotifications}
        />


        {/* ================================= */}
        {/* PROJECTS PAGE */}
        {/* ================================= */}

        {activePage === "Projects" ? (

          <ProjectsPage
            projects={projects}
          />
        ) : activePage === "Tasks" ? (
            <TasksPage 
                tasks={tasks}
                onComplete={completeTask}
            />
        ) : activePage === "Analytics" ? (
            <AnalyticsPage/>
        ) : activePage === "Team" ? (
            <TeamPage/>
        ) : activePage === "Settings" ? ( 
            <SettingsPage 
                darkMode={darkMode}
                setDarkMode={setDarkMode}/>
        ) : (

          /* ================================= */
          /* OVERVIEW PAGE */
          /* ================================= */

          <div className="dashboard">

            {/* WELCOME SECTION */}

            <section className="welcome-section">

              <div>

                <div className="welcome-label">

                  <span className="online-dot" />

                  Workspace active

                </div>


                <h2>
                  Good evening, Nageshwari 👋
                </h2>


                <p>
                  Here's what's happening with your
                  development work today.
                </p>

              </div>


              <div className="date-card">

                <span>
                  September 20, 2026
                </span>

                <strong>
                  Sunday
                </strong>

              </div>

            </section>


            {/* STATS */}

            <section className="stats-grid">

              <StatCard
                icon={<Code2 size={21} />}
                title="Coding Hours"
                value="37.7h"
                change="+18.4%"
                description="vs. previous week"
                type="purple"
              />


              <StatCard
                icon={<CheckCircle2 size={21} />}
                title="Tasks Completed"
                value="86"
                change="+12.8%"
                description="this month"
                type="green"
              />


              <StatCard
                icon={<Rocket size={21} />}
                title="Active Projects"
                value="8"
                change="+2"
                description="in development"
                type="blue"
              />


              <StatCard
                icon={<Flame size={21} />}
                title="Productivity"
                value="87%"
                change="+6.2%"
                description="personal best"
                type="orange"
              />

            </section>


            {/* MAIN GRID */}

            <section className="main-grid">


              {/* LEFT COLUMN */}

              <div className="main-column">

                <ProductivityChart />


                {/* PROJECTS */}

                <div className="projects-section">

                  <div className="section-heading projects-heading">

                    <div>

                      <span className="section-eyebrow">
                        WORKSPACE
                      </span>

                      <h2>
                        Your Projects
                      </h2>

                    </div>


                    <div className="project-filters">

                      {[
                        "All",
                        "AI",
                        "Full Stack",
                        "Frontend",
                      ].map((item) => (

                        <button
                          key={item}
                          className={
                            filter === item
                              ? "selected"
                              : ""
                          }
                          onClick={() =>
                            setFilter(item)
                          }
                        >
                          {item}
                        </button>

                      ))}

                    </div>

                  </div>


                  {filteredProjects.length > 0 ? (

                    <div className="projects-grid">

                      {filteredProjects.map(
                        (project) => (

                          <ProjectCard
                            key={project.id}
                            project={project}
                          />

                        )
                      )}

                    </div>

                  ) : (

                    <EmptyState
                      title="No projects found"
                      description="Try changing your search or filter."
                    />

                  )}

                </div>


                {/* TASKS */}

                <div className="tasks-section">

                  <div className="section-heading">

                    <div>

                      <span className="section-eyebrow">
                        TASK MANAGEMENT
                      </span>

                      <h2>
                        Today's Tasks
                      </h2>

                    </div>


                    <button
                      className="view-all"
                      onClick={() =>
                        setShowAllTasks(
                          (current) => !current
                        )
                      }
                    >

                      {showAllTasks
                        ? "Show less"
                        : "View all"}

                    </button>

                  </div>


                  <div className="task-list">

                    {(showAllTasks
                      ? tasks
                      : tasks.slice(0, 4)
                    ).map((task) => (

                      <TaskCard
                        key={task.id}
                        task={task}
                        onComplete={completeTask}
                      />

                    ))}

                  </div>

                </div>

              </div>


              {/* RIGHT COLUMN */}

              <aside className="right-column">

                <ProfileCard />


                {/* ACTIVITY */}

                <div className="activity-card">

                  <div className="section-heading">

                    <div>

                      <span className="section-eyebrow">
                        TIMELINE
                      </span>

                      <h2>
                        Recent Activity
                      </h2>

                    </div>

                    <Activity size={19} />

                  </div>


                  <div className="activity-list">

                    {(showAllActivities
                      ? activities
                      : activities.slice(0, 4)
                    ).map((activity) => (

                      <ActivityItem
                        key={activity.id}
                        activity={activity}
                      />

                    ))}

                  </div>


                  <button
                    className="activity-footer"
                    onClick={() =>
                      setShowAllActivities(
                        (current) => !current
                      )
                    }
                  >

                    {showAllActivities
                      ? "Show recent activity"
                      : "View activity history"}

                  </button>

                </div>


                {/* FOCUS */}

                <div className="focus-card">

                  <div className="focus-icon">

                    <Target size={21} />

                  </div>


                  <div>

                    <span>
                      FOCUS SCORE
                    </span>

                    <h3>
                      87 / 100
                    </h3>

                    <p>
                      You're maintaining a strong
                      development rhythm.
                    </p>

                  </div>

                </div>


                {/* DEADLINE */}

                <div className="deadline-card">

                  <div className="deadline-icon">

                    <Clock3 size={20} />

                  </div>


                  <div>

                    <span>
                      NEXT DEADLINE
                    </span>

                    <h3>
                      RAG Assistant
                    </h3>

                    <p>
                      Documentation · Sep 24
                    </p>

                  </div>

                </div>


              </aside>

            </section>

          </div>

        )}

      </main>

    </div>

  );

}


export default App;