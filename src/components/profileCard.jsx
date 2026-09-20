import { useEffect, useState } from "react";
import {
  MapPin,
  GitBranch,
  Link,
  Code2,
} from "lucide-react";

function ProfileCard() {
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(() => {
  return (
    localStorage.getItem("devtrack_profile_name") ||
    "D. Nageshwari"
  );
});

const [role, setRole] = useState(() => {
  return (
    localStorage.getItem("devtrack_profile_role") ||
    "Frontend Developer · CSE"
  );
});

const [location, setLocation] = useState(() => {
  return (
    localStorage.getItem("devtrack_profile_location") ||
    "Telangana, India"
  );
});

useEffect(() => {
  localStorage.setItem(
    "devtrack_profile_name",
    name
  );

  localStorage.setItem(
    "devtrack_profile_role",
    role
  );

  localStorage.setItem(
    "devtrack_profile_location",
    location
  );
}, [name, role, location]);
  return (
    <div className="profile-card">
      <div className="profile-cover" />

      <div className="profile-body">
        <div className="large-avatar">DN</div>

        <div className="profile-main">
          <h2>{name}</h2>

          <p>{role}</p>

          <div className="profile-location">
            <MapPin size={15} />
            {location}
          </div>
        </div>

        <button className="edit-profile"
            onClick={() => setEditing(true)}>
          Edit Profile
        </button>
      </div>
        {editing && (
  <div className="profile-edit-form">
    <h3>Edit Profile</h3>

    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Name"
    />

    <input
      type="text"
      value={role}
      onChange={(e) => setRole(e.target.value)}
      placeholder="Role"
    />

    <input
      type="text"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      placeholder="Location"
    />

    <div className="profile-edit-actions">
      <button
        onClick={() => setEditing(false)}
      >
        Cancel
      </button>

      <button
        onClick={() => setEditing(false)}
      >
        Save Changes
      </button>
    </div>
  </div>
)}
      <div className="profile-stats">
        <div>
          <strong>12</strong>
          <span>Projects</span>
        </div>

        <div>
          <strong>86</strong>
          <span>Tasks Done</span>
        </div>

        <div>
          <strong>428</strong>
          <span>Commits</span>
        </div>
      </div>

      <div className="profile-links">
        <a href="#">
          <GitBranch size={17} />
          GitHub
        </a>

        <a href="#">
          <Link size={17} />
          LinkedIn
        </a>

        <a href="#">
          <Code2 size={17} />
          LeetCode
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;