import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2 className="routeTitle">Oops, page not found!</h2>
      <Link to="/Home">Go Home</Link>
    </div>
  );
}
