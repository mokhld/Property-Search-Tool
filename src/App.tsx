import { useEffect, useState } from "react";

// CSS IMPORTS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";

// IMPORTING API
import {
  fetchProperties,
  getAvailablePropertyTypes,
  sampleProperties,
} from "./Api";

// COMPONENTS
import Header from "./components/Header";
import Search from "./components/Search";
import SelectesProperties from "./components/SelectesProperties";
import SearchResults from "./components/SearchResults";
import PropertyType from "./components/PropertyType";

// TYPES
import { searched, singleObject } from "./types";

function App() {
  // PROPERTIES LIST
  const [propertiesList, setPropertiesList] = useState<any>(sampleProperties);

  // PROPERTY TYPE LIST
  const [types, setTypes] = useState<any>([]);

  // SELECTED PROPERTIES
  const [selectedProperties, setSelectedProperties] = useState<singleObject[]>(
    []
  );

  // SEARCHING FUNCTION
  function searchProperties(inpVal: string, active: any) {
    let searchedData: searched = {
      address: inpVal,
      propertyType: active,
    };

    fetchProperties(searchedData).then((res) => {
      setPropertiesList(res.properties);
    });
  }

  // ACTIVE TYPE
  const [active, setActive] = useState<string>("all");

  // INPUT STATE
  const [inpVal, setInpVal] = useState<string>("");

  // PROPERTY TYPE "API"
  useEffect(() => {
    getAvailablePropertyTypes().then((res) => setTypes(res.propertyTypes));
  }, []);

  // FILTERS START
  // HANDLE TYPE
  const handlePropertyType = (type: string) => {
    setActive(type);

    if (type === "all") {
      setPropertiesList(sampleProperties);
    } else {
      searchProperties((inpVal !== "" && inpVal) || "", type);
    }
  };

  // HANDLE TYPE
  const handleInpChange = (inpValue: string) => {
    if (active === "all") {
      searchProperties(inpValue, undefined);
    } else {
      searchProperties(inpValue, active);
    }
  };
  // FILTERS END

  return (
    <>
      <Header />

      {/* BODY */}
      <div className="page_container mt-5 mt-md-4">
        <div className="container-fluid">
          <div className="row">
            <div className="ms-md-auto col-12 col-md-10">
              <Search
                inpVal={inpVal}
                setInpVal={setInpVal}
                handleInpChange={handleInpChange}
              />
              <SelectesProperties selectedProperties={selectedProperties} />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-2">
              <PropertyType
                active={active}
                types={types}
                handlePropertyType={handlePropertyType}
              />
            </div>
            <div className="col-12 col-md-10">
              <SearchResults
                selectedProperties={selectedProperties}
                setSelectedProperties={setSelectedProperties}
                propertiesList={propertiesList}
              />
            </div>
          </div>
        </div>
      </div>
      {/* BODY */}
    </>
  );
}

export default App;
