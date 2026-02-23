// src/components/Profile.jsx
import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

export default function Profile() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Profile Page</h2>

      {/* Navigation Links */}
      <nav>
        <Link to="details">Profile Details</Link> |{" "}
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Nested Routes inside Profile */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
