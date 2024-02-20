import { otters } from "../stores/otters";
import Otter from "./Otter";
import { Link, useSearchParams } from "react-router-dom";

export default function OtterGallery() {
  const [searchParams] = useSearchParams();
  // get looks through what has been generated and will find one of the keys that will match on it, in this case sort
  const sortType = searchParams.get("sort");
  const copy = [...otters];
  if (sortType == "asc") {
    // sort alphabetically
    copy.sort(handleSort);
  } else if (sortType == "desc") {
    // sort other way
    copy.sort(handleSort).reverse();
  }

  function handleSort(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }

  return (
    <div>
      <div id="sortButton">
        <Link className="sortLink" to="/otters?sort=asc">
          Sort Ascending
        </Link>
        <Link className="sortLink" to="/otters?sort=desc">
          Sort Descending
        </Link>
        <Link className="sortLink" to="/otters">
          No Sort
        </Link>
      </div>
      <div className="otter-container">
        {copy.map((otter) => (
          <Otter key={otter.id} otter={otter} />
        ))}
      </div>
    </div>
  );
}
