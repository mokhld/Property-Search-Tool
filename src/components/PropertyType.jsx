const PropertyType = ({ types, active, handlePropertyType }) => {
  return (
    <div className="property_type">
      <label className="fw600 mb-3">Property Types</label>
      <div className="row">
        <div className="col-12">
          <div>
            <ul className="list-unstyled d-flex flex-wrap d-md-block bg_color2 px-2 py-2 mb-0">
              {types.map((prev, i) => {
                return (
                  <li
                    onClick={() => handlePropertyType(prev.value)}
                    key={i}
                    className={`${active === prev.value && "fw-bold"} ${
                      (i !== 0 && "px-2") || "pe-2"
                    } py-1 pointer px-md-0`}
                  >
                    {prev.label}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyType;
