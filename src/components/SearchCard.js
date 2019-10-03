import React from "react";
import SearchDate from "./SearchDate";
import SearchParticipants from "./SearchParticipants";
import SearchLocation from "./SearchLocation";
import SearchButton from "./SearchButton";
import "../stylesheets/layouts/SearchCard.scss";

const SearchCard = props => {
  const {
    offices,
    employees,
    handleDateIn,
    handleDateOut,
    getAirportPropByCode,
    getAirportObjectByCode,
    airport,
    getSelectedEmployees
  } = props;

  return (
    <React.Fragment>
      <div className="search-card">
        <SearchDate handleDateIn={handleDateIn} handleDateOut={handleDateOut} />
        <SearchParticipants
          employees={employees}
          getAirportPropByCode={getAirportPropByCode}
          getSelectedEmployees={getSelectedEmployees}
        />
        <SearchLocation
          offices={offices}
          getAirportPropByCode={getAirportPropByCode}
          getAirportObjectByCode={getAirportObjectByCode}
          airport={airport}
        />
        <SearchButton />
      </div>
    </React.Fragment>
  );
};

export default SearchCard;
