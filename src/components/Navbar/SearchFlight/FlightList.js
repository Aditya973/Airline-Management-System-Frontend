import React, { useEffect, useState } from "react";

function FlightList(props) {
  const departureCity = props.fromCity;
  const arrivalCity = props.toCity;
  const [flightList, setFlightList] = useState([]);
  async function fetchData() {
    const response = await fetch(
      "http://localhost:3010/api/v1/flight?" +
        new URLSearchParams({
          departureCityId: departureCity,
          arrivalCityId: arrivalCity,
        })
    );
    const jsonData = await response.json();
    const tempArr = jsonData.data;
    setFlightList(tempArr);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return <div className="flightListContainer"></div>;
}

export default FlightList;
