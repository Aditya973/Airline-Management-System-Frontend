import { Card } from "antd";
import React, { useEffect, useState } from "react";
import "../css/Flight.css";
import EditFlight from "./EditFlight";

function Flight(props) {
  const flightData = props.item;
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [departureAirport, setDepartureAirport] = useState("");
  async function fetchData() {
    const res1 = await fetch(
      `http://localhost:3010/api/v1/airport/${flightData.departureAirportId}`
    );
    const res2 = await fetch(
      `http://localhost:3010/api/v1/airport/${flightData.arrivalAirportId}`
    );
    const jsonData1 = await res1.json();
    const jsonData2 = await res2.json();
    setDepartureAirport(jsonData1.data.name);
    setArrivalAirport(jsonData2.data.name);
  }
  useEffect(() => {
    fetchData();
  });
  return (
    <div>
      <Card
        title={
          <h1 style={{ textAlign: "center" }}>
            {departureAirport} to {arrivalAirport}
          </h1>
        }
        className="flightCard"
      >
        <h3>Flight Number: {flightData.flightNumber}</h3>
        <h3>Price: {flightData.price}</h3>
        <h3>Departure Time: {flightData.departureTime}</h3>
        <h3>Arrival Time: {flightData.arrivalTime}</h3>
        <h3>Seats Available: {flightData.totalSeats}</h3>
        <EditFlight
          flightData={flightData}
          arrivalAirport={arrivalAirport}
          departureAirport={departureAirport}
          airplaneList = {props.airplaneList}
          airportList = {props.airportList}
        />
      </Card>
    </div>
  );
}

export default Flight;
