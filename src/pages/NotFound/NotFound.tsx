import { Link } from "../../components/Link/Link";

export function NotFound() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">&raquo; Go to the home page</Link>
      </p>
    </div>
  );
}
