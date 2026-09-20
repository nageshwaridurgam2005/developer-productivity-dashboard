export const projects = [
  {
    id: 1,
    name: "AI Productivity Assistant",
    description:
      "AI-powered workspace for summarization, content generation and intelligent suggestions.",
    category: "AI",
    progress: 82,
    tasks: 18,
    completed: 15,
    color: "purple",
    icon: "🤖",
    status: "In Progress",
  },
  {
    id: 2,
    name: "RAG Knowledge Assistant",
    description:
      "Retrieval augmented generation application for asking questions from uploaded documents.",
    category: "AI",
    progress: 68,
    tasks: 24,
    completed: 16,
    color: "blue",
    icon: "🧠",
    status: "In Progress",
  },
  {
    id: 3,
    name: "Homely Hub",
    description:
      "Property discovery platform with authentication, listings and backend integration.",
    category: "Full Stack",
    progress: 91,
    tasks: 32,
    completed: 29,
    color: "green",
    icon: "🏠",
    status: "Almost Done",
  },
  {
    id: 4,
    name: "Developer Portfolio",
    description:
      "Personal portfolio showcasing projects, skills, certifications and achievements.",
    category: "Frontend",
    progress: 54,
    tasks: 15,
    completed: 8,
    color: "orange",
    icon: "💻",
    status: "In Progress",
  },
];

export const tasks = [
  {
    id: 1,
    title: "Complete dashboard UI",
    project: "Developer Dashboard",
    priority: "High",
    status: "Completed",
    due: "Today",
  },
  {
    id: 2,
    title: "Connect authentication API",
    project: "Homely Hub",
    priority: "High",
    status: "In Progress",
    due: "Tomorrow",
  },
  {
    id: 3,
    title: "Improve mobile responsiveness",
    project: "AI Assistant",
    priority: "Medium",
    status: "In Progress",
    due: "Sep 22",
  },
  {
    id: 4,
    title: "Write project documentation",
    project: "RAG Assistant",
    priority: "Low",
    status: "Pending",
    due: "Sep 24",
  },
];

export const activities = [
  {
    id: 1,
    type: "commit",
    title: "Pushed 4 commits",
    project: "Developer Dashboard",
    time: "12 minutes ago",
  },
  {
    id: 2,
    type: "task",
    title: "Completed a task",
    project: "AI Productivity Assistant",
    time: "1 hour ago",
  },
  {
    id: 3,
    type: "project",
    title: "Updated project progress",
    project: "RAG Knowledge Assistant",
    time: "3 hours ago",
  },
  {
    id: 4,
    type: "comment",
    title: "Added project documentation",
    project: "Homely Hub",
    time: "Yesterday",
  },
];

export const weeklyData = [
  { day: "Mon", hours: 4.5 },
  { day: "Tue", hours: 6 },
  { day: "Wed", hours: 5.2 },
  { day: "Thu", hours: 7.5 },
  { day: "Fri", hours: 6.8 },
  { day: "Sat", hours: 4.2 },
  { day: "Sun", hours: 3.5 },
];