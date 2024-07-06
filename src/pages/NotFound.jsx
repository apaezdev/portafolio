import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      404 Not found
      <Link to="/">Home from Link</Link>
      <a href="/">Home from A</a>
    </div>
  );
}
