// TYPES
import { singleObject, propsForResultsComp } from "../types";

const SearchResults = ({
  selectedProperties,
  setSelectedProperties,
  propertiesList,
}: propsForResultsComp) => {
  // HANDLING SELECTED DATA
  const selectedHandle = (data: singleObject) => {
    setSelectedProperties((prev: singleObject[]) => {
      return [...prev, data];
    });
  };

  // REMOVING SELECTED DATA
  const removingHandle = (data: singleObject) => {
    setSelectedProperties((prev: singleObject[]) => {
      let filteringObject = prev.filter((item) => item.id !== data.id);
      return [...filteringObject];
    });
  };

  return (
    <div className="selected_properties search_results">
      <label className="fw600 mb-3">Search Results</label>
      <div className="row">
        <div className="col-12">
          <div className="table_container">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                        points="2 14 9 20 22 4"
                      ></polyline>
                    </svg>
                  </th>
                  <th>Address</th>
                  <th>Postcode</th>
                  <th>Property type</th>
                  <th>Number of rooms</th>
                  <th>
                    Floor area (m <sup>2</sup>)
                  </th>
                </tr>
              </thead>
              <tbody>
                {propertiesList.map((prev: singleObject, i: number) => {
                  const {
                    address,
                    postcode,
                    propertyType,
                    floorArea,
                    numberOfRooms,
                    id,
                  } = prev;

                  // FILTERING SELECTED ID'S
                  const alreadyIn = selectedProperties.filter(
                    (item: singleObject) => item.id === id
                  );

                  return (
                    <tr key={i}>
                      <td>
                        <input
                          checked={(alreadyIn.length && true) || false}
                          type="checkbox"
                          onClick={() => {
                            if (alreadyIn.length) {
                              removingHandle(prev);
                            } else {
                              selectedHandle(prev);
                            }
                          }}
                        />
                      </td>
                      <td>{address}</td>
                      <td>{postcode}</td>
                      <td>{propertyType}</td>
                      <td>{numberOfRooms}</td>
                      <td>{floorArea}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
