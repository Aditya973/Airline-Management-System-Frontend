import React, { useEffect, useState } from "react";
import { Select, Card, Button, Space } from "antd";
import "./SearchFlight.css";
import Flight from "../../Flight";

function SearchFlight() {
  const [cityList, setCityList] = useState([]);
  const [sourceCity, setSourceCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [flightList,setFlightList] = useState([]);
  async function fetchData() {
    const response = await fetch("http://localhost:3010/api/v1/city");
    const jsonData = await response.json();
    const cityData = jsonData.data;
    const tempArr = [];
    cityData.forEach((item) => {
      tempArr.push({
        label: item.name,
        value: item.name,
        cityId: item.id,
      });
    });
    setCityList(tempArr);
  }
  
  async function handleSubmit(e) {
    e.preventDefault();
    const flightResponse = await fetch('http://localhost:3010/api/v1/flight?'+new URLSearchParams({
      departureCityId: sourceCity,
      arrivalCityId: destinationCity,
    }));
    const flightJson = await flightResponse.json();
    const flightArr = flightJson.data;
    setFlightList(flightArr);
  }
  function handleSourceCity(cityName) {
    const cityId = cityList.find((city) => city.value === cityName).cityId;
    setSourceCity(cityId);
  }
  function handleDestCity(cityName) {
    const cityId = cityList.find((city) => city.value === cityName).cityId;
    setDestinationCity(cityId);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container1">
      <div className="searchBox">
        <Card
          className="searchCard"
          title={<h1 style={{ textAlign: "center" }}>Search For Flights</h1>}
        >
          <form onSubmit={handleSubmit}>
            <div className="selectBox">
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Where From?"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={cityList}
                onChange={(value) => {
                  handleSourceCity(value);
                }}
              />

              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Where To?"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={cityList}
                onChange={(value) => {
                  handleDestCity(value);
                }}
              />
            </div>
            <div className="searchBtn">
              <Button type="primary" htmlType="submit">
                Search
              </Button>
            </div>
          </form>
        </Card>
      </div>
      <div className="searchResults">
        {
          flightList.map((item)=>{
            return <Flight key = {item.id} item = {item}/>
          })
        }
      </div>
    </div>
  );
}

export default SearchFlight;
