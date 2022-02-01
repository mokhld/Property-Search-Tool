// TYPES
import { singleObject, singleObjectProp } from "../types";

const SelectesProperties = ({ selectedProperties }: singleObjectProp) => {
  return (
    <div className="selected_properties mt-4">
      <label className="fw600 mb-3">Selected Properties</label>
      <div className="row">
        <div className="col-12">
          <div className="table_container">
            <table className="table">
              <thead>
                <tr>
                  <th>Address</th>
                  <th>Postcode</th>
                  <th>Number of rooms</th>
                  <th>
                    Floor area (m <sup>2</sup>)
                  </th>
                </tr>
              </thead>
              <tbody>
                {(selectedProperties.length &&
                  selectedProperties.map((prev: singleObject, i: number) => {
                    const { address, postcode, floorArea, numberOfRooms } =
                      prev;

                    return (
                      <tr key={i}>
                        <td>{address}</td>
                        <td>{postcode}</td>
                        <td>{numberOfRooms}</td>
                        <td>{floorArea}</td>
                      </tr>
                    );
                  })) || (
                  <tr>
                    <td colSpan={4}>No data</td>
                  </tr>
                )}
                <tr>
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

export default SelectesProperties;
