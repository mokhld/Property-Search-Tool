// TYPES
import { propForSearch } from "../types";

const Search = ({ inpVal, setInpVal, handleInpChange }: propForSearch) => {
  return (
    <div className="search_container">
      <label className="fw600 mb-3">Search</label>
      <div className="row">
        <div className="col col-md-10">
          <input
            className="px-3 w-100 fw-light"
            type="text"
            placeholder="Address"
            onChange={(e) => setInpVal(e.target.value)}
            value={inpVal}
          />
        </div>
        <div className="col-3 col-md-2">
          <button
            onClick={() => handleInpChange(inpVal)}
            className="w-100 h-100"
          >
            <div>Search</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
