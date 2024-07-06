import { Link, NavLink, Outlet } from "react-router-dom";

export function Profiles() {
  const profiles = [1, 2, 3, 4, 5, 6];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        {profiles.map((profile) => (
          <Link
            key={profile}
            to={`/profiles/${profile}`}
            className={({ isActive }) => {
              return isActive ? "text-primary-600" : "";
            }}
          >
            Profile {profile}
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
