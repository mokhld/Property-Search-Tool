export interface searched {
	address: any;
	propertyType: any;
}

export interface propForSearch {
	inpVal: string;
	setInpVal: any;
	handleInpChange: any;
}

// SINGLE OBJECT OF AN ARRAY
export interface singleObject {
	address: string;
	id: string;
	propertyType: string;
	numberOfRooms: number;
	floorArea: number;
	postcode: string;
}

// PROP FOR SELECTED COMPONENT
export interface singleObjectProp {
	selectedProperties: singleObject[];
}

// PROP FOR RESULTS COMPONENT
export interface propsForResultsComp {
	selectedProperties: singleObject[];
	setSelectedProperties: any;
	propertiesList: singleObject[];
}
